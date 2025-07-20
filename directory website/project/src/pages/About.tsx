import React from 'react';
import { Users, Target, Award, Globe, ArrowRight } from 'lucide-react';

const stats = [
  { label: "Companies", value: "10,000+", icon: Users },
  { label: "Talented Professionals", value: "50,000+", icon: Target },
  { label: "Successful Connections", value: "100,000+", icon: Award },
  { label: "Countries", value: "150+", icon: Globe }
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    image: "AC",
    description: "Former VP of Engineering at Stripe. Passionate about connecting talent with opportunities."
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    image: "SJ",
    description: "Ex-Google PM with 10+ years building products that scale to millions of users."
  },
  {
    name: "Marcus Williams",
    role: "Head of Engineering",
    image: "MW",
    description: "Previously led engineering teams at Airbnb and Uber. Expert in distributed systems."
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    image: "ED",
    description: "Award-winning designer who previously worked at Apple and Figma on user experience."
  }
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About Directory
            <span className="text-5xl sm:text-6xl lg:text-7xl ml-4">🚀</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to connect the world's most innovative companies with exceptional talent, 
            creating opportunities that drive the future of technology.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-stone-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                We believe that great things happen when talented people connect with innovative companies. 
                Our platform breaks down barriers and creates meaningful connections that drive innovation forward.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Whether you're a company looking for exceptional talent or a professional seeking your next opportunity, 
                we provide the tools and community to make those connections happen.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Join Our Mission</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To become the world's most trusted platform for connecting talent and opportunity, 
                fostering innovation and growth across every industry and geography.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet Our Team
              <span className="text-4xl sm:text-5xl ml-4">👥</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We're a diverse team of builders, dreamers, and problem-solvers united by our passion for connecting people.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-stone-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we build our platform and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-stone-200 dark:border-slate-700">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Trust & Transparency</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We build trust through transparency, honest communication, and reliable service that our community can depend on.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-stone-200 dark:border-slate-700">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Diversity & Inclusion</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We celebrate diversity and create an inclusive environment where everyone can thrive and contribute their unique perspectives.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-stone-200 dark:border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Innovation & Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We continuously innovate and strive for excellence in everything we do, pushing boundaries to create better experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};