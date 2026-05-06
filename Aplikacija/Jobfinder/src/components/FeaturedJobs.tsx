import { MapPin, Clock, DollarSign, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer (Student)',
    company: 'TechStart d.o.o.',
    location: 'Zagreb',
    type: 'Part-time',
    salary: '800-1200 EUR',
    logo: '🚀',
    tags: ['React', 'TypeScript', 'Fleksibilno'],
  },
  {
    id: 2,
    title: 'Konobar/Konobarica',
    company: 'Café Central',
    location: 'Split',
    type: 'Part-time',
    salary: '400-600 EUR',
    logo: '☕',
    tags: ['Vikend', 'Noćna smjena', 'Napojnice'],
  },
  {
    id: 3,
    title: 'Marketing Asistent',
    company: 'Digital Agency Pro',
    location: 'Remote',
    type: 'Part-time',
    salary: '600-900 EUR',
    logo: '📱',
    tags: ['Social Media', 'Content', 'Remote'],
  },
  {
    id: 4,
    title: 'Tutor Matematike',
    company: 'EduCenter',
    location: 'Rijeka',
    type: 'Freelance',
    salary: '20-30 EUR/h',
    logo: '📚',
    tags: ['Fleksibilno', 'Online', 'Studenti'],
  },
  {
    id: 5,
    title: 'Grafički Dizajner',
    company: 'Creative Studio',
    location: 'Zagreb',
    type: 'Part-time',
    salary: '700-1000 EUR',
    logo: '🎨',
    tags: ['Figma', 'Adobe', 'Portfolio'],
  },
  {
    id: 6,
    title: 'Customer Support',
    company: 'SupportHub',
    location: 'Remote',
    type: 'Part-time',
    salary: '500-700 EUR',
    logo: '💬',
    tags: ['Remote', 'Engleski', 'Chat'],
  },
];

export function FeaturedJobs() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Izdvojeni poslovi</h3>
            <p className="text-gray-600">Najnovije prilike za studente</p>
          </div>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white hover:shadow transition">
            Vidi sve poslove
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600" />
                </button>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
              <p className="text-gray-600 mb-4">{job.company}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate(`/job/${job.id}`)}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Pogledaj detalje
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
