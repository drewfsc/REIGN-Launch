import React from 'react';
import { MessageSquare, AlertTriangle, Briefcase, TrendingUp, ChevronRight, Layers, BarChart3 } from 'lucide-react';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-[#1b2025] text-[#e9eae9]">
      {/* Navigation placeholders will be handled by App.tsx */}
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#181b20] to-[#313485]/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#f61f83]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-[#365da4]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-70 h-70 bg-[#5f3087]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#f61f83] via-[#365da4] to-[#5f3087] text-transparent bg-clip-text">
              Enhanced Features
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Explore our powerful communication and progress tracking features designed to elevate workplace efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Features Section */}
      <section id="chat-features" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#f61f83] p-6 rounded-full inline-block mb-6">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chat Features</h2>
              <p className="text-lg leading-relaxed mb-6">
                R.E.I.G.N streamlines workplace communication with its built-in chat feature, eliminating the need for third-party apps like Slack or WhatsApp. This tool is designed not only for ease of interaction among employees but also for maintaining a safe and respectful work environment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                A standout feature of our chat tool is the custom alert system, which is programmed to identify and notify managers of any communication that could be considered harassment. Once a conversation is flagged, it is automatically sent to managers and supervisors for review.
              </p>
              <p className="text-lg leading-relaxed">
                This proactive approach to monitoring ensures that issues are addressed promptly and appropriately, fostering a culture of respect and safety. By integrating this advanced chat functionality, R.E.I.G.N enhances internal communication while simultaneously upholding the highest standards of workplace conduct.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#f61f83]/30 relative">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-[#f61f83]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#87c345]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#365da4]"></div>
                  </div>
                  <div className="text-xs text-[#e9eae9]/60">R.E.I.G.N Chat System</div>
                </div>
                
                <div className="mt-10 mb-4 border-b border-[#e9eae9]/10 pb-4">
                  <div className="flex justify-center">
                    <div className="bg-[#1b2025] text-xs text-[#e9eae9]/60 px-3 py-1 rounded-full">Today</div>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-4 mb-4">
                  {/* Message from coworker */}
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#365da4] flex items-center justify-center text-white text-xs font-bold mr-3">JD</div>
                    <div className="bg-[#1b2025] rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm">Hey Sarah, can you help me with the project deadline? I'm not sure I'll be able to finish on time.</p>
                      <span className="text-xs text-[#e9eae9]/40 mt-1 block">10:32 AM</span>
                    </div>
                  </div>
                  
                  {/* Reply */}
                  <div className="flex items-start justify-end">
                    <div className="bg-[#f61f83]/20 border border-[#f61f83]/30 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                      <p className="text-sm">Of course, John. Let's meet at 2 PM to go over your tasks and see where I can help.</p>
                      <span className="text-xs text-[#e9eae9]/40 mt-1 block">10:35 AM</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#f61f83] flex items-center justify-center text-white text-xs font-bold ml-3">SM</div>
                  </div>
                  
                  {/* System message with alert */}
                  <div className="flex justify-center">
                    <div className="flex items-center bg-[#1b2025] text-xs text-[#e9eae9]/60 px-4 py-2 rounded-lg border border-amber-500/30">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>A manager has joined this conversation</span>
                    </div>
                  </div>
                  
                  {/* Message from manager */}
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#87c345] flex items-center justify-center text-white text-xs font-bold mr-3">TL</div>
                    <div className="bg-[#1b2025] rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm">Hi team, I'm seeing we may have some timeline issues. Let's have a quick stand-up at 11 AM to resolve this together.</p>
                      <span className="text-xs text-[#e9eae9]/40 mt-1 block">10:40 AM</span>
                    </div>
                  </div>
                </div>
                
                {/* Chat input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full bg-[#1b2025] border border-[#e9eae9]/20 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-[#f61f83]"
                  />
                  <button className="absolute right-2 top-2 bg-[#f61f83] h-8 w-8 rounded-full flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
                
                {/* Alert banner */}
                <div className="mt-6 bg-[#181b20] border border-[#f61f83]/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-[#f61f83]/10 p-2 mr-3">
                      <AlertTriangle className="h-5 w-5 text-[#f61f83]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Harassment Prevention System</h4>
                      <p className="text-xs text-[#e9eae9]/60 mt-1">
                        Our AI monitoring system automatically detects potential harassment or toxic language and alerts management for review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Progress Section */}
      <section id="trade-progress" className="py-20 bg-[#1b2025]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#365da4] p-6 rounded-full inline-block mb-6">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trade Progress</h2>
              <p className="text-lg leading-relaxed mb-6">
                The R.E.I.G.N mobile app offers a unique feature for employees to track and evaluate their progress across various trades or skill areas. Whether an individual has experience in diverse fields like roofing and concrete work, cooking and bartending, or operating different types of manufacturing machinery, the app provides a detailed, individualized view of their proficiency in each area.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This enables employees to not only see where their strengths lie but also to make informed decisions about where to focus their career development efforts. By comparing their performance in each trade, they can identify which skills are most developed and which areas might benefit from further training or experience.
              </p>
              <p className="text-lg leading-relaxed">
                This level of insight is invaluable for employees aiming to optimize their career paths and for employers looking to allocate resources effectively. It's a tool that truly aligns personal growth with organizational needs, ensuring that time and effort are invested where they can yield the greatest return.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg border border-[#365da4]/30">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#365da4] flex items-center justify-center text-white text-lg font-bold mr-3">M</div>
                  <div>
                    <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                    <p className="text-sm text-[#e9eae9]/60">Construction & Hospitality</p>
                  </div>
                </div>
                
                <div className="bg-[#181b20] rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium">Skill Proficiency</h4>
                    <div className="text-sm px-3 py-1 bg-[#f61f83]/20 text-[#f61f83] rounded-full">4+ Years</div>
                  </div>
                  
                  {/* Construction skills */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#f61f83] mr-2"></div>
                        <h5 className="text-sm font-medium">Construction</h5>
                      </div>
                      <span className="text-sm text-[#e9eae9]/60">84% overall</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Roofing</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#f61f83] h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Carpentry</span>
                          <span>82%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#f61f83] h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Concrete</span>
                          <span>76%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#f61f83] h-2 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hospitality skills */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#365da4] mr-2"></div>
                        <h5 className="text-sm font-medium">Hospitality</h5>
                      </div>
                      <span className="text-sm text-[#e9eae9]/60">79% overall</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Bartending</span>
                          <span>91%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#365da4] h-2 rounded-full" style={{ width: '91%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Food Preparation</span>
                          <span>74%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#365da4] h-2 rounded-full" style={{ width: '74%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Customer Service</span>
                          <span>88%</span>
                        </div>
                        <div className="w-full bg-[#1b2025] rounded-full h-2">
                          <div className="bg-[#365da4] h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-[#87c345] mr-2" />
                      <h5 className="text-sm font-medium">Recent Growth</h5>
                    </div>
                    <div className="text-2xl font-bold text-[#87c345]">+12.4%</div>
                    <p className="text-xs text-[#e9eae9]/60">Last 3 months</p>
                  </div>
                  
                  <div className="bg-[#181b20] p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Layers className="h-5 w-5 text-[#f61f83] mr-2" />
                      <h5 className="text-sm font-medium">Skills Count</h5>
                    </div>
                    <div className="text-2xl font-bold text-[#f61f83]">8</div>
                    <p className="text-xs text-[#e9eae9]/60">Across 2 trades</p>
                  </div>
                </div>
                
                <div className="bg-[#181b20] rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-5 w-5 text-[#5f3087] mr-2" />
                    <h5 className="text-sm font-medium">Recommended Focus</h5>
                  </div>
                  <p className="text-xs text-[#e9eae9]/80 mb-3">Based on market demand and your growth rate:</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#5f3087] mr-2"></div>
                      <span className="text-sm">Advanced Carpentry</span>
                    </div>
                    <button className="text-xs bg-[#5f3087]/20 text-[#5f3087] px-3 py-1 rounded-full">
                      Explore Training
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bringing It All Together Section */}
      <section id="conclusion" className="py-20 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Bringing It All Together</h2>
            <p className="text-lg leading-relaxed mb-8">
              These innovative tools are just a few examples of how R.E.I.G.N by Mindful Measures is transforming organizations across various sizes and industries. By leveraging our advanced analytics and data-driven solutions, companies are experiencing unprecedented enhancements in performance, culture, equity, and optimization.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              R.E.I.G.N is not just a toolset; it's a catalyst for creating more efficient, equitable, and thriving workplace environments. Whether it's through fostering team synergy, ensuring fair compensation, or optimizing project management, R.E.I.G.N is empowering organizations to reach new heights of success while upholding the values of diversity and inclusion.
            </p>
            
            <div className="flex flex-col items-center">
              <a 
                href="https://mindfulmeasuresinc.com" 
                className="px-8 py-4 bg-[#f61f83] hover:bg-[#f61f83]/80 text-white rounded-full font-medium transition-colors text-lg inline-flex items-center"
              >
                Transform Your Workplace Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-[#e9eae9]/60 mt-4">
                Schedule a demo to see how R.E.I.G.N can revolutionize your organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features;