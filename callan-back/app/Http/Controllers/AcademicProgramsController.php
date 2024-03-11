<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexAcademicProgramsRequest;
use App\Models\AcademicPrograms;
use Illuminate\Http\Request;

class AcademicProgramsController extends Controller
{
    public function index(IndexAcademicProgramsRequest $request)
    {
        $programs = AcademicPrograms::where('form_education', '=', $request->get('formEducation'));
        return response()->json($programs->get(), 200);
    }
}
