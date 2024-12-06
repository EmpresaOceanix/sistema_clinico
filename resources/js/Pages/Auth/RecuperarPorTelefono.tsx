import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function RecuperarPorTelefono({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        phone: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        post(route('password.enviarcodigo'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <h2 className="mt-6 mb-6 text-center text-3xl font-bold text-gray-900">
                Recuperar por número de teléfono
            </h2>
            <div className="mb-4 text-sm text-gray-600">
                Ingresa el número de teléfono que está registrado, te enviaremos un código de verificación para que puedas establecer una nueva contraseña.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
               
                <TextInput
                    id="phone"
                    type="tel"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full"
                    autoComplete='off'
                    isFocused={true}
                    onChange={(e) => setData('phone', e.target.value)}
                />

                <InputError message={errors.phone} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Usar correo electrónico
                        </Link>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Enviar código
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
