<?php

namespace App\Http\Controllers;

use App\Filters\UniversityFilter;
use App\Models\University;
use App\Http\Requests\StoreUniversityRequest;
use App\Http\Requests\UpdateUniversityRequest;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function index(Request $request, UniversityFilter $filter)
    {
        $universities = University::filter($filter)
            ->with('country')
            ->with('gallery')
            ->with('academicPrograms');

        if($request->input('sortField') && $request->input('sortOrder')){
            $universities->orderBy($request->input('sortField'), $request->input('sortOrder'));
        }

        return response()->json($universities->paginate(10), 200);
    }

    public function show($id)
    {
        $university = University::query()
            ->with('country')
            ->with('gallery')
            ->with('academicPrograms')
            ->with('documents')
            ->findOrFail($id);
        return response()->json($university, 200);
    }

    public function store(StoreUniversityRequest $request)
    {
        //
    }

    public function update(UpdateUniversityRequest $request, University $university)
    {
        //
    }

    public function destroy(University $university)
    {
        //
    }
}
