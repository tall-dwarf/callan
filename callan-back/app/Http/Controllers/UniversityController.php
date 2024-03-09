<?php

namespace App\Http\Controllers;

use App\Models\University;
use App\Http\Requests\StoreUniversityRequest;
use App\Http\Requests\UpdateUniversityRequest;

class UniversityController extends Controller
{
    public function index()
    {
        //
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
