import React, { useState } from 'react';
import { Droplets, Heart, Brain, Activity, Baby, TestTube, Plus } from 'lucide-react';

const servicios = [
  {
    icon: Droplets,
    title: 'Análisis de Sangre',
    description: 'Biometría hemática, química sanguínea y más',
    detalles: ['Hemograma completo', 'Perfil lipídico', 'Glucosa', 'Hemoglobina', 'Tiempo de coagulación'],
    precio: 'Desde $800 MXN'
  },
  {
    icon: Heart,
    title: 'Perfil Cardíaco',
    description: 'Evaluación completa de la salud cardiovascular',
    detalles: ['Electrocardiograma', 'Perfil lipídico', 'Proteína C reactiva', 'Troponina', 'Presión arterial'],
    precio: 'Desde $1,200 MXN'
  },
  {
    icon: Brain,
    title: 'Perfil Hormonal',
    description: 'Análisis completo de hormonas',
    detalles: ['Tiroides', 'Cortisol', 'Testosterona', 'Estradiol', 'Progesterona'],
    precio: 'Desde $1,500 MXN'
  },
  {
    icon: Activity,
    title: 'Chequeo General',
    description: 'Evaluación integral del estado de salud',
    detalles: ['Examen físico', 'Análisis de sangre', 'Perfil hepático', 'Perfil renal', 'Electrocardiograma'],
    precio: 'Desde $2,000 MXN'
  },
  {
    icon: Baby,
    title: 'Pruebas Prenatales',
    description: 'Seguimiento completo del embarazo',
    detalles: ['Grupo sanguíneo', 'Factor RH', 'Toxoplasmosis', 'VIH', 'Hepatitis B'],
    precio: 'Desde $1,800 MXN'
  },
  {
    icon: TestTube,
    title: 'Análisis Especiales',
    description: 'Estudios específicos y especializados',
    detalles: ['Marcadores tumorales', 'Alergias', 'Autoinmunidad', 'Genética', 'Toxicología'],
    precio: 'Desde $2,500 MXN'
  }
];

export default function Servicios() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de análisis clínicos con la más alta calidad y tecnología de vanguardia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setServicioSeleccionado(servicioSeleccionado === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <servicio.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <span className="text-blue-600 font-semibold">{servicio.precio}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{servicio.title}</h3>
              <p className="text-gray-600 mb-4">{servicio.description}</p>
              
              {servicioSeleccionado === index && (
                <div className="mt-4 space-y-2">
                  <div className="h-px bg-gray-200 my-4"></div>
                  <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                  <ul className="space-y-2">
                    {servicio.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Plus className="h-4 w-4 text-blue-600 mr-2" />
                        {detalle}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Agendar Cita
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}