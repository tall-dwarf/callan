<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\AcademicProgramsController;

Route::apiResource('university', UniversityController::class);

Route::get('/programs', [AcademicProgramsController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
