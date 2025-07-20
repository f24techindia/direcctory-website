import React, { useState } from 'react';
import { User, Building, Mail, MapPin, Globe, Upload, Check } from 'lucide-react';

export const JoinDirectory: React.FC = () => {
  const [accountType, setAccountType] = useState<'talent' | 'company'>('talent');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    website: '',
    description: '',
    skills: '',
    experience: '',
    portfolio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { accountType, ...formData });
    alert('Application submitted successfully! We\'ll review your profile and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Join Directory
            <span className="text-5xl sm:text-6xl ml-4">🎯</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Become part of our community and connect with amazing opportunities or exceptional talent.
          </p>
        </div>

        {/* Account Type Selection */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 border border-stone-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            What type of account would you like to create?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setAccountType('talent')}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                accountType === 'talent'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-stone-200 dark:border-slate-700 hover:border-stone-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  accountType === 'talent' ? 'bg-blue-500 text-white' : 'bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">I'm Talent</h3>
                  <p className="text-slate-600 dark:text-slate-400">Looking for opportunities</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Showcase your skills, experience, and portfolio to connect with innovative companies.
              </p>
            </button>

            <button
              onClick={() => setAccountType('company')}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                accountType === 'company'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-stone-200 dark:border-slate-700 hover:border-stone-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  accountType === 'company' ? 'bg-blue-500 text-white' : 'bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}>
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">I'm a Company</h3>
                  <p className="text-slate-600 dark:text-slate-400">Looking for talent</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Find exceptional professionals and showcase your company culture to attract top talent.
              </p>
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-stone-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {accountType === 'talent' ? 'Talent Application' : 'Company Application'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {accountType === 'talent' ? 'Full Name' : 'Company Name'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder={accountType === 'talent' ? 'John Doe' : 'Acme Inc.'}
                  />
                  {accountType === 'talent' ? (
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  ) : (
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="San Francisco, CA"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {accountType === 'talent' ? 'Portfolio/Website' : 'Company Website'}
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="https://example.com"
                  />
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>
            </div>

            {accountType === 'talent' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Skills (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="React, Node.js, TypeScript"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Years of Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9+">9+ years</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {accountType === 'talent' ? 'About You' : 'About Your Company'}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder={accountType === 'talent' 
                  ? 'Tell us about your experience, passion, and what you\'re looking for...'
                  : 'Describe your company, culture, and what makes you unique...'
                }
              />
            </div>

            <div className="border-2 border-dashed border-stone-300 dark:border-slate-600 rounded-xl p-8 text-center">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                Upload {accountType === 'talent' ? 'Resume/CV' : 'Company Logo'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Drag and drop your file here, or click to browse
              </p>
              <button
                type="button"
                className="bg-stone-100 dark:bg-slate-700 hover:bg-stone-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Choose File
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-5 h-5 text-blue-600 bg-stone-50 dark:bg-slate-700 border-stone-300 dark:border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <Check className="w-5 h-5" />
              <span>Submit Application</span>
            </button>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Join Directory?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-semibold mb-2">Quality Connections</h4>
              <p className="text-sm opacity-90">Connect with verified, high-quality profiles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Growth Opportunities</h4>
              <p className="text-sm opacity-90">Access exclusive opportunities and partnerships</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Supportive Community</h4>
              <p className="text-sm opacity-90">Join a community that supports your success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};