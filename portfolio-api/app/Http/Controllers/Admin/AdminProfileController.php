<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class AdminProfileController extends Controller
{
    public function index()
    {
        return response()->json(Profile::first());
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'bio' => 'nullable|string',
            'availability' => 'nullable|string|max:50',
            'years_experience' => 'nullable|string|max:50',
            'avatar' => 'nullable|string|max:500',
            'resume_url' => 'nullable|string|max:500',
        ]);

        $profile = Profile::first();
        if ($profile) {
            $profile->update($validated);
        } else {
            $profile = Profile::create($validated);
        }

        return response()->json(['message' => 'Profile updated successfully', 'data' => $profile]);
    }
}
