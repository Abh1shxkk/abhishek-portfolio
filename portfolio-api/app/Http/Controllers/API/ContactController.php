<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string'
        ]);
        
        $contact = ContactMessage::create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully!'
        ], 201);
    }
}
