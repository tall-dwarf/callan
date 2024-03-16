<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\University>
 */
class UniversityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->userName(),
            'country_id' => Country::inRandomOrder()->first()->id,
            'year' => fake()->year(),
            'rating' => fake()->numberBetween(1, 5),
            'students_cnt' => fake()->numberBetween(4000, 20000),
            'price_year' => fake()->numberBetween(2000, 20000),
            'price_hostel' => fake()->numberBetween(500, 2000),
            'logo' => fake()->imageUrl(100, 100, 'logo'),
            'photo' => fake()->imageUrl(752, 340, 'photo'),
            'information' => fake()->text(400),
        ];
    }
}
