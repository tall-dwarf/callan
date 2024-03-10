<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UniversityGallery extends Model
{
    use HasFactory;
    protected $table = 'university_gallery';

    public function university()
    {
        return $this->belongsTo(University::class, 'university_id', 'id');
    }
}
