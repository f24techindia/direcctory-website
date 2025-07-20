import React, { useState } from 'react';
import { Search, MapPin, Star, ExternalLink, Mail } from 'lucide-react';

const talents = [
  {
    name: "Sarah Chen",
    title: "Senior Product Designer",
    description: "8+ years of experience creating delightful user experiences for tech startups. Specialized in design systems and user research.",
    logo: "SC",
    skills: ["Product Design", "UX/UI", "Figma", "User Research", "Design Systems"],
    location: "New York, NY",
    experience: "8+ years",
    rating: 4.9,
    projects: 47,
    availability: "Available"
  },
  {
    name: "Marcus Rodriguez",
    title: "Full Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, and cloud architecture. Open source contributor with 50+ repositories.",
    logo: "MR",
    skills: ["Full Stack", "React", "Node.js", "AWS", "TypeScript"],
    location: "Austin, TX",
    experience: "6+ years",
    rating: 4.8,
    projects: 32,
    availability: "Available"
  },
  {
    name: "Jessica Kim",
    title: "Data Scientist",
    description: "Data scientist and machine learning engineer with expertise in Python, TensorFlow, and deep learning. PhD in Computer Science.",
    logo: "JK",
    skills: ["Data Science", "Machine Learning", "Python", "AI", "TensorFlow"],
    location: "Seattle, WA",
    experience: "5+ years",
    rating: 4.9,
    projects: 28,
    availability: "Busy"
  },
  {
    name: "David Thompson",
    title: "Mobile App Developer",
    description: "Mobile app developer with expertise in React Native and Flutter. 50+ apps published on app stores with millions of downloads.",
    logo: "DT",
    skills: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
    location: "London, UK",
    experience: "7+ years",
    rating: 4.7,
    projects: 53,
    availability: "Available"
  },
  {
    name: "Alex Johnson",
    title: "DevOps Engineer",
    description: "DevOps engineer with expertise in Kubernetes, Docker, and cloud infrastructure automation. Certified AWS Solutions Architect.",
    logo: "AJ",
    skills: ["DevOps", "Kubernetes", "Docker", "Cloud", "AWS"],
    location: "Berlin, Germany",
    experience: "9+ years",
    rating: 4.8,
    projects: 41,
    availability: "Available"
  },
  {
    name: "Emily Rodriguez",
    title: "Frontend Developer",
    description: "Frontend specialist focused on React, Vue.js, and modern web technologies. Passionate about performance optimization and accessibility.",
    logo: "ER",
    skills: ["Frontend", "React", "Vue.js", "JavaScript", "CSS"],
    location: "Barcelona, Spain",
    experience: "4+ years",
    rating: 4.6,
    projects: 29,
    availability: "Available"
  }
];

export const Talent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const allSkills = Array.from(new Set(talents.flatMap(talent => talent.skills))).sort();

  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = !selectedSkill || talent.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Talent
            <span className="text-5xl sm:text-6xl ml-4">👨‍💻</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Connect with exceptional professionals who can bring your projects to life.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-8 border border-stone-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search talent by name, skills, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              />
            </div>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-4 py-3 bg-stone-50 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            >
              <option value="">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTalents.map((talent, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-stone-200 dark:border-slate-700 hover:border-stone-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {talent.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{talent.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      talent.availability === 'Available' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {talent.availability}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{talent.title}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{talent.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-slate-600 dark:text-slate-400 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{talent.rating}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{talent.projects}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{talent.experience}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-slate-600 dark:text-slate-400 mb-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{talent.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {talent.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="bg-stone-100 dark:bg-slate-700 hover:bg-stone-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No talent found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};