<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = Profile::first();
        
        if (!$profile) {
            return response()->json([
                'bio' => 'Computer Science Engineering graduate with hands-on experience in Laravel, PHP, JavaScript, and WordPress-based frontend development.',
                'location' => 'Meerut, UP',
                'experience' => '1+ Years',
                'availability' => 'Open',
                'avatar' => null
            ]);
        }
        
        return response()->json([
            'bio' => $profile->bio,
            'location' => $profile->location,
            'experience' => $profile->years_experience,
            'availability' => $profile->availability,
            'avatar' => $profile->avatar
        ]);
    }
}
