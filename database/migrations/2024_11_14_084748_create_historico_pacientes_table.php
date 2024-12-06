<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('historico_pacientes', function (Blueprint $table) {
            $table->id(); // INT PRIMARY KEY IDENTITY(1,1)
            $table->unsignedBigInteger('paciente_id'); // INT NOT NULL
            $table->text('descripcion'); // TEXT NOT NULL
            $table->date('fecha'); // DATE NOT NULL
            $table->enum('tipo_archivo', ['texto', 'imagen', 'video']); // Enum para tipo_archivo
            $table->string('url_archivo', 255)->nullable(); // NVARCHAR(255) NULL
            $table->unsignedBigInteger('usuario_operativo_id')->nullable(); // INT NULL
            $table->text('notas_adicionales')->nullable(); // TEXT NULL
            $table->timestamps(); // created_at DATETIME NULL, updated_at DATETIME NULL

            // Llaves foráneas
            $table->foreign('paciente_id')->references('id')->on('pacientes')->onDelete('cascade');
            $table->foreign('usuario_operativo_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historico_pacientes');
    }
};
