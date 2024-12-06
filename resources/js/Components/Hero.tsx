import React from 'react';
import { Clock, MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
          alt="Laboratorio"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Tu salud es nuestra
            <span className="block text-blue-200">prioridad</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Resultados precisos y confiables con la más alta tecnología y profesionales expertos a tu servicio
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#cita"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Servicios
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-white/95 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Horario Extendido</p>
              <p className="text-sm text-gray-600">Lun - Sáb: 7:00 - 20:00</p>
              <p className="text-sm text-gray-600">Dom: Urgencias</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/95 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Atención 24/7</p>
              <p className="text-sm text-gray-600">+52 (555) 555-5555</p>
              <p className="text-sm text-gray-600">Emergencias: 800-123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/95 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Ubicación Céntrica</p>
              <p className="text-sm text-gray-600">Av. Principal #123</p>
              <p className="text-sm text-gray-600">Centro Médico, Piso 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}