<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\University;
use App\Models\AcademicPrograms;
use App\Models\UniversityGallery;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $programs = AcademicPrograms::factory(300)->create();

        University::factory(150)->create()->each(function ($university) use ($programs) {
            $university->academicPrograms()->attach($programs->random(rand(20, 50))->pluck('id')->toArray());
        });

        UniversityGallery::factory(70)->create();

    }
}
