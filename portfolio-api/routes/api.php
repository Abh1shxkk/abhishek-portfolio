<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProfileController;
use App\Http\Controllers\API\ExperienceController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\EducationController;
use App\Http\Controllers\API\SocialLinkController;
use App\Http\Controllers\API\ContactController;

// Portfolio API Routes
Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/education', [EducationController::class, 'index']);
Route::get('/socials', [SocialLinkController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
