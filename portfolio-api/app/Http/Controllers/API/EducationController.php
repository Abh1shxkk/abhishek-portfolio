<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Education;

class EducationController extends Controller
{
    public function index()
    {
        $education = Education::orderBy('order')->get();
        
        return response()->json($education->map(function ($edu) {
            return [
                'id' => $edu->id,
                'degree' => $edu->degree,
                'school' => $edu->school,
                'year' => $edu->year,
                'description' => $edu->description ?? ''
            ];
        }));
    }
}
