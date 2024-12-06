import { SVGAttributes } from 'react';
import { Microscope } from 'lucide-react';

interface ApplicationLogoProps extends SVGAttributes<SVGElement> {}

export default function ApplicationLogo(props: ApplicationLogoProps) {
  return (
    <div
      className="flex justify-center items-center h-full w-full" // Centrado horizontal y vertical
      {...props}
    >
      {/* Logo */}
      <div className="p-2 rounded-lg bg-white/90">

        {/*<Microscope className="h-8 w-8 text-blue-600" />*/ }
        <img src="img/Logo-Negro.png" alt="" />
      </div>
    </div>
  );
}
