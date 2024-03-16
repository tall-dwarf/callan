<?php

namespace Database\Factories;

use App\Models\University;
use App\Models\UniversityGallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UniversityGalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = UniversityGallery::class;
    public function definition(): array
    {
        return [
            'img' => fake()->imageUrl(850, 300),
            'small_img' => fake()->imageUrl(260, 120),
            'university_id' => University::inRandomOrder()->first()->id,
        ];
    }
}
