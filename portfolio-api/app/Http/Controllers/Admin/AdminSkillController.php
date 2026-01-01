<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class AdminSkillController extends Controller
{
    public function index()
    {
        return response()->json(Skill::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'items' => 'required|array',
            'order' => 'nullable|integer',
        ]);

        $skill = Skill::create($validated);
        return response()->json(['message' => 'Skill category created successfully', 'data' => $skill], 201);
    }

    public function update(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'items' => 'required|array',
            'order' => 'nullable|integer',
        ]);

        $skill->update($validated);
        return response()->json(['message' => 'Skill category updated successfully', 'data' => $skill]);
    }

    public function destroy($id)
    {
        $skill = Skill::findOrFail($id);
        $skill->delete();
        return response()->json(['message' => 'Skill category deleted successfully']);
    }
}
