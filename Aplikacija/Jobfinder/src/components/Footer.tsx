import { BriefcaseIcon, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseIcon className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-white">JobFinder</h3>
            </div>
            <p className="text-sm mb-4">
              Platforma koja povezuje studente s poslodavcima širom regije. Pronađi svoj savršen posao danas!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                in
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                tw
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Za studente</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Pretraga poslova</a></li>
              <li><a href="#" className="hover:text-white transition">Kako funkcioniše</a></li>
              <li><a href="#" className="hover:text-white transition">Saveti za CV</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Za poslodavce</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Objavi posao</a></li>
              <li><a href="#" className="hover:text-white transition">Cenovnik</a></li>
              <li><a href="#" className="hover:text-white transition">Kako funkcioniše</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@jobfinder.rs
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +381 11 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Zagreb, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 JobFinder. Sva prava zadržana.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Uslovi korišćenja</a>
            <a href="#" className="hover:text-white transition">Privatnost</a>
            <a href="#" className="hover:text-white transition">Kolačići</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
