<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexAcademicProgramsRequest;
use App\Models\AcademicProgram;
use Illuminate\Http\Request;

class AcademicProgramController extends Controller
{
    public function index()
    {
        $programs = AcademicProgram::all();
        return response()->json($programs, 200);
    }
}
