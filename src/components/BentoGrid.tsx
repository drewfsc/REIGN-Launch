import React from 'react';
import { BarChart3, Users, Search, Shield } from 'lucide-react';

export default function BentoGrid() {
  return (
    <div className="bg-[#1b2025] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-[#f61f83]">Enterprise Solutions</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-[#e9eae9] sm:text-5xl">
          Everything you need for workplace equality
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-[#181b20] ring-1 ring-[#e9eae9]/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full">
              <div className="h-80 relative overflow-hidden">
                <img
                  alt="Analytics dashboard showing employee performance metrics"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  className="h-full w-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] to-transparent opacity-70"></div>
                <BarChart3 className="absolute bottom-6 right-6 h-16 w-16 text-[#f61f83] opacity-90" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#e9eae9]/60">REAL-TIME ANALYTICS</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#e9eae9]">Live Performance Monitoring</p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#e9eae9]/60">
                  Track employee performance with continuous analytics that update in real-time. Our system provides managers 
                  with instant insights into productivity, efficiency, and skill utilization across teams and departments, 
                  enabling rapid response to changing workplace dynamics.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-[#181b20] ring-1 ring-[#e9eae9]/15 lg:rounded-tr-[2rem] w-full">
              <div className="h-80 relative overflow-hidden">
                <img
                  alt="Team collaboration and analysis interface"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] to-transparent opacity-70"></div>
                <Users className="absolute bottom-6 right-6 h-12 w-12 text-[#365da4] opacity-90" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#e9eae9]/60">TEAM INSIGHTS</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#e9eae9]">Optimize Team Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#e9eae9]/60">
                  Build high-performing teams using comprehensive metrics that measure compatibility, skill complementarity, 
                  and historical collaboration success.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-[#181b20] ring-1 ring-[#e9eae9]/15 lg:rounded-bl-[2rem] w-full">
              <div className="h-80 relative overflow-hidden">
                <img
                  alt="Diversity and equity data visualization"
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] to-transparent opacity-70"></div>
                <Search className="absolute bottom-6 right-6 h-12 w-12 text-[#87c345] opacity-90" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#e9eae9]/60">EQUITY MONITORING</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#e9eae9]">Address Workplace Inequities</p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#e9eae9]/60">
                  Identify and resolve workplace disparities with powerful comparative analytics that detect patterns across 
                  demographics, departments, and time periods.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-[#181b20] ring-1 ring-[#e9eae9]/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full">
              <div className="h-80 relative overflow-hidden">
                <img
                  alt="Enterprise-grade security and data protection visualization"
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  className="h-full w-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] to-transparent opacity-70"></div>
                <Shield className="absolute bottom-6 right-6 h-16 w-16 text-[#5f3087] opacity-90" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#e9eae9]/60">DATA SECURITY</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#e9eae9]">Enterprise-Grade Protection</p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#e9eae9]/60">
                  Our platform employs industry-leading security protocols to safeguard sensitive employee data while 
                  maintaining transparency. With role-based access controls, end-to-end encryption, and compliance with 
                  global privacy regulations, your organization's information remains protected without compromising 
                  analytics capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}