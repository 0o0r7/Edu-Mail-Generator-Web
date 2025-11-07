'use client';

import { useState } from 'react';

interface GeneratedEmail {
  email: string;
  password: string;
  college: string;
  timestamp: string;
}

export default function HomePage() {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedEmails, setGeneratedEmails] = useState<GeneratedEmail[]>([]);

  const colleges = [
    'Harvard University',
    'MIT',
    'Stanford University',
    'University of California',
    'Yale University',
    'Princeton University',
  ];

  const benefits = [
    { title: 'Spotify 50% Off', emoji: '🎵' },
    { title: 'Apple Music Discount', emoji: '🎧' },
    { title: 'Free AWS Credits', emoji: '☁️' },
    { title: 'Adobe CC Discount', emoji: '🎨' },
    { title: 'Free Amazon Prime', emoji: '📦' },
    { title: 'Microsoft Office Free', emoji: '📄' },
  ];

  const handleGenerateEmail = async () => {
    if (!selectedCollege) {
      alert('Please select a college');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newEmail: GeneratedEmail = {
        email: `user_${Math.random().toString(36).substr(2, 9)}@${selectedCollege.toLowerCase().replace(/\s+/g, '')}.edu`,
        password: Math.random().toString(36).substring(2, 10),
        college: selectedCollege,
        timestamp: new Date().toLocaleString(),
      };
      setGeneratedEmails([newEmail, ...generatedEmails]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-blue-600">✉️ Edu-Mail Generator</h1>
            </div>
            <p className="text-sm text-gray-600">Generate Free Educational Emails</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Generate Your Email</h2>
                <p className="text-gray-600">Select a college and generate a free educational email account</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select College/University</label>
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a college...</option>
                  {colleges.map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleGenerateEmail}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? '⏳ Generating...' : '⚡ Generate Email'}
              </button>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Student Benefits</h3>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                  <span className="text-xl">{benefit.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Emails List */}
        {generatedEmails.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Generated Emails</h2>
            <div className="space-y-4">
              {generatedEmails.map((email, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Email</p>
                      <p className="text-sm font-mono bg-gray-50 p-2 rounded mt-1 break-all">{email.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Password</p>
                      <p className="text-sm font-mono bg-gray-50 p-2 rounded mt-1 break-all">{email.password}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">College</p>
                      <p className="text-sm font-medium mt-1">{email.college}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Generated</p>
                      <p className="text-sm text-gray-700 mt-1">{email.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
