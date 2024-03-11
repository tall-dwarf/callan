<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string $img
 * @property int $university_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\University $university
 * @method static \Database\Factories\UniversityGalleryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery query()
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery whereImg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery whereUniversityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UniversityGallery whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class UniversityGallery extends Model
{
    use HasFactory;
    protected $table = 'university_gallery';

    public function university()
    {
        return $this->belongsTo(University::class, 'university_id', 'id');
    }
}
