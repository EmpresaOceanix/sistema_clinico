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
        Schema::create('resultados_analisis', function (Blueprint $table) {
            $table->id(); // INT PRIMARY KEY IDENTITY(1,1)
            $table->unsignedBigInteger('paciente_id'); // INT NOT NULL
            $table->string('tipo_analisis', 100); // NVARCHAR(100) NOT NULL
            $table->text('resultado')->nullable(); // TEXT NULL
            $table->text('observaciones')->nullable(); // TEXT NULL
            $table->unsignedBigInteger('usuario_operativo_id')->nullable(); // INT NULL
            $table->date('fecha_analisis'); // DATE NOT NULL
            $table->boolean('enviado')->default(false); // BIT NOT NULL DEFAULT 0
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
        Schema::dropIfExists('resultados_analisis');
    }
};
