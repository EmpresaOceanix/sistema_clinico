import React, { useState, useEffect } from 'react';
import { Microscope, Phone, Menu, X, Beaker, FileText, Mail, ChevronDown } from 'lucide-react';

const menuItems = [
  {
    title: 'Servicios',
    icon: Beaker,
    path: '#servicios',
    description: 'Conoce nuestros servicios de laboratorio',
    subItems: [
      { name: 'Análisis Clínicos', description: 'Estudios de rutina y especializados' },
      { name: 'Pruebas COVID', description: 'PCR y pruebas rápidas' },
      { name: 'Perfiles Médicos', description: 'Evaluaciones completas de salud' }
    ]
  },
  {
    title: 'Estudios',
    icon: Microscope,
    path: '#estudios',
    description: 'Catálogo completo de estudios disponibles',
    subItems: [
      { name: 'Hematología', description: 'Análisis de sangre completos' },
      { name: 'Química Clínica', description: 'Perfil metabólico y más' },
      { name: 'Hormonas', description: 'Estudios hormonales especializados' }
    ]
  },
  {
    title: 'Resultados',
    icon: FileText,
    path: '#resultados',
    description: 'Consulta tus resultados en línea',
    subItems: [
      { name: 'Consulta en Línea', description: 'Accede a tus resultados' },
      { name: 'Histórico', description: 'Revisa estudios anteriores' },
      { name: 'Descarga PDF', description: 'Obtén tus resultados en PDF' }
    ]
  },
  {
    title: 'Contacto',
    icon: Mail,
    path: '#contacto',
    description: 'Ponte en contacto con nosotros',
    subItems: [
      { name: 'Ubicaciones', description: 'Encuentra tu sucursal más cercana' },
      { name: 'Teléfonos', description: 'Líneas de atención directa' },
      { name: 'Emergencias', description: 'Servicio 24/7' }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-blue-100 dark:bg-blue-900' : 'bg-white/90'
            }`}>
              <Microscope className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}>
              LabSalud
            </span>
          </div>
          
          {/* Menú Principal - Escritorio */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.path}
                  className={`
                    flex items-center px-4 py-2 rounded-lg
                    transition-all duration-300 transform
                    ${hoveredItem === item.title ? 'scale-105' : ''}
                    ${isScrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'text-white hover:bg-white/10'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  <span>{item.title}</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    hoveredItem === item.title ? 'rotate-180' : ''
                  }`} />
                </a>

                {/* Menú desplegable con efecto de isla dinámica */}
                {hoveredItem === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-lg overflow-hidden shadow-lg transition-all duration-300 animate-fadeIn">
                    <div className="bg-white dark:bg-gray-800 backdrop-blur-lg p-4">
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                        {item.description}
                      </div>
                      <div className="space-y-2">
                        {item.subItems.map((subItem, index) => (
                          <a
                            key={subItem.name}
                            href="#"
                            className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="font-medium text-gray-800 dark:text-white">
                              {subItem.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {subItem.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Botón de Contacto */}
            <div className="flex items-center">
              <button className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg
                transition-all duration-300 transform hover:scale-105
                ${isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}>
                <Phone className="h-5 w-5" />
                <span>Contacto</span>
              </button>
            </div>
          </div>
          
          {/* Botón de Menú Móvil */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
          <div className="p-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <a
                  href={item.path}
                  className="flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  <span>{item.title}</span>
                </a>
              </div>
            ))}
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Phone className="h-5 w-5" />
              <span>Contacto</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}