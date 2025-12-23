<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'name', 'role', 'location', 'email', 'phone', 'bio', 
        'tagline', 'availability', 'years_experience', 'avatar', 'resume_url', 'github_url'
    ];
}
