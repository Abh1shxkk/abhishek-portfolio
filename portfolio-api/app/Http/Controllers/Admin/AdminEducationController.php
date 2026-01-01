<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;

class AdminEducationController extends Controller
{
    public function index()
    {
        return response()->json(Education::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'degree' => 'required|string|max:255',
            'school' => 'required|string|max:255',
            'year' => 'required|string|max:50',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        $education = Education::create($validated);
        return response()->json(['message' => 'Education created successfully', 'data' => $education], 201);
    }

    public function update(Request $request, $id)
    {
        $education = Education::findOrFail($id);
        
        $validated = $request->validate([
            'degree' => 'required|string|max:255',
            'school' => 'required|string|max:255',
            'year' => 'required|string|max:50',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        $education->update($validated);
        return response()->json(['message' => 'Education updated successfully', 'data' => $education]);
    }

    public function destroy($id)
    {
        $education = Education::findOrFail($id);
        $education->delete();
        return response()->json(['message' => 'Education deleted successfully']);
    }
}
