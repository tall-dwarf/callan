<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
class UniversityFilter extends QueryFilter
{
    public function price($price)
    {
        if($price > 0){
            return $this->builder->where('price_year', '<', $price);
        }
    }

    public function rating($price)
    {
        return $this->builder->where('rating', '=', $price);
    }

    public function countries(...$countries)
    {
        return $this->builder->whereHas('country', function (Builder $query) use ($countries) {
            $query->whereIn('countries.id', $countries);
        });
    }

    public function name($name)
    {
        return $this->builder->where('name', 'like', "%$name%");
    }

    public function programs(...$programs)
    {
        return $this->builder->whereHas('academicPrograms', function (Builder $query) use ($programs) {
            $query->whereIn('academic_programs.id', $programs);
        });
    }
}
