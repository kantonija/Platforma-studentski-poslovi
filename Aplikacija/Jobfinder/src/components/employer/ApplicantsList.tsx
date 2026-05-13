import { useState } from 'react';
import { X, Mail, Phone, FileText, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

const mockApplicants = [
  {
    id: 1,
    name: 'Ana Anić',
    email: 'ana.anic@student.hr',
    phone: '+385 91 234 5678',
    university: 'Sveučilište u Zagrebu',
    year: '3. godina',
    skills: 'React, TypeScript, Tailwind CSS',
    experience: '6 mjeseci customer support',
    appliedDate: '2026-05-02',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Marko Marić',
    email: 'marko.maric@student.hr',
    phone: '+385 92 345 6789',
    university: 'Sveučilište u Splitu',
    year: '2. godina',
    skills: 'JavaScript, Node.js, MongoDB',
    experience: 'Freelance projekti (4 mjeseca)',
    appliedDate: '2026-05-03',
    status: 'pending',
  },
  {
    id: 3,
    name: 'Petra Petrić',
    email: 'petra.petric@student.hr',
    phone: '+385 95 456 7890',
    university: 'Sveučilište u Rijeci',
    year: '4. godina',
    skills: 'React, Vue.js, UI/UX dizajn',
    experience: '1 godina dizajna i developmenta',
    appliedDate: '2026-05-01',
    status: 'pending',
  },
];

interface ApplicantsListProps {
  jobId: number;
  jobTitle: string;
  onClose: () => void;
}

export function ApplicantsList({ jobId, jobTitle, onClose }: ApplicantsListProps) {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [selectedApplicants, setSelectedApplicants] = useState<number[]>([]);

  const toggleApplicant = (id: number) => {
    setSelectedApplicants(prev =>
      prev.includes(id) ? prev.filter(appId => appId !== id) : [...prev, id]
    );
  };

  const handleAcceptSelected = () => {
    if (selectedApplicants.length === 0) {
      alert('Molimo odaberite barem jednog kandidata');
      return;
    }
    console.log('Prihvaćeni kandidati:', selectedApplicants);
    alert(`${selectedApplicants.length} kandidat(a) prihvaćeno! Studenti će biti obaviješteni.`);
    setApplicants(prev =>
      prev.map(app =>
        selectedApplicants.includes(app.id) ? { ...app, status: 'accepted' } : app
      )
    );
    setSelectedApplicants([]);
  };

  const handleReject = (id: number) => {
    if (confirm('Jeste li sigurni da želite odbiti ovog kandidata?')) {
      setApplicants(prev =>
        prev.map(app => (app.id === id ? { ...app, status: 'rejected' } : app))
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full my-8">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{jobTitle}</h2>
            <p className="text-gray-600">
              {applicants.length} prijava • {selectedApplicants.length} odabrano
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className={`border-2 rounded-lg p-6 transition ${
                selectedApplicants.includes(applicant.id)
                  ? 'border-blue-500 bg-blue-50'
                  : applicant.status === 'accepted'
                  ? 'border-green-300 bg-green-50'
                  : applicant.status === 'rejected'
                  ? 'border-red-300 bg-red-50 opacity-60'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-start flex-1">
                  <input
                    type="checkbox"
                    checked={selectedApplicants.includes(applicant.id)}
                    onChange={() => toggleApplicant(applicant.id)}
                    disabled={applicant.status !== 'pending'}
                    className="mt-1 w-5 h-5 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {applicant.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {applicant.university} • {applicant.year}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        {applicant.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        {applicant.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FileText className="w-4 h-4" />
                        Vještine: {applicant.skills}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FileText className="w-4 h-4" />
                        Iskustvo: {applicant.experience}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Prijavljeno: {applicant.appliedDate}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {applicant.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleReject(applicant.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition text-red-600"
                        title="Odbij"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition text-blue-600">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  {applicant.status === 'accepted' && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Prihvaćeno
                    </span>
                  )}
                  {applicant.status === 'rejected' && (
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      Odbijeno
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t bg-gray-50 flex gap-4">
          <button
            onClick={handleAcceptSelected}
            disabled={selectedApplicants.length === 0}
            className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Prihvati odabrane ({selectedApplicants.length})
          </button>
          <button
            onClick={onClose}
            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-white transition"
          >
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
}
