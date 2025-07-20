import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { DirectoryCard } from '../components/DirectoryCard';

const allData = [
  {
    name: "Vercel",
    description: "The platform for frontend developers, providing the speed and reliability innovators need to create at the edge.",
    logo: "V",
    tags: ["Frontend", "Deployment", "Next.js", "React"],
    location: "San Francisco, CA",
    employees: "100-500",
    type: "company" as const
  },
  {
    name: "Sarah Chen",
    description: "Senior Product Designer with 8+ years of experience creating delightful user experiences for tech startups.",
    logo: "SC",
    tags: ["Product Design", "UX/UI", "Figma", "User Research"],
    location: "New York, NY",
    employees: "Freelancer",
    type: "talent" as const
  },
  {
    name: "Stripe",
    description: "Online payment processing for internet businesses. Millions of companies use Stripe to accept payments.",
    logo: "S",
    tags: ["Fintech", "Payments", "API", "Infrastructure"],
    location: "San Francisco, CA",
    employees: "1000+",
    type: "company" as const
  },
  {
    name: "Marcus Rodriguez",
    description: "Full-stack developer specializing in React, Node.js, and cloud architecture. Open source contributor.",
    logo: "MR",
    tags: ["Full Stack", "React", "Node.js", "AWS"],
    location: "Austin, TX",
    employees: "Freelancer",
    type: "talent" as const
  },
  {
    name: "Linear",
    description: "The issue tracking tool streamlined for high-performance teams. Built for modern software development.",
    logo: "L",
    tags: ["Productivity", "Project Management", "B2B", "Software"],
    location: "Remote",
    employees: "50-100",
    type: "company" as const
  },
  {
    name: "Jessica Kim",
    description: "Data scientist and machine learning engineer with expertise in Python, TensorFlow, and deep learning.",
    logo: "JK",
    tags: ["Data Science", "Machine Learning", "Python", "AI"],
    location: "Seattle, WA",
    employees: "Freelancer",
    type: "talent" as const
  },
  {
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Where teams go to work together.",
    logo: "N",
    tags: ["Productivity", "Collaboration", "Workspace", "SaaS"],
    location: "San Francisco, CA",
    employees: "500-1000",
    type: "company" as const
  },
  {
    name: "David Thompson",
    description: "Mobile app developer with expertise in React Native and Flutter. 50+ apps published on app stores.",
    logo: "DT",
    tags: ["Mobile Development", "React Native", "Flutter", "iOS/Android"],
    location: "London, UK",
    employees: "Freelancer",
    type: "talent" as const
  },
  {
    name: "Figma",
    description: "Collaborative interface design tool. Design, prototype, and gather feedback all in one place.",
    logo: "F",
    tags: ["Design", "Collaboration", "Prototyping", "SaaS"],
    location: "San Francisco, CA",
    employees: "500-1000",
    type: "company" as const
  },
  {
    name: "Alex Johnson",
    description: "DevOps engineer with expertise in Kubernetes, Docker, and cloud infrastructure automation.",
    logo: "AJ",
    tags: ["DevOps", "Kubernetes", "Docker", "Cloud"],
    location: "Berlin, Germany",
    employees: "Freelancer",
    type: "talent" as const
  }
];

export const Browse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'company' | 'talent'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredData = allData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Browse Directory
            <span className="text-5xl sm:text-6xl ml-4">🔍</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover amazing companies and talented individuals from around the world.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-8 border border-stone-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search companies, talent, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as 'all' | 'company' | 'talent')}
                className="px-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              >
                <option value="all">All Types</option>
                <option value="company">Companies</option>
                <option value="talent">Talent</option>
              </select>
              
              <div className="flex bg-stone-100 dark:bg-slate-700 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Showing {filteredData.length} results
          </p>
        </div>

        {/* Directory Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredData.map((item, index) => (
            <DirectoryCard
              key={index}
              name={item.name}
              description={item.description}
              logo={item.logo}
              tags={item.tags}
              location={item.location}
              employees={item.employees}
              type={item.type}
            />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No results found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};