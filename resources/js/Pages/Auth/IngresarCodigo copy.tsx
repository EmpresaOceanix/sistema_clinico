import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function IngresarCodigo({ status }: { status?: string }) {
    
    const { data, setData, post, processing, errors } = useForm({
        phone: '',
        codigoverif: '', // Campo para el token
        password: '', // Campo para la nueva contraseña
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
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
                <TextInput
                    id="password"
                    type="text"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('password', e.target.value)}
                    minLength={8}
                />
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
