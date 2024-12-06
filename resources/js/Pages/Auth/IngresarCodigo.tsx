import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function IngresarCodigo({ status }: { status?: string }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: '',
        codigoverif: '',
        password: '',
    });

    const validatePassword = (password: string): string[] => {
        const rules = [
            { test: /.{8,}/, message: 'La contraseña debe tener al menos 8 caracteres.' },
            { test: /^.{0,12}$/, message: 'La contraseña no debe exceder los 12 caracteres.' },
            { test: /[A-Z]/, message: 'La contraseña debe contener al menos una letra mayúscula.' },
            { test: /[a-z]/, message: 'La contraseña debe contener al menos una letra minúscula.' },
            { test: /[0-9]/, message: 'La contraseña debe contener al menos un número.' },
            { test: /[\W_]/, message: 'La contraseña debe contener al menos un símbolo.' },
        ];

        return rules
            .filter((rule) => !rule.test.test(password))
            .map((rule) => rule.message);
    };


    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const passwordErrors = validatePassword(data.password);
        if (passwordErrors.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Errores en la contraseña',
                html: `<ul>${passwordErrors.map(err => `<li>${err}</li>`).join('')}</ul>`,
                confirmButtonText: 'Entendido',
            });
            return;
        }

        post(route('password.verificar'));
    };



    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <h2 className="mt-6 mb-6 text-center text-3xl font-bold text-gray-900">
                Verifica el código
            </h2>
            <div className="mb-4 text-sm text-gray-600">
                Hemos enviado un código de verificación al número de teléfono. Ingresa el código y tu nueva contraseña para restablecerla.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <InputLabel htmlFor="phone" value="Ingresa otra vez el número de teléfono" />
                <TextInput
                    id="phone"
                    type="tel"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('phone', e.target.value)}
                />
                <InputError message={errors.phone} className="mt-2" />

                <InputLabel htmlFor="password" value="Ingresa la nueva contraseña" />
                <div className="relative">
                    <TextInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full pr-10"
                        autoComplete="off"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                    >
                        {showPassword ? (


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-eye-slash"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                            </svg>
                        )}
                    </button>
                </div>

                <InputError message={errors.password} className="mt-2" />

                <InputLabel htmlFor="codigoverif" value="Ingresa el código de verificación" />
                <TextInput
                    id="codigoverif"
                    type="text"
                    name="codigoverif"
                    value={data.codigoverif}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('codigoverif', e.target.value)}
                />
                <InputError message={errors.codigoverif} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Verificar código
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
