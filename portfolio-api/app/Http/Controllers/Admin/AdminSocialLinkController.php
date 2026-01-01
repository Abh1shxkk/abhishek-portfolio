<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SocialLink;
use Illuminate\Http\Request;

class AdminSocialLinkController extends Controller
{
    public function index()
    {
        return response()->json(SocialLink::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|string|max:500',
            'username' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $socialLink = SocialLink::create($validated);
        return response()->json(['message' => 'Social link created successfully', 'data' => $socialLink], 201);
    }

    public function update(Request $request, $id)
    {
        $socialLink = SocialLink::findOrFail($id);
        
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|string|max:500',
            'username' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $socialLink->update($validated);
        return response()->json(['message' => 'Social link updated successfully', 'data' => $socialLink]);
    }

    public function destroy($id)
    {
        $socialLink = SocialLink::findOrFail($id);
        $socialLink->delete();
        return response()->json(['message' => 'Social link deleted successfully']);
    }
}
