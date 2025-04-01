import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  ClipboardList, 
  Clock, 
  FileText, 
  Send, 
  Menu, 
  X,
  Plus,
  Moon,
  // Bell,
  // MessageSquare,
  // Briefcase,
  ChevronRight
} from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import { cn } from '@/lib/utils';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import Features from './pages/Features';
import EquityGapFinder from './pages/EquityGapFinder';

function HomePage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with MailChimp
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#1b2025] text-[#e9eae9]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#181b20] to-[#313485]/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
         
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            {/* Large Logo */}
            {/* <div className="h-20 w-20 relative">
            <img src="./src/public/images/Reignlogo.png" alt="logo" className='w-50 aspect'/>
            </div> */}
          </div>
          <h2 className="text-2xl md:text-3xl mb-2 font-light text-white/60 font-[100] uppercase tracking-widest">
            <span>Welcome to an <span className='font-[500] text-white'>unbiased</span> world.</span>
          </h2>
          <h3 className='text-2xl md:text-2xl font-light mb-8 tracking-wide font-[100] text-white/60'>Bringing <span className='font-[500] text-white'>high-quality analytics</span> and <span className='font-[500] text-white'>equality</span> to every workplace. Always.</h3>
          <div className="text-3xl md:text-5xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-[#f61f83] via-[#365da4] to-[#5f3087] text-transparent bg-clip-text">
            REAL-TIME EMPLOYEE INTELLIGENCE GATHERING NETWORK
          </div>
        
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#f61f83] hover:bg-[#f61f83]/80 text-white rounded-full font-medium transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border border-[#e9eae9] hover:bg-[#e9eae9]/10 text-[#e9eae9] rounded-full font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Mindful Measures Inc.</h2>
            <p className="text-lg leading-relaxed mb-8">
              At Mindful Measures Inc., we're revolutionizing the way businesses approach workforce analytics. 
              Our cutting-edge software is designed to eliminate workplace bias, fostering a more equitable and 
              efficient work environment. By harnessing the power of our unique real-time resume feature, we provide 
              a comprehensive view of an employee's work experience, going beyond traditional metrics.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              This innovative approach not only enhances decision-making for employers but also ensures fair and 
              inclusive treatment of all staff members. Our commitment to using data for good positions us at the 
              forefront of creating workplaces where talent and hard work are the only measures that matter.
            </p>
            <p className="text-lg leading-relaxed">
              Join us in shaping a future where every employee is valued for their true contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="solutions">
        <BentoGrid />
      </section>

      {/* Real-Time Resume Section */}
      <section id="real-time-resume" className="py-20 bg-[#1b2025]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#313485] p-6 rounded-full inline-block mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Resume™</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Real-Time Resume at Mindful Measures Inc. is a groundbreaking innovation in workforce analytics, 
                designed to transform how employee achievements and experiences are tracked and evaluated. This dynamic 
                tool goes beyond the static nature of traditional resumes by providing a living, comprehensive record 
                of an employee's professional journey.
              </p>
              <p className="text-lg leading-relaxed">
                It captures a wide array of data points — from project contributions and skill development to teamwork 
                and leadership experiences — all updated and verified by supervisors in real time. This allows for a more 
                nuanced and complete representation of an individual's capabilities and accomplishments. By offering a 
                holistic view of an employee's career trajectory, the Real-Time Resume empowers employers to make more 
                informed, equitable decisions and enables employees to showcase their true value and potential in the workplace.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#365da4]/30">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Real-Time Resume Dashboard" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f61f83]"></div>
                    <span>Real-time performance tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#365da4]"></div>
                    <span>Comprehensive skill assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#87c345]"></div>
                    <span>Verified project contributions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5f3087]"></div>
                    <span>Career development insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Management Section */}
      <section id="team-management" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#f61f83] p-6 rounded-full inline-block mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Team Management</h2>
              <p className="text-lg leading-relaxed mb-6">
                Our innovative team-building tool is revolutionizing the way employers assemble and analyze work teams. 
                This intuitive platform allows managers to select team members from a detailed roster, showcasing key 
                metrics such as performance ratings, KPIs, and attendance records.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                As team members are added, the system dynamically calculates and displays collective data, including 
                total hourly cost, average performance, and predicted attendance, offering a comprehensive snapshot 
                of the team's potential.
              </p>
              <p className="text-lg leading-relaxed">
                This tool enables employers to conduct side-by-side comparisons of different teams, providing invaluable 
                insights into which groupings are best suited for specific projects or shifts. By leveraging this data-driven 
                approach, employers can make more informed decisions, ultimately leading to increased productivity and 
                success in their projects.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#f61f83]/30">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team Management Dashboard" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="text-sm text-[#e9eae9]/60">Team Performance</div>
                    <div className="text-xl font-bold text-[#87c345]">94%</div>
                  </div>
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="text-sm text-[#e9eae9]/60">Hourly Cost</div>
                    <div className="text-xl font-bold text-[#365da4]">$345</div>
                  </div>
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="text-sm text-[#e9eae9]/60">Attendance Rate</div>
                    <div className="text-xl font-bold text-[#f61f83]">98.5%</div>
                  </div>
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="text-sm text-[#e9eae9]/60">Team Size</div>
                    <div className="text-xl font-bold text-[#5f3087]">8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inequity Gap Finder Section */}
      <section id="inequity-gap-finder" className="py-20 bg-[#1b2025]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#87c345] p-6 rounded-full inline-block mb-6">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Inequity Gap Finder</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Inequity Gap Finder, a pivotal tool at Mindful Measures, is designed to uphold fairness and equity 
                within the workplace. This powerful tool enables employers to analyze and compare various employment 
                variables across different demographics, ensuring that all staff members receive equitable opportunities 
                and compensation, irrespective of their gender, race, age, or creed.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For instance, an employer can select African American men within a certain age range and job title and 
                compare their collective data against other groups to identify any disparities. This level of detailed 
                analysis is crucial for detecting and addressing potential inequities in pay, promotions, and job assignments.
              </p>
              <p className="text-lg leading-relaxed">
                The Inequity Gap Finder not only helps in maintaining a fair and inclusive work environment but also 
                reinforces the company's commitment to diversity and equality. By proactively identifying and rectifying 
                these gaps, businesses can foster a culture of trust and respect, essential for long-term success and 
                employee satisfaction.
              </p>
              <div className="mt-8">
                <Link
                  to="/equity-gap-finder"
                  className="px-6 py-3 bg-[#87c345] hover:bg-[#87c345]/80 text-white rounded-full font-medium transition-colors inline-flex items-center"
                >
                  Try the Equity Gap Finder
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#87c345]/30">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Inequity Gap Finder Dashboard" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Gender Pay Gap</span>
                      <span className="text-[#f61f83]">12.4% Difference</span>
                    </div>
                    <div className="w-full bg-[#181b20] rounded-full h-2.5">
                      <div className="bg-[#f61f83] h-2.5 rounded-full" style={{ width: '12.4%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Promotion Rate Disparity</span>
                      <span className="text-[#365da4]">8.7% Difference</span>
                    </div>
                    <div className="w-full bg-[#181b20] rounded-full h-2.5">
                      <div className="bg-[#365da4] h-2.5 rounded-full" style={{ width: '8.7%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Training Opportunity Gap</span>
                      <span className="text-[#5f3087]">5.2% Difference</span>
                    </div>
                    <div className="w-full bg-[#181b20] rounded-full h-2.5">
                      <div className="bg-[#5f3087] h-2.5 rounded-full" style={{ width: '5.2%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section id="project-management" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#365da4] p-6 rounded-full inline-block mb-6">
                <ClipboardList className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Management</h2>
              <p className="text-lg leading-relaxed mb-6">
                The project management tool at Mindful Measures is a game-changer for organizations looking to optimize 
                their project execution and performance analysis. By aggregating and analyzing data produced by each 
                employee involved in a project, this tool offers a comprehensive view of total labor costs, project 
                performance ratings, and attendance metrics.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                It also provides a detailed breakdown of the specific skill sets required in different areas of the project. 
                The impact of utilizing such a tool in an organization is profound. It enables managers to make data-driven 
                decisions, aligning the right skills with the right tasks, and efficiently allocating resources.
              </p>
              <p className="text-lg leading-relaxed">
                This leads to more accurate budgeting, improved project timelines, and enhanced overall project quality. 
                Additionally, by identifying trends and patterns in project performance, organizations can proactively 
                address potential issues, refine processes, and foster continuous improvement. Ultimately, this tool not 
                only drives project success but also contributes significantly to the strategic growth and competitive 
                edge of the organization.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#365da4]/30">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Project Management Dashboard" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="min-w-[100px] mr-4">
                      <div className="text-sm text-[#e9eae9]/60">Timeline</div>
                      <div className="text-base font-medium">12 weeks</div>
                    </div>
                    <div className="w-full bg-[#181b20] rounded h-4 mt-2">
                      <div className="bg-gradient-to-r from-[#f61f83] to-[#5f3087] h-4 rounded" style={{ width: '65%' }}></div>
                    </div>
                    <div className="min-w-[40px] ml-2 text-right">
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#181b20] p-3 rounded-lg">
                      <div className="text-xs text-[#e9eae9]/60">Budget</div>
                      <div className="text-base font-medium text-[#87c345]">$48,500</div>
                    </div>
                    <div className="bg-[#181b20] p-3 rounded-lg">
                      <div className="text-xs text-[#e9eae9]/60">Team</div>
                      <div className="text-base font-medium text-[#f61f83]">12 People</div>
                    </div>
                    <div className="bg-[#181b20] p-3 rounded-lg">
                      <div className="text-xs text-[#e9eae9]/60">Status</div>
                      <div className="text-base font-medium text-[#365da4]">On Track</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-20 bg-[#1b2025]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">R.E.I.G.N. Mobile App</h2>
          
          {/* Mobile App Mockups */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <div className="relative max-w-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f61f83]/20 via-[#365da4]/20 to-[#87c345]/20 rounded-3xl blur-md"></div>
              <div className="relative p-4 bg-[#0d0d0d] rounded-3xl border-4 border-[#181b20] shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#0d0d0d] flex justify-between items-center mb-3 p-2">
                  <Menu className="h-5 w-5 text-[#e9eae9]" />
                  <div className="flex items-center space-x-1">
                    <div className="h-4 w-4 relative">
                      <div className="absolute inset-0 bg-[#365da4] skew-x-12 transform -translate-x-0.5"></div>
                      <div className="absolute inset-0 bg-[#87c345] skew-x-12 transform translate-x-0.5 opacity-80"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-[#f61f83] rounded-r-full opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-[8px]">R</div>
                    </div>
                    <span className="text-xs font-bold text-[#e9eae9]">REIGN</span>
                  </div>
                  <div className="w-5"></div>
                </div>
                
                {/* User List */}
                <div className="space-y-2">
                  {[
                    { 
                      name: 'Jeremy Leitner', 
                      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'Trayvonne Watson', 
                      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'Elias Reprincke', 
                      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'Marty Jorgensen', 
                      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'Hope Gibson', 
                      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'HR Department', 
                      img: 'https://images.unsplash.com/photo-1579165466741-7f35e4755183?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '3m'
                    },
                    { 
                      name: 'Jonathan Ortiz', 
                      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '2m'
                    },
                    { 
                      name: 'Christian MacDonald', 
                      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80',
                      time: '2m'
                    }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={user.img} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-gray-400">I was wondering if I could switch shifts with Harry on next Monday as I have an appointment.</div>
                      </div>
                      <div className="text-xs text-gray-400">{user.time}</div>
                    </div>
                  ))}
                </div>
                
                {/* Add Button */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-[#f61f83] w-12 h-12 rounded-full flex items-center justify-center">
                    <Plus className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative max-w-[300px] mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f61f83]/20 via-[#365da4]/20 to-[#87c345]/20 rounded-3xl blur-md"></div>
              <div className="relative p-4 bg-[#0d0d0d] rounded-3xl border-4 border-[#181b20] shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#0d0d0d] flex justify-between items-center mb-3 p-2">
                  <Menu className="h-5 w-5 text-[#e9eae9]" />
                  <div className="flex items-center space-x-1">
                    <div className="h-4 w-4 relative">
                      <div className="absolute inset-0 bg-[#365da4] skew-x-12 transform -translate-x-0.5"></div>
                      <div className="absolute inset-0 bg-[#87c345] skew-x-12 transform translate-x-0.5 opacity-80"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-[#f61f83] rounded-r-full opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-[8px]">R</div>
                    </div>
                    <span className="text-xs font-bold text-[#e9eae9]">REIGN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Moon className="h-5 w-5 text-[#e9eae9]" />
                    <div className="flex items-center justify-center bg-[#365da4] h-5 w-5 rounded-full text-[10px] text-white font-bold">TB</div>
                  </div>
                </div>
                
                {/* User Greeting */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center bg-[#365da4] h-8 w-8 rounded-full text-xs text-white font-bold">TB</div>
                  <div className="text-base font-medium">Hello, Ted</div>
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">PPI</div>
                    <div className="text-xs text-[#e9eae9]/60">Predictive Performance Indicator</div>
                    <div className="text-xl font-bold text-[#f61f83] mt-1">3.1<span className="text-xs text-[#e9eae9]/60">/3.5</span></div>
                  </div>
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">OTS</div>
                    <div className="text-xs text-[#e9eae9]/60">On-time Punch Streak</div>
                    <div className="text-xl font-bold text-[#365da4] mt-1">132<span className="text-xs text-[#e9eae9]/60">/365</span></div>
                  </div>
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">Performance</div>
                    <div className="text-xs text-[#e9eae9]/60">Daily Performance Rating</div>
                    <div className="text-xl font-bold text-[#87c345] mt-1">9.1<span className="text-xs text-[#e9eae9]/60">/10</span></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">Team</div>
                    <div className="text-xs text-[#e9eae9]/60">Team Average Performance</div>
                    <div className="text-xl font-bold text-[#5f3087] mt-1">8.7<span className="text-xs text-[#e9eae9]/60">/10</span></div>
                  </div>
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">Success</div>
                    <div className="text-xs text-[#e9eae9]/60">Score Probability of Success</div>
                    <div className="text-xl font-bold text-[#f61f83] mt-1">87.9<span className="text-xs text-[#e9eae9]/60">%</span></div>
                  </div>
                  <div className="bg-[#181b20] p-2 rounded-lg">
                    <div className="text-xs text-[#e9eae9]/60 uppercase mb-1">UMI</div>
                    <div className="text-xs text-[#e9eae9]/60">Usefulness Margin Index</div>
                    <div className="text-xl font-bold text-[#87c345] mt-1">93.3<span className="text-xs text-[#e9eae9]/60">%</span></div>
                  </div>
                </div>
                
                {/* Break Room Notice */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464306208223-e022a263020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Food in break room" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                    <div className="text-sm font-medium">Taco Bar in the break room</div>
                    <div className="text-xs text-[#e9eae9]/60">5p</div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="text-xs text-center mt-4 text-[#e9eae9]/60">
                  <div>Copyright © 2024 R.E.I.G.N. All rights reserved.</div>
                  <div className="mt-1">
                    Powered by 
                    <span className="text-[#365da4] font-bold">M</span>
                    <span className="text-[#e9eae9]">indful </span>
                    <span className="text-[#f61f83] font-bold">M</span>
                    <span className="text-[#e9eae9]">easures Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-[#181b20] p-8 rounded-xl shadow-lg border border-[#5f3087]/30">
              <div className="flex items-start mb-6">
                <div className="bg-[#5f3087] p-4 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Time & Attendance</h3>
                  <p className="text-lg leading-relaxed">
                    The scheduling feature integrated into the R.E.I.G.N mobile app brings a new level of convenience and 
                    efficiency to managing work schedules and leave requests. Employees can view their schedules in real time, 
                    providing them with up-to-date information on their work hours and shifts.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Additionally, the app simplifies the process of requesting time off. Employees can submit requests for 
                    days off directly through the app, specifying the nature of the leave. These requests instantly notify 
                    supervisors, streamlining the approval process and ensuring timely communication.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Time & Attendance Mobile App" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-[#181b20] p-8 rounded-xl shadow-lg border border-[#f61f83]/30">
              <div className="flex items-start mb-6">
                <div className="bg-[#f61f83] p-4 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mobile Real-Time Resume™</h3>
                  <p className="text-lg leading-relaxed">
                    In the R.E.I.G.N, transparency and self-improvement take center stage with our mobile Real-Time Resume 
                    feature, accessible directly through our mobile app. This unique tool empowers employees by giving them 
                    the ability to view their own professional profiles in real time.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    It's not just a summary of their work history; it's a dynamic, detailed representation of their strengths, 
                    efficiencies, and areas for improvement. By having immediate access to this data, employees can take an 
                    active role in their professional development, identifying skills they can enhance and areas where they excel.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Mobile Real-Time Resume" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">The Foundation of Our Data Ecosystem</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              The mobile application of R.E.I.G.N by Mindful Measures, utilized for clocking in and out, serves as the 
              foundational layer for our comprehensive data ecosystem. Each time punch by an employee is more than just 
              a record of attendance; it's a vital data point that feeds into the larger analytics framework.
            </p>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mt-4">
              This real-time data collection is crucial in generating accurate and insightful metrics for all our tools, 
              from the Real-Time Resume to the Inequity Gap Finder and the advanced project management system. By 
              seamlessly integrating this everyday action into our data analytics platform, we ensure that the insights 
              provided are grounded in the actual, day-to-day operations of the organization.
            </p>
            
            {/* Link to the Features page */}
            <div className="mt-12">
              <Link 
                to="/features" 
                className="px-8 py-3 bg-[#f61f83] hover:bg-[#f61f83]/80 text-white rounded-full font-medium transition-colors inline-flex items-center"
              >
                Explore Enhanced Features
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with MailChimp */}
      <section id="contact" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Started with Mindful Measures</h2>
            <p className="text-lg mb-12">
              Join our newsletter to stay updated on the latest features and improvements to our workforce analytics platform.
            </p>
            
            <div className="bg-[#1b2025] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-4 py-3 bg-[#0d0d0d] border border-[#365da4]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f61f83]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#f61f83] hover:bg-[#f61f83]/80 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-sm text-[#e9eae9]/60 mt-4">
                By subscribing, you agree to receive updates from Mindful Measures Inc. We respect your privacy and will never share your information.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col items-center">
              <p className="font-bold text-xl mb-4">Ready to transform your workplace?</p>
              <a 
                href="mailto:info@mindfulmeasuresinc.com" 
                className="px-8 py-3 bg-[#365da4] hover:bg-[#365da4]/80 text-white rounded-full font-medium transition-colors inline-flex items-center"
              >
                Contact Our Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#1b2025] text-[#e9eae9]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-12 w-12 relative">
                <img src="./src/public/images/Reignlogo.png" alt="logo" className='w-50 aspect'/>
              </div>
              <span className="text-xl font-extralight uppercase">
                <span className='tracking-[5px] text-white/40'>Mindful</span> 
                <span className='block -mt-1 tracking-[2px] text-[#FF1976]'>Measures</span>
                </span>
            </Link>
          </div>
          
          {/* Desktop Navigation using shadcn Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu className="bg-transparent">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-[#e9eae9] hover:text-[#f61f83] transition-colors px-3 py-2"
                    href="#about"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[#e9eae9] hover:text-[#f61f83] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#181b20] p-6 no-underline outline-none focus:shadow-md"
                            href="#real-time-resume"
                          >
                            <FileText className="h-6 w-6 text-[#f61f83] mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium text-[#e9eae9]">
                              Real-Time Resume™
                            </div>
                            <p className="text-sm leading-tight text-[#e9eae9]/70">
                              A dynamic tool providing a living, comprehensive record 
                              of an employee's professional journey.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#181b20] hover:text-[#f61f83]"
                            href="#team-management"
                          >
                            <div className="text-sm font-medium leading-none">Team Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#e9eae9]/70">
                              Build and analyze work teams with comprehensive metrics.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#181b20] hover:text-[#f61f83]"
                            href="#inequity-gap-finder"
                          >
                            <div className="text-sm font-medium leading-none">Inequity Gap Finder</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#e9eae9]/70">
                              Analyze and address workplace inequities across demographics.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#181b20] hover:text-[#f61f83]"
                            href="#project-management"
                          >
                            <div className="text-sm font-medium leading-none">Project Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#e9eae9]/70">
                              Optimize project execution with comprehensive analytics.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-[#e9eae9] hover:text-[#f61f83] transition-colors px-3 py-2"
                    href="#mobile-app"
                  >
                    Mobile App
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/features" 
                    className="text-[#e9eae9] hover:text-[#f61f83] transition-colors px-3 py-2 flex items-center"
                  >
                    <span>Enhanced Features</span>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/equity-gap-finder" 
                    className="text-[#e9eae9] hover:text-[#f61f83] transition-colors px-3 py-2 flex items-center"
                  >
                    <span>Equity Gap Finder</span>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-[#e9eae9] hover:text-[#f61f83] transition-colors px-3 py-2"
                    href="#contact"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="px-6 py-2 bg-[#f61f83] hover:bg-[#f61f83]/80 text-white rounded-full font-medium transition-colors ml-2"
                    href="#contact"
                  >
                    Get Started
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#e9eae9] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#181b20] absolute w-full">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#about" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>About</a>
              <a href="#real-time-resume" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Real-Time Resume</a>
              <a href="#team-management" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Team Management</a>
              <a href="#inequity-gap-finder" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Inequity Gap Finder</a>
              <a href="#project-management" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Project Management</a>
              <a href="#mobile-app" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Mobile App</a>
              <Link to="/features" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Enhanced Features</Link>
              <Link to="/equity-gap-finder" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Equity Gap Finder</Link>
              <a href="#contact" className="hover:text-[#f61f83] transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/equity-gap-finder" element={<EquityGapFinder />} />
      </Routes>
    </div>
  );
}

export default App;