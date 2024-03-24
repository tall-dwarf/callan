<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Country;
use App\Models\Document;
use Database\Factories\DocumentFactory;
use Illuminate\Database\Seeder;
use App\Models\University;
use App\Models\AcademicProgram;
use App\Models\UniversityGallery;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Country::factory(20)->create();

        $programs = AcademicProgram::factory(200)->create();
        $documents = Document::factory(30)->create();

        University::factory(250)->create()->each(function ($university) use ($programs, $documents) {
            $university->academicPrograms()->attach($programs->random(rand(10, 30))->pluck('id')->toArray());

            UniversityGallery::factory(5)->create(['university_id' => $university['id']]);

            $university->documents()->attach($documents->random(rand(3, 6))->pluck('id')->toArray());
        });

    }
}
