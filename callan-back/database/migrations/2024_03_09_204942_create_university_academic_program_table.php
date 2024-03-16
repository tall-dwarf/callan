<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('university_academic_programs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('university_id');
            $table->unsignedBigInteger('academic_program_id');

            $table->foreign('university_id')->references('id')->on('universities');
            $table->foreign('academic_program_id')->references('id')->on('academic_programs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('university_academic_program');
    }
};
