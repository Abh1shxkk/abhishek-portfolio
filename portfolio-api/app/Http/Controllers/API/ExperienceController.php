<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('order')->get();
        
        return response()->json($experiences->map(function ($exp) {
            return [
                'id' => $exp->id,
                'company' => $exp->company,
                'role' => $exp->position,
                'duration' => $exp->duration,
                'description' => $exp->description,
                'technologies' => $exp->tags ?? []
            ];
        }));
    }
}
