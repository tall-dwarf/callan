<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicPrograms extends Model
{
    use HasFactory;

    public function universities()
    {
        return $this->belongsToMany(University::class);
    }
}
