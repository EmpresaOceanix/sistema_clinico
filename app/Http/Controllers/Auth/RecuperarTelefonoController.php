<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Servicios\ServicioSms;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

use Inertia\Inertia;
use Inertia\Response;

class RecuperarTelefonoController extends Controller
{
    protected $smsService;
    //
    public function create(): Response
    {

        // Renderiza una vista a través de Inertia
                                           /*resources/js*/
        return Inertia::render('Auth/RecuperarPorTelefono', [
            'status' => session('status'),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(['phone' => 'required|exists:users,phone']);
        $token = Str::random(6);

        DB::table('reseteo_password')->updateOrInsert(
            ['phone' => $request->phone],
            ['token' => $token, 'created_at' => now()]
        );

        $serviciosms = new ServicioSms();
        $serviciosms->sendSms($request->phone, "Tu código de verificación es: $token");

        //$this->smsService->sendSms($request->phone, "Your reset code is: $token");

        return Inertia::render('Auth/IngresarCodigo', [
            'status' => session('status'),
        ]);
    }

    public function resetPassword(Request $request)
    {
        // Validación de los datos de entrada
        $request->validate([
            'phone' => 'required|exists:users,phone',
            'codigoverif' => 'required|max:6',
            'password' => 'required|min:8',
        ]);

        // Buscar el token en la tabla de reseteo
        $reset = DB::table('reseteo_password')
            ->where('phone', $request->phone)
            ->where('token', $request->codigoverif)
            ->first();

        if (!$reset) {
            return redirect()->route('telefono.reset.message')->with('message', 'El token es inválido.');

        }

        $hora_creacion = \Carbon\Carbon::parse($reset->created_at);
        $expiracion_segundos = 60; // Cambiar a 1 minutos (60 segundos)
        
        if (round(abs(now()->diffInSeconds($hora_creacion))) > $expiracion_segundos) {
            // Eliminar el token de la tabla de reseteo
            DB::table('reseteo_password')->where('phone', $request->phone)->delete();
            return redirect()->route('telefono.reset.message')->with('message', 'El token ha expirado.');
        }

        // Iniciar una transacción para asegurar que ambas operaciones se realicen correctamente
        DB::beginTransaction();

        try {
            // Actualizar la contraseña del usuario
            DB::table('users')->where('phone', $request->phone)->update([
                'password' => Hash::make($request->password),
            ]);

            // Eliminar el token de la tabla de reseteo
            DB::table('reseteo_password')->where('phone', $request->phone)->delete();

            // Commit de la transacción si todo sale bien
            DB::commit();

            // Redirigir a la vista de éxito
            return redirect()->route('telefono.reset.message')->with('message', '¡Contraseña restablecida con éxito!');
        } catch (\Exception $e) {
            // Rollback en caso de error
            DB::rollBack();

            // Redirigir con mensaje de error
            return redirect()->route('telefono.reset.message')->with('message', 'Ocurrió un error al procesar la solicitud.');
        }
    }

    public function renderMensaje(): Response
    {
        return Inertia::render('Auth/Message', [
            'message' => session('message'),
        ]);
    }
}
