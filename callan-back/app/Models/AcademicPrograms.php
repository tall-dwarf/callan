<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $form_education
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\University> $universities
 * @property-read int|null $universities_count
 * @method static \Database\Factories\AcademicProgramsFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms whereFormEducation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPrograms whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AcademicPrograms extends Model
{
    use HasFactory;

    public function universities()
    {
        return $this->belongsToMany(University::class, 'university_academic_program', 'academic_program_id', 'university_id');
    }
}
