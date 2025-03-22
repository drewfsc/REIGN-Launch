import React from 'react';
import { Facebook, Instagram, Twitter, Github, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 bg-[#365da4] skew-x-12 transform -translate-x-1"></div>
                <div className="absolute inset-0 bg-[#87c345] skew-x-12 transform translate-x-1 opacity-80"></div>
                <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-[#f61f83] rounded-r-full opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">R</div>
              </div>
              <span className="text-xl font-bold text-[#e9eae9]">Mindful Measures Inc.</span>
            </div>
            <p className="text-[#e9eae9]/70 mb-6 max-w-md">
              Making the workplace equitable and data-driven through innovative analytics and 
              real-time employee performance tracking.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[#e9eae9] font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#real-time-resume" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Real-Time Resume™</a></li>
              <li><a href="#team-management" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Team Management</a></li>
              <li><a href="#inequity-gap-finder" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Inequity Gap Finder</a></li>
              <li><a href="#project-management" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Project Management</a></li>
              <li><a href="#mobile-app" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#e9eae9] font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Submit Ticket</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Guides</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-[#e9eae9] font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="#about" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">About</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Press</a></li>
            </ul>

            <h3 className="text-[#e9eae9] font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e9eae9]/10 pt-8">
          {/* Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-[#e9eae9] font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-[#e9eae9]/60 mb-4">Stay updated with the latest in workplace equity analytics</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 bg-[#181b20] border border-[#e9eae9]/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#f61f83]"
                />
                <button className="bg-[#f61f83] hover:bg-[#f61f83]/80 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end justify-end">
              <p className="text-[#e9eae9]/60 mb-2">Download our app</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#181b20] hover:bg-[#181b20]/80 text-[#e9eae9] px-4 py-2 rounded-md flex items-center space-x-2 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 12v4"/><path d="M12 8h.01"/></svg>
                  <span>App Store</span>
                </a>
                <a href="#" className="bg-[#181b20] hover:bg-[#181b20]/80 text-[#e9eae9] px-4 py-2 rounded-md flex items-center space-x-2 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/><polyline points="14 2 14 8 20 8"/><path d="M10 12H4"/><path d="M4 12l3-3"/><path d="M4 12l3 3"/></svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#e9eae9]/10">
            <p className="text-[#e9eae9]/40 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mindful Measures Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#e9eae9]/40 hover:text-[#f61f83] text-sm transition-colors">Sitemap</a>
              <a href="#" className="text-[#e9eae9]/40 hover:text-[#f61f83] text-sm transition-colors">Accessibility</a>
              <a href="#" className="text-[#e9eae9]/40 hover:text-[#f61f83] text-sm transition-colors">Do Not Sell My Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;