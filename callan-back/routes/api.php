<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\AcademicProgramController;
use App\Http\Controllers\CountryController;

Route::apiResource('university', UniversityController::class);

Route::get('/program', [AcademicProgramController::class, 'index']);
Route::get('/county', [CountryController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
