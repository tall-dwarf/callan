<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AcademicProgram>
 */
class AcademicProgramFactory extends Factory
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
            'form_education' => fake()->randomElement(['Бакалавриат', 'Магистратура', 'Докторантура', 'Подготовка к университету', 'Языковые курсы'])
        ];
    }
}
