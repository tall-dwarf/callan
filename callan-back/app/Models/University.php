<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    public function academicPrograms()
    {
        return $this->belongsToMany(AcademicPrograms::class);
    }
}
