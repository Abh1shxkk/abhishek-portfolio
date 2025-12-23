<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $table = 'experience';
    
    protected $fillable = ['position', 'company', 'duration', 'description', 'tags', 'order'];
    
    protected $casts = [
        'tags' => 'array'
    ];
}
