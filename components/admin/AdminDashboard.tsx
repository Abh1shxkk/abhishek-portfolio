import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { User, Briefcase, Code, FolderOpen, GraduationCap, Share2 } from 'lucide-react';

interface Stats {
  profile: boolean;
  experiences: number;
  skills: number;
  projects: number;
  education: number;
  socials: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    profile: false,
    experiences: 0,
    skills: 0,
    projects: 0,
    education: 0,
    socials: 0,
  });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('admin_token');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        const [profile, experiences, skills, projects, education, socials] =
          await Promise.all([
            fetch(`${apiUrl}/admin/profile`, { headers }).then((r) => r.json()),
            fetch(`${apiUrl}/admin/experiences`, { headers }).then((r) => r.json()),
            fetch(`${apiUrl}/admin/skills`, { headers }).then((r) => r.json()),
            fetch(`${apiUrl}/admin/projects`, { headers }).then((r) => r.json()),
            fetch(`${apiUrl}/admin/education`, { headers }).then((r) => r.json()),
            fetch(`${apiUrl}/admin/socials`, { headers }).then((r) => r.json()),
          ]);

        setStats({
          profile: !!profile,
          experiences: experiences?.length || 0,
          skills: skills?.length || 0,
          projects: projects?.length || 0,
          education: education?.length || 0,
          socials: socials?.length || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Profile', value: stats.profile ? 'Complete' : 'Incomplete', icon: User, color: 'indigo' },
    { label: 'Experiences', value: stats.experiences, icon: Briefcase, color: 'purple' },
    { label: 'Skill Categories', value: stats.skills, icon: Code, color: 'blue' },
    { label: 'Projects', value: stats.projects, icon: FolderOpen, color: 'green' },
    { label: 'Education', value: stats.education, icon: GraduationCap, color: 'yellow' },
    { label: 'Social Links', value: stats.socials, icon: Share2, color: 'pink' },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-zinc-400 mt-2">Welcome to your portfolio admin panel</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400 text-sm">{card.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${card.color}-500/10`}>
                    <Icon className={`text-${card.color}-500`} size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
