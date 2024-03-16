<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
class QueryFilter
{
    public Request $request;
    protected Builder $builder;
    protected string $delimiter = ',';

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function filters(): array
    {
        $data = [];
        foreach ($this->request->all() as $key => $value){
            if(gettype($value) === 'string' && trim($value)){
                $data[$key] = $value;
            }

            if(gettype($value) === 'array' && count($value)){
                $data[$key] = $value;
            }
        }

        return  $data;
//        return array_filter(array_map('trim', $this->request->all()));
    }

    public function apply(Builder $builder)
    {
        $this->builder = $builder;
        foreach ($this->filters() as $name => $value) {
            if (method_exists($this, $name)) {
                call_user_func_array([$this, $name], (array)$value);
            }
        }

        return $this->builder;
    }
}
