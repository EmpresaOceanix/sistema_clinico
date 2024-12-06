import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface Props {
    message: string; // Definir el tipo del mensaje como string
}

export default function Message({ message }: Props) {
    return (
        <GuestLayout>
            <Head title="Mensaje" />

            {/* Mostrar el mensaje de error si existe */}
            {message && (
                <h2 className="mt-6 mb-6 text-center text-3xl font-bold text-gray-900">
                    {message}
                </h2>
            )}

            <div className="mt-4 flex items-center justify-end">
                <Link href={route('login')}>
                    <PrimaryButton className="ms-4">
                        Volver al login
                    </PrimaryButton>
                </Link>

            </div>
        </GuestLayout>
    );
}
