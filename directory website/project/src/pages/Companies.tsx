import React, { useState } from 'react';
import { Search, Building, MapPin, Users, ExternalLink } from 'lucide-react';

const companies = [
  {
    name: "Vercel",
    description: "The platform for frontend developers, providing the speed and reliability innovators need to create at the edge.",
    logo: "V",
    tags: ["Frontend", "Deployment", "Next.js", "React"],
    location: "San Francisco, CA",
    employees: "100-500",
    founded: "2015",
    website: "vercel.com"
  },
  {
    name: "Stripe",
    description: "Online payment processing for internet businesses. Millions of companies use Stripe to accept payments.",
    logo: "S",
    tags: ["Fintech", "Payments", "API", "Infrastructure"],
    location: "San Francisco, CA",
    employees: "1000+",
    founded: "2010",
    website: "stripe.com"
  },
  {
    name: "Linear",
    description: "The issue tracking tool streamlined for high-performance teams. Built for modern software development.",
    logo: "L",
    tags: ["Productivity", "Project Management", "B2B", "Software"],
    location: "Remote",
    employees: "50-100",
    founded: "2019",
    website: "linear.app"
  },
  {
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Where teams go to work together.",
    logo: "N",
    tags: ["Productivity", "Collaboration", "Workspace", "SaaS"],
    location: "San Francisco, CA",
    employees: "500-1000",
    founded: "2016",
    website: "notion.so"
  },
  {
    name: "Figma",
    description: "Collaborative interface design tool. Design, prototype, and gather feedback all in one place.",
    logo: "F",
    tags: ["Design", "Collaboration", "Prototyping", "SaaS"],
    location: "San Francisco, CA",
    employees: "500-1000",
    founded: "2012",
    website: "figma.com"
  },
  {
    name: "Supabase",
    description: "Open source Firebase alternative. Build a backend in less than 2 minutes.",
    logo: "SB",
    tags: ["Backend", "Database", "Open Source", "BaaS"],
    location: "Remote",
    employees: "50-100",
    founded: "2020",
    website: "supabase.com"
  }
];

export const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Companies
            <span className="text-5xl sm:text-6xl ml-4">🏢</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore innovative companies that are shaping the future of technology.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-8 border border-stone-200 dark:border-slate-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-stone-200 dark:border-slate-700 hover:border-stone-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {company.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{company.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{company.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{company.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{company.employees}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Founded {company.founded}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {company.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="bg-stone-100 dark:bg-slate-700 hover:bg-stone-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-medium transition-colors">
                  Visit Website
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No companies found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};