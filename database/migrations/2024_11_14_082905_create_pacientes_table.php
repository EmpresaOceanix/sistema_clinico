<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     * VUE JS
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->id(); // Equivalente a INT PRIMARY KEY IDENTITY(1,1)
            $table->string('direccion', 255)->nullable();
            $table->string('telefono', 15)->nullable();
            $table->text('informacion_medica')->nullable();
            $table->timestamps(); // Añade columnas created_at y updated_at automáticamente
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
};