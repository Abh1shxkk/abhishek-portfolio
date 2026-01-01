<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProfileController;
use App\Http\Controllers\API\ExperienceController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\EducationController;
use App\Http\Controllers\API\SocialLinkController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\AdminExperienceController;
use App\Http\Controllers\Admin\AdminSkillController;
use App\Http\Controllers\Admin\AdminProjectController;
use App\Http\Controllers\Admin\AdminEducationController;
use App\Http\Controllers\Admin\AdminSocialLinkController;

// Portfolio API Routes (Public)
Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/education', [EducationController::class, 'index']);
Route::get('/socials', [SocialLinkController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// Auth Routes
Route::post('/admin/login', [AuthController::class, 'login']);

// Admin Routes (Protected)
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Profile
    Route::get('/profile', [AdminProfileController::class, 'index']);
    Route::put('/profile', [AdminProfileController::class, 'update']);
    
    // Experience
    Route::get('/experiences', [AdminExperienceController::class, 'index']);
    Route::post('/experiences', [AdminExperienceController::class, 'store']);
    Route::put('/experiences/{id}', [AdminExperienceController::class, 'update']);
    Route::delete('/experiences/{id}', [AdminExperienceController::class, 'destroy']);
    
    // Skills
    Route::get('/skills', [AdminSkillController::class, 'index']);
    Route::post('/skills', [AdminSkillController::class, 'store']);
    Route::put('/skills/{id}', [AdminSkillController::class, 'update']);
    Route::delete('/skills/{id}', [AdminSkillController::class, 'destroy']);
    
    // Projects
    Route::get('/projects', [AdminProjectController::class, 'index']);
    Route::post('/projects', [AdminProjectController::class, 'store']);
    Route::put('/projects/{id}', [AdminProjectController::class, 'update']);
    Route::delete('/projects/{id}', [AdminProjectController::class, 'destroy']);
    
    // Education
    Route::get('/education', [AdminEducationController::class, 'index']);
    Route::post('/education', [AdminEducationController::class, 'store']);
    Route::put('/education/{id}', [AdminEducationController::class, 'update']);
    Route::delete('/education/{id}', [AdminEducationController::class, 'destroy']);
    
    // Social Links
    Route::get('/socials', [AdminSocialLinkController::class, 'index']);
    Route::post('/socials', [AdminSocialLinkController::class, 'store']);
    Route::put('/socials/{id}', [AdminSocialLinkController::class, 'update']);
    Route::delete('/socials/{id}', [AdminSocialLinkController::class, 'destroy']);
});
