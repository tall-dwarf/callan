<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    public function academicPrograms()
    {
        return $this->belongsToMany(AcademicPrograms::class, 'university_academic_program', 'university_id', 'academic_program_id');
    }

    public function gallery()
    {
        return $this->hasMany(UniversityGallery::class);
    }
}
