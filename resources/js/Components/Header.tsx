import React, { useState } from 'react';
import { Menu, X, User, LogOut, Bell, Shield } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLoginClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleRegisterClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="bg-white shadow-sm fixed w-full z-40">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.svg"
                                    alt="LabSalud"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-purple-500 text-sm font-medium">
                                    Inicio
                                </a>
                                <a href="/servicios" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                                    Servicios
                                </a>
                                <a href="/contacto" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                                    Contacto
                                </a>
                            </div>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                            <a href={route('login')}
                                onClick={handleLoginClick}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-sm"
                            >
                                <User className="h-4 w-4 mr-2" />
                                Iniciar Sesión
                            </a>
                            <a href={route('register')}
                                onClick={handleRegisterClick}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <Shield className="h-4 w-4 mr-2" />
                                Registrarse
                            </a>
                        </div>

                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Menú móvil */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <a href="/" className="bg-purple-50 border-purple-500 text-purple-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                Inicio
                            </a>
                            <a href="/servicios" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                Servicios
                            </a>
                            <a href="/contacto" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                                Contacto
                            </a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="space-y-1">
                                <button
                                    onClick={handleLoginClick}
                                    className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Iniciar Sesión
                                </button>
                                <button
                                    onClick={handleRegisterClick}
                                    className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
