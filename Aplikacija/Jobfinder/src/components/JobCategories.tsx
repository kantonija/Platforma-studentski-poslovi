import { Code, Coffee, TrendingUp, GraduationCap, Megaphone, Palette } from 'lucide-react';

const categories = [
  { icon: Code, name: 'IT & Tehnologija', count: 245, color: 'bg-blue-100 text-blue-600' },
  { icon: Coffee, name: 'Ugostiteljstvo', count: 412, color: 'bg-amber-100 text-amber-600' },
  { icon: TrendingUp, name: 'Prodaja', count: 189, color: 'bg-green-100 text-green-600' },
  { icon: GraduationCap, name: 'Edukacija', count: 156, color: 'bg-purple-100 text-purple-600' },
  { icon: Megaphone, name: 'Marketing', count: 203, color: 'bg-pink-100 text-pink-600' },
  { icon: Palette, name: 'Dizajn', count: 127, color: 'bg-indigo-100 text-indigo-600' },
];

export function JobCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Istraži kategorije poslova
          </h3>
          <p className="text-gray-600">Pronađi poslove koji odgovaraju tvojim interesima</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="p-6 border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition group"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h4>
                <p className="text-xs text-gray-500">{category.count} poslova</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
