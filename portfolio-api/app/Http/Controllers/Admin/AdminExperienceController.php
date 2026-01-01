<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

class AdminExperienceController extends Controller
{
    public function index()
    {
        return response()->json(Experience::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'nullable|array',
            'order' => 'nullable|integer',
        ]);

        $experience = Experience::create($validated);
        return response()->json(['message' => 'Experience created successfully', 'data' => $experience], 201);
    }

    public function update(Request $request, $id)
    {
        $experience = Experience::findOrFail($id);
        
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'nullable|array',
            'order' => 'nullable|integer',
        ]);

        $experience->update($validated);
        return response()->json(['message' => 'Experience updated successfully', 'data' => $experience]);
    }

    public function destroy($id)
    {
        $experience = Experience::findOrFail($id);
        $experience->delete();
        return response()->json(['message' => 'Experience deleted successfully']);
    }
}
