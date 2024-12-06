import React from 'react';
import { Microscope, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Microscope className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">LabSalud</span>
            </div>
            <p className="text-sm">
              Comprometidos con tu salud y bienestar desde hace más de 20 años.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-blue-400">Servicios</a></li>
              <li><a href="#estudios" className="hover:text-blue-400">Estudios</a></li>
              <li><a href="#resultados" className="hover:text-blue-400">Resultados</a></li>
              <li><a href="#contacto" className="hover:text-blue-400">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horario</h3>
            <ul className="space-y-2">
              <li>Lunes - Viernes: 7:00 - 20:00</li>
              <li>Sábado: 7:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LabSalud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}