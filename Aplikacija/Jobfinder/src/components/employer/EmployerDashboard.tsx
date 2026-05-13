import { useState } from 'react';
import { Plus, Briefcase, Users, MessageSquare, Eye } from 'lucide-react';
import { CreateJobForm } from './CreateJobForm';
import { ApplicantsList } from './ApplicantsList';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer (Student)',
    location: 'Zagreb',
    type: 'Part-time',
    salary: '800-1200 EUR',
    applicants: 12,
    status: 'Aktivno',
    created: '2026-05-01',
  },
  {
    id: 2,
    title: 'Konobar/Konobarica',
    location: 'Zagreb',
    type: 'Part-time',
    salary: '400-600 EUR',
    applicants: 8,
    status: 'Aktivno',
    created: '2026-04-28',
  },
  {
    id: 3,
    title: 'Marketing Asistent',
    location: 'Remote',
    type: 'Part-time',
    salary: '600-900 EUR',
    applicants: 15,
    status: 'Zatvoreno',
    created: '2026-04-20',
  },
];

export function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'create'>('jobs');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard poslodavca</h1>
          <p className="text-gray-600">Upravljajte oglasima i prijavama</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{mockJobs.filter(j => j.status === 'Aktivno').length}</p>
            <p className="text-gray-600">Aktivni oglasi</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {mockJobs.reduce((sum, job) => sum + job.applicants, 0)}
            </p>
            <p className="text-gray-600">Ukupno prijava</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-gray-600">Nepročitanih poruka</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="border-b px-6 py-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeTab === 'jobs'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Moji oglasi
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`px-6 py-3 rounded-lg font-medium transition flex items-center gap-2 ${
                  activeTab === 'create'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Plus className="w-4 h-4" />
                Kreiraj oglas
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'jobs' && (
              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              job.status === 'Aktivno'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {job.status}
                          </span>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600">
                          <span>📍 {job.location}</span>
                          <span>⏰ {job.type}</span>
                          <span>💰 {job.salary}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Objavljeno: {job.created}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{job.applicants}</p>
                        <p className="text-sm text-gray-600">prijava</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedJob(job.id)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                      >
                        <Users className="w-4 h-4" />
                        Pregledaj prijave
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Pogledaj oglas
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        Uredi
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'create' && <CreateJobForm />}
          </div>
        </div>
      </div>

      {selectedJob && (
        <ApplicantsList
          jobId={selectedJob}
          jobTitle={mockJobs.find(j => j.id === selectedJob)?.title || ''}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
