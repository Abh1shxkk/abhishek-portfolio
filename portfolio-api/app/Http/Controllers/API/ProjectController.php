<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('is_active', true)->orderBy('order')->get();
        
        return response()->json($projects->map(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title,
                'category' => $project->category,
                'description' => $project->description,
                'image' => $project->image ?? 'https://picsum.photos/800/600?random=' . $project->id,
                'tags' => $project->tags ?? [],
                'url' => $project->url ?? '#'
            ];
        }));
    }
}
