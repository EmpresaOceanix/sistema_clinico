import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Servicios from '@/Components/Servicios';
import Resultados from '@/Components/Resultados';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-white">
                <Header />
                <div id="main-content">
                    <div className="pt-16">
                        <Navbar />
                        <Hero />
                        <Servicios />
                        <Resultados />
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    );
}
