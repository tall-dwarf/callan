<?php

namespace App\Http\Controllers;

use App\Models\University;
use App\Http\Requests\StoreUniversityRequest;
use App\Http\Requests\UpdateUniversityRequest;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UniversityController extends Controller
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' =>       ['max:255', 'min:1', 'string'],
            'rating' =>     ['max:5', 'min:1', 'numeric'],
            'page' =>       ['numeric'],
            'price' =>      ['numeric'],
            'country' =>    ['max:255', 'min:1', 'string'],
            'education' =>  ['numeric'],
            'sortField' => Rule::in(['name', 'year', 'rating', 'students_cnt', 'price_year', 'price_hostel', 'id']),
            'sortOrder' => Rule::in(['asc', 'desc']),
        ]);
        $requestParams = $validator->valid();
//        dd($requestParams);
        $universities = University::query();
        if(isset($requestParams['rating'])){
            $universities->where('rating', '=', (int)$requestParams['rating']);
        }
        if(isset($requestParams['price'])){
            $universities->where('price_year', '>', (int)$requestParams['price']);
        }
        if(isset($requestParams['page'])){
            $universities->skip(((int)$requestParams['page'] - 1) * 10);
        }
        if(isset($requestParams['country'])){
            $universities->where('country', '=', $requestParams['country']);
        }
        if(isset($requestParams['name'])){
            $universities->where('name', 'like', "%{$requestParams['name']}%");
        }
        if(isset($requestParams['sortField']) && isset($requestParams['sortOrder'])){
            $universities->orderBy($requestParams['sortField'], $requestParams['sortOrder']);
        }
        if(isset($requestParams['education'])){
            $education = $requestParams['education'];
            $universities->whereHas('academicPrograms', function (Builder  $query) use ($education) {
                $query->where('academic_programs.id', '=', $education);
            });
        }
        $universities->with('academicPrograms')->with('gallery');
        return response()->json($universities->take(10)->get(), 200);
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
