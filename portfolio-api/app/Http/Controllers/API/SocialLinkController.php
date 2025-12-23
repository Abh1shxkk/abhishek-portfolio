<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SocialLink;

class SocialLinkController extends Controller
{
    public function index()
    {
        $socials = SocialLink::where('is_active', true)->orderBy('order')->get();
        
        return response()->json($socials->map(function ($social) {
            return [
                'platform' => $social->platform,
                'url' => $social->url,
                'username' => $social->username
            ];
        }));
    }
}
