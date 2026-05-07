import { BriefcaseIcon, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-24 mb-8 w-full">
          
          <div className="max-w-md md:w-[45%]">
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseIcon className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-white">JobFinder</h3>
            </div>

            <p className="text-sm mb-4 leading-relaxed">
              Platforma koja povezuje studente s poslodavcima.
              Pronađi svoj savršen posao danas!
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                tw
              </a>
            </div>
          </div>

          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">
              Kontakt
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@jobfinder.ba
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +387 63 123 456
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Mostar, BiH
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; 2026 JobFinder. Sva prava zadržana.
          </p>
        </div>

      </div>
    </footer>
  );
}