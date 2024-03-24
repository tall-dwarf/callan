<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\AcademicProgramController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\ConsultationController;

Route::apiResource('university', UniversityController::class);

Route::get('/program', [AcademicProgramController::class, 'index']);
Route::get('/county', [CountryController::class, 'index']);

Route::post('/consultation', [ConsultationController::class, 'store']);
Route::post('/feedback', [ConsultationController::class, 'store']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});
