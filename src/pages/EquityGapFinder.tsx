import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Plus, BarChart2, AlertTriangle, Mail, Download, Check, Trash2 } from 'lucide-react';
import Footer from '../components/Footer';
import employeeData from '../data/employeeData';

// Define types for our data
interface Employee {
  id: number;
  race: string;
  age: number;
  first_name: string;
  last_name: string;
  job_title: string;
  phone: string;
  salary: number;
  email: string;
  education_level: string;
  years_experience: number;
  avatar: string;
  ssn: string;
  trade_specialty: string;
  union_membership: boolean;
  address: string;
  work_location: string;
  city: string;
  state: string;
  zip: number;
  dob: string;
  wage: number;
  gender: string;
  trade: string;
  company: string;
}

interface DatasetSummary {
  id: string;
  description: string;
  ppi: number;
  performance: number;
  attendance: number;
  wage: number;
  groupSize: number;
}

const EquityGapFinder: React.FC = () => {
  // State for filters
  const [genderFilter, setGenderFilter] = useState<string>("All");
  const [raceFilter, setRaceFilter] = useState<string>("All");
  const [ageFilter, setAgeFilter] = useState<string>("All");
  const [tradeFilter, setTradeFilter] = useState<string>("All");
  
  // State for dropdown visibility
  const [ageDropdownOpen, setAgeDropdownOpen] = useState(false);
  
  // State for datasets in the comparison table
  const [datasets, setDatasets] = useState<DatasetSummary[]>([]);
  
  // State for email form
  const [emailFormOpen, setEmailFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [includeRecommendations, setIncludeRecommendations] = useState(true);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  
  // Extract unique values for filter options
  const uniqueGenders = Array.from(new Set(employeeData.map(emp => emp.gender)));
  const uniqueRaces = Array.from(new Set(employeeData.map(emp => emp.race)));
  const uniqueTrades = Array.from(new Set(employeeData.map(emp => emp.trade)));
  
  // Define age ranges
  const ageRanges = ["All", "18-25", "26-35", "36-45", "46-55", "56+"];
  
  // Filter the data based on current selections
  const getFilteredData = () => {
    return employeeData.filter(emp => {
      if (genderFilter !== "All" && emp.gender !== genderFilter) return false;
      if (raceFilter !== "All" && emp.race !== raceFilter) return false;
      if (tradeFilter !== "All" && emp.trade !== tradeFilter) return false;
      
      if (ageFilter !== "All") {
        const [min, max] = ageFilter.split("-").map(Number);
        if (max) {
          return emp.age >= min && emp.age <= max;
        } else {
          // Handle "56+" case
          return emp.age >= min;
        }
      }
      
      return true;
    });
  };
  
  // Calculate summary metrics for the filtered data
  const calculateMetrics = (data: Employee[]) => {
    if (!data.length) return null;
    
    const avgWage = data.reduce((sum, emp) => sum + emp.wage, 0) / data.length;
    const avgSalary = data.reduce((sum, emp) => sum + emp.salary, 0) / data.length;
    
    // Simulate PPI calculation (would be a more complex formula in real app)
    const ppi = (avgWage / 40 * data.reduce((sum, emp) => sum + emp.years_experience, 0) / data.length) / 10;
    
    // Simulate performance rating (would be based on real metrics in production)
    const performance = Math.min(9.8, 5 + (avgWage / 100) + (Math.random() * 2));
    
    // Simulate attendance percentage
    const attendance = 50 + Math.min(48, data.reduce((sum, emp) => sum + emp.years_experience, 0) / data.length * 2);
    
    return {
      ppi: parseFloat(ppi.toFixed(2)),
      performance: parseFloat(performance.toFixed(2)),
      attendance: parseFloat(attendance.toFixed(0)),
      wage: parseFloat(avgWage.toFixed(2)),
      groupSize: data.length
    };
  };
  
  // Add current dataset to the comparison table
  const addCurrentDataset = () => {
    const filteredData = getFilteredData();
    const metrics = calculateMetrics(filteredData);
    
    if (!metrics) {
      alert("No data matches your current filter criteria");
      return;
    }
    
    // Create a description based on the filters
    let description = "";
    if (genderFilter !== "All") description += genderFilter + ",";
    if (raceFilter !== "All") description += raceFilter + ",";
    if (ageFilter !== "All") description += ageFilter + ",";
    if (tradeFilter !== "All") description += tradeFilter;
    
    // Remove trailing comma if needed
    if (description.endsWith(",")) {
      description = description.slice(0, -1);
    }
    
    const newDataset: DatasetSummary = {
      id: `dataset-${Date.now()}`,
      description,
      ...metrics
    };
    
    setDatasets([...datasets, newDataset]);
  };
  
  // Clear all datasets from the comparison table
  const clearTable = () => {
    setDatasets([]);
  };

  // Remove a single dataset from the comparison table
  const removeDataset = (datasetId: string) => {
    setDatasets(datasets.filter(dataset => dataset.id !== datasetId));
  };

  // Handle saving results
  const handleSaveResults = () => {
    if (datasets.length === 0) {
      alert("No data to save. Please add datasets first.");
      return;
    }
    
    // In a real application, this would generate a PDF or CSV file
    // For this demo, we'll simulate downloading by showing an alert
    alert("Results saved! In a production environment, this would download a PDF or CSV file with your analysis.");
  };
  
  // Handle email submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (datasets.length === 0) {
      alert("No data to email. Please add datasets first.");
      return;
    }
    
    // Simulate email sending process
    setEmailLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setEmailLoading(false);
      setEmailSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setEmailSuccess(false);
        setEmailFormOpen(false);
      }, 3000);
    }, 1500);
  };
  
  // Demo initial data with some preset comparisons
  useEffect(() => {
    // Add some sample datasets for demonstration
    const initialDatasets: DatasetSummary[] = [
      {
        id: 'demo-1',
        description: 'Male,African-American,26-35,Residential Roofer',
        ppi: 4.74,
        performance: 4.61,
        attendance: 84,
        wage: 48.86,
        groupSize: 17
      },
      {
        id: 'demo-2',
        description: 'Male,Asian,26-35,Residential Roofer',
        ppi: 7.36,
        performance: 7.37,
        attendance: 52,
        wage: 80.80,
        groupSize: 18
      },
      {
        id: 'demo-3',
        description: 'Male,White,26-35,Residential Roofer',
        ppi: 8.80,
        performance: 6.71,
        attendance: 98,
        wage: 69.96,
        groupSize: 10
      },
      {
        id: 'demo-4',
        description: 'Male,Hispanic,26-35,Residential Roofer',
        ppi: 5.94,
        performance: 9.61,
        attendance: 60,
        wage: 33.83,
        groupSize: 15
      }
    ];
    
    setDatasets(initialDatasets);
  }, []);

  // Calculate maximum values for visual comparisons
  const maxValues = {
    ppi: Math.max(...datasets.map(d => d.ppi), 1),
    performance: Math.max(...datasets.map(d => d.performance), 1),
    attendance: 100, // Attendance is a percentage, max is 100
    wage: Math.max(...datasets.map(d => d.wage), 1)
  };
  
  return (
    <div className="min-h-screen bg-[#1b2025] text-[#e9eae9]">
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
              Inequity Gap Finder
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Analyze and identify potential workplace inequities across demographics to ensure fair treatment for all employees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#181b20]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1b2025] rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#f61f83]">Demographic Filters</h2>
              <p className="mb-6 text-[#e9eae9]/70">
                Select criteria to analyze specific demographic groups. You can add multiple datasets to compare different groups.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {/* Gender Filter */}
                <div>
                  <label className="block text-sm font-medium text-[#e9eae9]/70 mb-2">Gender</label>
                  <div className="relative">
                    <select 
                      value={genderFilter}
                      onChange={(e) => setGenderFilter(e.target.value)}
                      className="w-full bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-2 px-3 text-[#e9eae9] focus:outline-none focus:ring-2 focus:ring-[#f61f83]/50 appearance-none"
                    >
                      <option value="All">All</option>
                      {uniqueGenders.map(gender => (
                        <option key={gender} value={gender}>{gender}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#e9eae9]/50" />
                  </div>
                </div>
                
                {/* Race Filter */}
                <div>
                  <label className="block text-sm font-medium text-[#e9eae9]/70 mb-2">Race</label>
                  <div className="relative">
                    <select 
                      value={raceFilter}
                      onChange={(e) => setRaceFilter(e.target.value)}
                      className="w-full bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-2 px-3 text-[#e9eae9] focus:outline-none focus:ring-2 focus:ring-[#f61f83]/50 appearance-none"
                    >
                      <option value="All">All</option>
                      {uniqueRaces.map(race => (
                        <option key={race} value={race}>{race}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#e9eae9]/50" />
                  </div>
                </div>
                
                {/* Age Filter */}
                <div>
                  <label className="block text-sm font-medium text-[#e9eae9]/70 mb-2">Age Group</label>
                  <div className="relative">
                    <div 
                      className="w-full bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-2 px-3 text-[#e9eae9] flex justify-between items-center cursor-pointer"
                      onClick={() => setAgeDropdownOpen(!ageDropdownOpen)}
                    >
                      <span>{ageFilter}</span>
                      <ChevronDown className="h-4 w-4 text-[#e9eae9]/50" />
                    </div>
                    
                    {ageDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-1 z-10">
                        {ageRanges.map(range => (
                          <div 
                            key={range} 
                            className="px-3 py-2 hover:bg-[#365da4]/20 cursor-pointer flex items-center"
                            onClick={() => {
                              setAgeFilter(range);
                              setAgeDropdownOpen(false);
                            }}
                          >
                            {range === ageFilter && (
                              <span className="mr-2 text-[#f61f83]">✓</span>
                            )}
                            <span className={range === ageFilter ? "text-[#f61f83]" : ""}>{range}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Trade Filter */}
                <div>
                  <label className="block text-sm font-medium text-[#e9eae9]/70 mb-2">Trade</label>
                  <div className="relative">
                    <select 
                      value={tradeFilter}
                      onChange={(e) => setTradeFilter(e.target.value)}
                      className="w-full bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-2 px-3 text-[#e9eae9] focus:outline-none focus:ring-2 focus:ring-[#f61f83]/50 appearance-none"
                    >
                      <option value="All">All</option>
                      {uniqueTrades.map(trade => (
                        <option key={trade} value={trade}>{trade}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#e9eae9]/50" />
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={addCurrentDataset}
                  className="bg-[#f61f83] hover:bg-[#f61f83]/80 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add this dataset
                </button>
                
                <button 
                  onClick={clearTable}
                  className="bg-[#181b20] hover:bg-[#181b20]/80 border border-[#e9eae9]/30 text-[#e9eae9] px-4 py-2 rounded-md flex items-center"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear table
                </button>

                {datasets.length > 0 && (
                  <>
                    <button 
                      onClick={handleSaveResults}
                      className="bg-[#365da4] hover:bg-[#365da4]/80 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Save Results
                    </button>
                    
                    <button 
                      onClick={() => setEmailFormOpen(true)}
                      className="bg-[#87c345] hover:bg-[#87c345]/80 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Results
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {/* Email Form Modal */}
            {emailFormOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-[#1b2025] p-6 rounded-xl max-w-md w-full mx-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Email Results</h3>
                    <button 
                      onClick={() => setEmailFormOpen(false)}
                      className="text-[#e9eae9]/70 hover:text-[#e9eae9]"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {emailSuccess ? (
                    <div className="text-center py-8">
                      <div className="mx-auto h-12 w-12 bg-[#87c345]/20 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-6 w-6 text-[#87c345]" />
                      </div>
                      <p className="text-lg font-medium mb-2">Results sent successfully!</p>
                      <p className="text-[#e9eae9]/70">Check your inbox for the analysis report.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailSubmit}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-[#e9eae9]/70 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full bg-[#0d0d0d] border border-[#365da4]/30 rounded-md py-2 px-3 text-[#e9eae9] focus:outline-none focus:ring-2 focus:ring-[#f61f83]/50"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input 
                            type="checkbox"
                            checked={includeRecommendations}
                            onChange={(e) => setIncludeRecommendations(e.target.checked)}
                            className="h-4 w-4 rounded border-[#365da4]/30 bg-[#0d0d0d] text-[#f61f83] focus:ring-[#f61f83]/50"
                          />
                          <span className="ml-2 text-sm text-[#e9eae9]/70">Include recommendations and action items</span>
                        </label>
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={emailLoading}
                        className={`w-full ${emailLoading ? 'bg-[#87c345]/50' : 'bg-[#87c345] hover:bg-[#87c345]/80'} text-white px-4 py-3 rounded-md flex items-center justify-center`}
                      >
                        {emailLoading ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Analysis
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-[#e9eae9]/50 mt-4 text-center">
                        The report will be delivered as a PDF attachment to your email.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            )}
            
            {/* Comparison Table */}
            <div className="bg-[#1b2025] rounded-xl p-6 overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4">INEQUITY GAP FINDER</h2>
              
              {datasets.length > 0 ? (
                <div>
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="border-b border-[#e9eae9]/10">
                        <th className="text-left py-3 px-4 font-medium text-[#e9eae9]/70">Dataset</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">PPI</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">Performance</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">Attendance</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">Wage</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">Group Size</th>
                        <th className="text-center py-3 px-4 font-medium text-[#e9eae9]/70">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets.map((dataset, index) => (
                        <tr key={dataset.id} className="border-b border-[#e9eae9]/10">
                          <td className="py-4 px-4">{dataset.description}</td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col items-center">
                              <span className="mb-1">{dataset.ppi.toFixed(2)}</span>
                              <div className="w-full bg-[#0d0d0d] rounded-full h-2">
                                <div 
                                  className="bg-[#f61f83] h-2 rounded-full" 
                                  style={{ width: `${(dataset.ppi / maxValues.ppi) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col items-center">
                              <span className="mb-1">{dataset.performance.toFixed(2)}</span>
                              <div className="w-full bg-[#0d0d0d] rounded-full h-2">
                                <div 
                                  className="bg-[#365da4] h-2 rounded-full" 
                                  style={{ width: `${(dataset.performance / maxValues.performance) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col items-center">
                              <span className="mb-1">{dataset.attendance}%</span>
                              <div className="w-full bg-[#0d0d0d] rounded-full h-2">
                                <div 
                                  className="bg-[#87c345] h-2 rounded-full" 
                                  style={{ width: `${(dataset.attendance / maxValues.attendance) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col items-center">
                              <span className="mb-1">${dataset.wage.toFixed(2)}</span>
                              <div className="w-full bg-[#0d0d0d] rounded-full h-2">
                                <div 
                                  className="bg-[#5f3087] h-2 rounded-full" 
                                  style={{ width: `${(dataset.wage / maxValues.wage) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">{dataset.groupSize}</td>
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() => removeDataset(dataset.id)}
                              className="p-2 rounded-full bg-[#181b20] hover:bg-[#f61f83]/10 text-[#e9eae9]/60 hover:text-[#f61f83] transition-colors"
                              aria-label="Remove dataset"
                              title="Remove this dataset"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Gap Analysis Section */}
                  {datasets.length >= 2 && (
                    <div className="mt-8 p-6 bg-[#0d0d0d] rounded-lg border border-[#f61f83]/20">
                      <div className="flex items-start mb-4">
                        <BarChart2 className="h-6 w-6 text-[#f61f83] mr-3 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">Gap Analysis</h3>
                          <p className="text-[#e9eae9]/70 mb-4">
                            Analysis of the equity gaps between the selected demographic groups.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Wage Gap Analysis */}
                        <div className="bg-[#181b20] p-4 rounded-lg">
                          <h4 className="text-lg font-medium mb-3 flex items-center">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                            Wage Disparity
                          </h4>
                          
                          {(() => {
                            const highestWage = Math.max(...datasets.map(d => d.wage));
                            const lowestWage = Math.min(...datasets.map(d => d.wage));
                            const disparity = ((highestWage - lowestWage) / lowestWage * 100).toFixed(1);
                            
                            const highestGroup = datasets.find(d => d.wage === highestWage)?.description;
                            const lowestGroup = datasets.find(d => d.wage === lowestWage)?.description;
                            
                            return (
                              <div>
                                <div className="flex justify-between mb-2">
                                  <span className="text-[#e9eae9]/70">Gap Percentage:</span>
                                  <span className="font-bold text-amber-500">{disparity}%</span>
                                </div>
                                <div className="text-sm text-[#e9eae9]/70 mb-3">
                                  A ${(highestWage - lowestWage).toFixed(2)} hourly wage gap exists between demographic groups.
                                </div>
                                <div className="p-3 bg-[#f61f83]/10 border border-[#f61f83]/20 rounded text-sm">
                                  <p className="mb-1">Highest Wage: <span className="font-medium">${highestWage.toFixed(2)}</span> ({highestGroup})</p>
                                  <p>Lowest Wage: <span className="font-medium">${lowestWage.toFixed(2)}</span> ({lowestGroup})</p>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                        
                        {/* Performance Gap Analysis */}
                        <div className="bg-[#181b20] p-4 rounded-lg">
                          <h4 className="text-lg font-medium mb-3 flex items-center">
                            <AlertTriangle className="h-4 w-4 text-[#365da4] mr-2" />
                            Performance vs. Compensation
                          </h4>
                          
                          {(() => {
                            // Calculate performance to wage ratios
                            const ratios = datasets.map(d => ({
                              description: d.description,
                              ratio: d.performance / d.wage,
                              performance: d.performance,
                              wage: d.wage
                            }));
                            
                            const highestRatio = Math.max(...ratios.map(r => r.ratio));
                            const lowestRatio = Math.min(...ratios.map(r => r.ratio));
                            
                            const highestGroup = ratios.find(r => r.ratio === highestRatio);
                            const lowestGroup = ratios.find(r => r.ratio === lowestRatio);
                            
                            const disparity = ((highestRatio - lowestRatio) / lowestRatio * 100).toFixed(1);
                            
                            return (
                              <div>
                                <div className="flex justify-between mb-2">
                                  <span className="text-[#e9eae9]/70">Equity Index:</span>
                                  <span className="font-bold text-[#365da4]">{disparity}%</span>
                                </div>
                                <div className="text-sm text-[#e9eae9]/70 mb-3">
                                  Measures how fairly performance is compensated across demographic groups.
                                </div>
                                <div className="p-3 bg-[#365da4]/10 border border-[#365da4]/20 rounded text-sm">
                                  <p className="mb-1">
                                    <span className="font-medium">{highestGroup?.description}</span> performs at {highestGroup?.performance.toFixed(2)} but earns ${highestGroup?.wage.toFixed(2)}/hr
                                  </p>
                                  <p>
                                    <span className="font-medium">{lowestGroup?.description}</span> performs at {lowestGroup?.performance.toFixed(2)} but earns ${lowestGroup?.wage.toFixed(2)}/hr
                                  </p>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-[#181b20] rounded-lg">
                        <h4 className="font-medium mb-3">Recommendations</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-[#f61f83]/20 flex items-center justify-center text-[#f61f83] mr-2 mt-0.5">1</div>
                            <span>Review wage structures for demographic groups showing significant disparities.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-[#f61f83]/20 flex items-center justify-center text-[#f61f83] mr-2 mt-0.5">2</div>
                            <span>Implement transparent performance-based compensation metrics across all groups.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-[#f61f83]/20 flex items-center justify-center text-[#f61f83] mr-2 mt-0.5">3</div>
                            <span>Consider focused mentorship and development programs for underrepresented groups.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-[#e9eae9]/50">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#181b20] mb-4">
                    <BarChart2 className="h-8 w-8 text-[#e9eae9]/30" />
                  </div>
                  <p className="text-lg">No datasets added. Use the filters above to create comparison groups.</p>
                  <p className="text-sm mt-2 text-[#e9eae9]/30">Select demographic filters and click "Add this dataset" to begin analysis.</p>
                </div>
              )}
            </div>
            
            {/* Tool Description */}
            <div className="mt-12 bg-[#1b2025] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">About the Inequity Gap Finder</h2>
              <p className="mb-4 text-[#e9eae9]/70">
                The Inequity Gap Finder is designed to help identify and analyze potential wage and performance disparities across different demographic groups within your organization. This powerful tool enables you to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#f61f83] flex items-center justify-center text-white mr-3 mt-0.5">1</div>
                  <div>
                    <strong className="block text-[#e9eae9]">Identify Patterns</strong>
                    <span className="text-[#e9eae9]/70">Visualize compensation trends across different demographics to spot potential inequities.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#365da4] flex items-center justify-center text-white mr-3 mt-0.5">2</div>
                  <div>
                    <strong className="block text-[#e9eae9]">Compare Performance</strong>
                    <span className="text-[#e9eae9]/70">Evaluate if compensation aligns with performance metrics across all groups.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#87c345] flex items-center justify-center text-white mr-3 mt-0.5">3</div>
                  <div>
                    <strong className="block text-[#e9eae9]">Create Data-Driven Solutions</strong>
                    <span className="text-[#e9eae9]/70">Use concrete data to develop targeted interventions for addressing workplace inequities.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#5f3087] flex items-center justify-center text-white mr-3 mt-0.5">4</div>
                  <div>
                    <strong className="block text-[#e9eae9]">Share and Collaborate</strong>
                    <span className="text-[#e9eae9]/70">Save and email your analysis to stakeholders for collaborative decision-making and action planning.</span>
                  </div>
                </li>
              </ul>
              <p className="text-[#e9eae9]/70">
                By using this tool regularly, organizations can track their progress toward creating a more equitable workplace where all employees are fairly compensated and have equal opportunities for advancement.
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

export default EquityGapFinder;