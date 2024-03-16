<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property int $year
 * @property int $rating
 * @property int $students_cnt
 * @property int $price_year
 * @property int $price_hostel
 * @property string $logo
 * @property string $photo
 * @property string $information
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $country
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\AcademicPrograms> $academicPrograms
 * @property-read int|null $academic_programs_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UniversityGallery> $gallery
 * @property-read int|null $gallery_count
 * @method static \Database\Factories\UniversityFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|University newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|University newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|University query()
 * @method static \Illuminate\Database\Eloquent\Builder|University whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereInformation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University wherePriceHostel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University wherePriceYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereStudentsCnt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|University whereYear($value)
 * @mixin \Eloquent
 */
class University extends Model
{
    use HasFactory;

    public function academicPrograms()
    {
        return $this->belongsToMany(AcademicProgram::class, 'university_academic_programs', 'university_id', 'academic_program_id');
    }

    public function gallery()
    {
        return $this->hasMany(UniversityGallery::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter){
        return $filter->apply($builder);
    }
}
