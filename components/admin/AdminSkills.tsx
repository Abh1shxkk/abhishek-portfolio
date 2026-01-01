import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { Plus, Edit2, Trash2, Save, X, AlertCircle, CheckCircle } from 'lucide-react';

interface Skill {
  id?: number;
  title: string;
  items: string[];
  order: number;
}

const AdminSkills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Skill>({ title: '', items: [], order: 0 });
  const [itemsInput, setItemsInput] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const token = localStorage.getItem('admin_token');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`${apiUrl}/admin/skills`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = { ...formData, items: itemsInput.split(',').map((t) => t.trim()).filter(Boolean) };

    try {
      const url = editingId ? `${apiUrl}/admin/skills/${editingId}` : `${apiUrl}/admin/skills`;
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: `Skill category ${editingId ? 'updated' : 'created'} successfully!` });
        fetchSkills();
        resetForm();
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save skill category' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this skill category?')) return;

    try {
      const response = await fetch(`${apiUrl}/admin/skills/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Skill category deleted successfully!' });
        fetchSkills();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete skill category' });
    }
  };

  const handleEdit = (skill: Skill) => {
    setFormData(skill);
    setItemsInput(skill.items?.join(', ') || '');
    setEditingId(skill.id || null);
    setIsAdding(true);
  };

  const resetForm = () => {
    setFormData({ title: '', items: [], order: 0 });
    setItemsInput('');
    setEditingId(null);
    setIsAdding(false);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Skills</h1>
          <p className="text-zinc-400 mt-2">Manage your skill categories</p>
        </div>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <Plus size={20} />
            Add Category
          </button>
        )}
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success'
              ? 'bg-green-500/10 border border-green-500/20 text-green-400'
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}
        >
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{message.text}</span>
        </div>
      )}

      {isAdding && (
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">
              {editingId ? 'Edit Skill Category' : 'Add New Skill Category'}
            </h2>
            <button type="button" onClick={resetForm} className="text-zinc-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Category Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                placeholder="e.g., Core Stack, Design & Tools"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Skills (comma separated)</label>
              <textarea
                value={itemsInput}
                onChange={(e) => setItemsInput(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 resize-none"
                placeholder="Laravel, React, Node.js, MySQL"
                required
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border border-zinc-700 text-zinc-400 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              <Save size={20} />
              {editingId ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <div className="flex gap-1">
                <button
                  onClick={() => handleEdit(skill)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(skill.id!)}
                  className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items?.map((item) => (
                <span key={item} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {skills.length === 0 && !isAdding && (
          <div className="col-span-full text-center py-12 text-zinc-500">
            No skill categories added yet. Click "Add Category" to get started.
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminSkills;
