<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Skill;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('order')->get();
        
        return response()->json($skills->map(function ($skill) {
            return [
                'title' => $skill->title,
                'items' => $skill->items ?? []
            ];
        }));
    }
}
