'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, 
  Code2, 
  BarChart3, 
  TrendingUp, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink,
  ArrowDown,
  Sparkles,
  Brain,
  LineChart,
  PieChart,
  Activity,
  Award,
  X,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  Zap,
  CheckCircle,
  Globe,
  MapPin,
  Download,
  Sun,
  Moon
} from 'lucide-react'

// Resume Data
const resumeData = {
  name: "Prince",
  title: "Data Analyst",
  summary: "I transform complex  datasets into meaningful insights using SQL, Python,Excel,and Power BI. Experienced in data cleaning, exploratory data analysis (EDA), and building interactive dashborads to support  data-driven decision-making.",
  contact: {
    phone: "+91-9528477344",
    email: "princegoswami505@gmail.com",
    linkedin: "www.linkedin.com/in/prince-kumar-08b321258/"
  },
  skills: {
    programming: ["SQL", "Python."],
    visualization: ["Advanced MS Excel", "Power BI", "Tableau"],
    analytical: ["Data Cleaning", "EDA", "Insight Generation", "Descriptive Statistics"]
  },
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Ducat (Training & Internship Program)",
      period: "June 2025 – August 2025",
      highlights: [
        "Completed hands-on training in SQL, Python, and Power BI",
        "Built interactive Power BI dashboards using DAX",
        "Performed EDA and data cleaning on real-world datasets",
        "Developed KPI-based reports for business insights"
      ]
    },
    {
      role: "AI & Data Analytics Intern",
      company: "IBM Virtual Internship Program",
      period: "2025",
      highlights: [
        "Learned AI fundamentals and data analytics workflow",
        "Applied SQL and Python for data analysis",
        "Created dashboards for data visualization"
      ]
    }
  ],
  projects: [
    {
      name: "Covid-19 Data Insights",
      tech: "Power BI, Python, SQL",
      period: "2025",
      description: "Interactive dashboard analyzing global pandemic trends, mortality rates, and recovery statistics across countries with real-time data visualization.",
      image: "/Covid-19.png"
    },
    {
      name: "Olympic Sports Dashboard",
      tech: "Power BI, Excel",
      period: "2025",
      description: "Comprehensive analysis of Olympic performance data, medal tallies, athlete statistics, and country-wise comparisons across multiple games.",
      image: "/Olympic Sports Dashboard.png"
    },
    {
      name: "Sachin Tendulkar Test Records",
      tech: "Power BI, Python",
      period: "2025",
      description: "Detailed statistical analysis of cricket legend Sachin Tendulkar's test career, innings breakdown, and milestone achievements visualization.",
      image: "/Sachin Test Dashboard.png"
    },
    {
      name: "IPL Cricket Analytics",
      tech: "Power BI, SQL, Excel",
      period: "2025",
      description: "Dynamic IPL dashboard showcasing team performance, player statistics, run rates, and season-wise comparisons with interactive filters.",
      image: "/IPL project.png"
    },
    {
      name: "Credit Card User Churn Prediction",
      tech: "Python, SQL, Machine Learning",
      period: "2025",
      description: "Predictive analytics model identifying credit card customer churn patterns using machine learning algorithms to improve retention strategies.",
      image: "/credit.png"
    }
  ],
  certifications: [
    { 
      name: "Web Designing (HTML/CSS)", 
      org: "TechnolEdge Eduresearch Pvt. Ltd. (Centre of Excellence)", 
      image: "/web desingning.png",
      period: "September 2022 – January 2023",
      description: "Completed a 4-month certified training program in Web Designing at Moradabad Institute of Technology. Built strong foundations in HTML5, CSS3, responsive layouts, and structured webpage development. This training enhanced my understanding of frontend development, which supports creating and presenting interactive dashboards and data visualization projects effectively."
    },
    { name: "LLM for Young Developers – Foundational Course", org: "NASSCOM FutureSkills Prime | IND/AI (in collaboration with Meta)", image: "/Indianai.png", period: "February 2026", description: "Completed foundational training in Large Language Models (LLMs), covering AI fundamentals, prompt engineering concepts, and real-world applications of generative AI. Enhanced my ability to integrate AI tools for data analysis, automation, and intelligent insights generation." },
    { name: "Digital 101 Journey", org: "NASSCOM FutureSkills Prime | AICTE", image: "/Itnasscom.png", period: "December 2023", description: "Completed a foundational program on digital transformation, emerging technologies, and industry-ready skills. Strengthened my understanding of AI, data, and modern digital tools relevant to a Data Analyst role." },
    { name: "Career Guidance Session", org: "E-Cell IIT Hyderabad | GradGuru", image: "/Participation.png", period: "August 2025", description: "Participated in a career guidance session focused on industry trends, skill development, and career planning. Gained insights into professional growth and emerging opportunities in the tech domain." },
    { name: "Data Analytics Intern", org: "S O Infotech (P) Ltd.", image: "/S O Infotech (P) LTD.png", period: "June 2025 – August 2025", description: "Completed a project titled 'IPL Dashboard' using Data Analytics tools under the guidance of the Technical Head. Contributed to data analysis, dashboard development, and team collaboration. Successfully delivered the project with satisfactory performance." },
    { name: "AI Virtual Internship (PBEL)", org: "IBM Developer Skills Network (IBMMooc)", image: "/IBM .png", period: "2025", description: "Successfully completed an AI-focused virtual internship equivalent program, gaining practical exposure to Artificial Intelligence concepts, problem-solving approaches, and real-world industry applications." }
  ],
  education: {
    degree: "Bachelor of Technology(B-Tech)",
    college: "Moradabad Institute of Technology",
    year: "2022-2026"
  }
}

// Animated background shapes
function AnimatedBackground() {
  return (
    <>
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />
      <div className="floating-shape shape-4" />
      <div className="floating-shape shape-5" />
      {/* Colorful orbs - 6 beautiful gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="orb orb-5" />
      <div className="orb orb-6" />
    </>
  )
}

// Particle effect
function Particles() {
  const particles = Array.from({ length: 50 })
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: '110%',
            opacity: 0 
          }}
          animate={{ 
            y: -20,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            background: `hsl(${Math.random() * 60 + 280}, 80%, 60%)`
          }}
        />
      ))}
    </div>
  )
}

// Navigation
function Navigation({ theme, setTheme }: { theme: string, setTheme: (theme: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? (theme === 'dark' ? 'bg-dark/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md shadow-lg') : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/namelogo.png" 
              alt="PK Logo" 
              className="h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            {/* Download Resume Button in Nav */}
            <a 
              href="/Prince kumar resume.pdf" 
              download="Prince_Kumar_Resume.pdf"
              className={`px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ${theme === 'dark' ? 'bg-gradient-to-r from-vibrant-pink to-vibrant-purple text-white hover:opacity-90' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:scale-110 transition-all`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} md:hidden`}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button
              className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile Resume Download */}
              <a 
                href="/Prince kumar resume.pdf" 
                download="Prince_Kumar_Resume.pdf"
                className={`block py-2 mt-2 ${theme === 'dark' ? 'text-vibrant-pink font-semibold' : 'text-blue-500 font-semibold'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Hero Section
function Hero({ theme }: { theme: string }) {
  return (
    <section id="home" className="min-h-[calc(100vh-60px)] md:min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Simplified background for mobile */}
      {theme === 'dark' && <div className="hidden md:block"><AnimatedBackground /></div>}
      {theme === 'dark' && <div className="hidden md:block"><Particles /></div>}
      
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]' : 'bg-[radial-gradient(circle_at_center,transparent_0%,#f1f5f9_70%)]'}`} />
      
      <motion.div 
        className="relative z-10 px-6 max-w-6xl mx-auto w-full overflow-visible"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)] md:min-h-screen py-8 md:py-24">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-gray-200'}`}
            >
              <Sparkles className={`w-4 h-4 ${theme === 'dark' ? 'text-gradient-sunset' : 'text-orange-500'}`} />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800 font-medium'}`}>Available for opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
              <span className={`block mt-2 ${theme === 'dark' ? 'text-gradient-sunset' : 'text-blue-600'}`}>{resumeData.name}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg md:text-2xl mb-5 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
            >
              {resumeData.title} | Helping Businesses Make Data-Driven Decisions <span className="text-primary"></span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`mb-6 max-w-lg font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
            >
              {resumeData.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full font-semibold hover:opacity-90 transition-opacity glow-rainbow">
                Get In Touch
              </a>
              <a href="#projects" className={`px-8 py-3 border rounded-full font-semibold transition-colors ${theme === 'dark' ? 'border-vibrant-cyan text-vibrant-cyan hover:bg-vibrant-cyan/10' : 'border-blue-500 text-blue-600 hover:bg-blue-50'}`}>
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
            className="flex justify-center mt-6 md:mt-0"
          >
            <div className="relative">
              {/* Simplified glow for mobile */}
              <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${theme === 'dark' ? 'bg-gradient-to-br from-vibrant-pink via-vibrant-purple to-vibrant-cyan animate-pulse' : 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500'}`} />
              <div className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} glow-rainbow`}>
                <img 
                  src="/photo.jpeg" 
                  alt={resumeData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Skills Section - Simple & Clean with Competencies
function Skills({ theme }: { theme: string }) {
  const [selectedService, setSelectedService] = useState<{emoji: string, title: string, description: string, details: string} | null>(null);

  const skillsData = [
    { name: 'Python', image: '/Python.png' },
    { name: 'SQL', image: '/Sql.png' },
    { name: 'MS Excel', image: '/excel.png' },
    { name: 'Power BI', image: '/Power bi.jpg' },
    { name: 'Tableau', image: '/Tableau.jpg' },
    { name: 'Statistics', image: '/statistics.jpg' },
    { name: 'Machine Learning', image: '/ml.jpg' },
  ]

  const competencies = [
    { 
      emoji: '📊', 
      title: 'Data Analysis', 
      description: 'EDA, data cleaning, KPI evaluation, and trend analysis for data-driven decisions.',
      details: 'Tools: Python (Pandas, NumPy), Excel, Power BI\n\nKey Expertise:\n• Advanced Exploratory Data Analysis (EDA)\n• Data Cleaning & Preprocessing\n• KPI & Metric Development\n• Trend & Variance Analysis\n• Business Insight Generation\n\nImpact: Convert complex datasets into meaningful insights that support strategic decision-making.'
    },
    { 
      emoji: '📈', 
      title: 'Dashboard Development', 
      description: 'Interactive Power BI dashboards using DAX, data modeling, and business metrics.',
      details: 'Tools: Power BI, DAX, Excel\n\nKey Expertise:\n• Data Modeling (Star Schema, Relationships)\n• Advanced DAX Measures\n• Drill-through & Interactive Visuals\n• Performance Monitoring Dashboards\n\nImpact: Build dashboards that simplify complex data and enable stakeholders to track KPIs in real time.'
    },
    { 
      emoji: '🗄', 
      title: 'Data Querying', 
      description: 'Optimized SQL queries for data extraction and transformation.',
      details: 'Tools: MySQL / SQL\n\nKey Expertise:\n• Complex Joins & Subqueries\n• Aggregations & Window Functions\n• Data Cleaning via SQL\n• Query Optimization\n\nImpact: Ensure accurate data extraction and transformation to support reporting and business intelligence.'
    },
    { 
      emoji: '🤖', 
      title: 'Predictive Basics', 
      description: 'Basic regression and classification techniques for insights.',
      details: 'Tools: Python (Scikit-Learn), Excel\n\nKey Expertise:\n• Linear & Logistic Regression\n• Basic Classification Models\n• Model Evaluation Metrics\n• Forecasting Techniques\n\nImpact: Leverage foundational ML techniques to uncover trends and predict future outcomes.'
    }
  ]

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-400'}`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-400'}`} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Technical <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>Skills</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Expert in transforming complex data into actionable insights
          </p>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-500 to-purple-500' : 'from-blue-500 to-indigo-500'}`} />
        </motion.div>

        {/* Skills Grid - Enhanced with glassmorphism */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`group relative p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                  : 'bg-white/70 border-gray-200/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
              }`}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${theme === 'dark' ? 'from-cyan-500/10 to-purple-500/10' : 'from-blue-500/10 to-indigo-500/10'}`} />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-16 h-16 md:w-18 md:h-18 mb-3 rounded-xl overflow-hidden flex items-center justify-center shadow-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <span className={`font-semibold text-sm text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-gray-700'} ${theme === 'dark' ? 'group-hover:from-cyan-400 group-hover:to-purple-400' : 'group-hover:from-blue-600 group-hover:to-indigo-600'}`}>
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies - Enhanced with gradient cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Core <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>Competencies</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => setSelectedService(item)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gray-800/60 border-gray-700/50 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]' 
                    : 'bg-white/80 border-gray-200/50 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]'
                }`}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${theme === 'dark' ? 'from-purple-500/10 via-cyan-500/10 to-blue-500/10' : 'from-indigo-500/10 via-blue-500/10 to-cyan-500/10'}`} />
                
                {/* Floating icon */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-purple-500 group-hover:to-cyan-500' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-indigo-500 group-hover:to-blue-500'
                  }`}>
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  
                  <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400' : 'text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-blue-600'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  
                  {/* Learn more indicator - hidden on mobile */}
                  <div className={`mt-4 hidden md:flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detail Modal - Enhanced */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.7, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-lg p-8 rounded-3xl shadow-2xl border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal decorative elements */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-500'}`} />
              <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30 ${theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500'}`} />
              <button
                onClick={() => setSelectedService(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all hover:rotate-90 ${
                  theme === 'dark' ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-200 text-gray-800'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${theme === 'dark' ? 'from-purple-500 to-cyan-500' : 'from-indigo-500 to-blue-500'}`}
                >
                  <span className="text-4xl">{selectedService.emoji}</span>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {selectedService.title}
                </h3>
                <p className={`text-base mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedService.description}
                </p>
                {selectedService.details && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`p-6 rounded-2xl text-left ${
                      theme === 'dark' 
                        ? 'bg-gray-700/50 border border-gray-600/30' 
                        : 'bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <p className={`text-sm leading-relaxed whitespace-pre-line ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedService.details}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Experience Section
function Experience({ theme }: { theme: string }) {
  return (
    <section id="experience" className={`min-h-auto md:min-h-screen py-20 md:py-32 relative ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
            <span className="text-gradient-ocean">Work Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform border border-vibrant-purple/20 ${theme === 'dark' ? '' : 'bg-white shadow-lg'}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-purple/20 to-transparent rounded-full blur-2xl ${theme === 'dark' ? '' : 'opacity-50'}`} />
              
              <div className="relative z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${theme === 'dark' ? 'from-vibrant-purple/20 to-vibrant-pink/20 text-vibrant-pink' : 'from-purple-100 to-pink-100 text-purple-600'} mb-3`}>
                    {exp.period}
                  </span>
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{exp.role}</h3>
                  <p className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-vibrant-cyan' : 'text-blue-600'}`}>{exp.company}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${theme === 'dark' ? 'text-vibrant-purple' : 'text-purple-500'}`} />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function Projects({ theme, selectedCert, setSelectedCert }: { theme: string, selectedCert: string | null, setSelectedCert: (cert: string | null) => void }) {
  return (
    <section id="projects" className={`min-h-auto md:min-h-screen py-20 md:py-32 relative ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Header Design */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500" />
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30">
              <span className="text-sm font-medium text-orange-400">Portfolio</span>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
            <span className="text-gradient-sunset">Featured Projects</span>
          </h2>
          <p className={`max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
            Showcasing my data analytics and visualization work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-6xl mx-auto">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Multi-color gradient glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500" />
              
              {/* Card */}
              <div 
                className={`relative rounded-2xl overflow-hidden cursor-pointer h-full ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                onClick={() => project.image && setSelectedCert(project.image)}
              >
                {/* Top decorative bar */}
                <div className="h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600" />
                
                {project.image && (
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Project badge */}
                    <div className="absolute top-3 right-3 z-20 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                      <span className="text-xs font-medium text-white">Project</span>
                    </div>
                  </div>
                )}
                
                <div className="p-4">
                  {/* Icon and Period */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-gradient-to-br from-orange-400 to-pink-500' : 'bg-gradient-to-br from-purple-500 to-indigo-500'
                    }`}>
                      <LineChart className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                      {project.period}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {project.name}
                  </h3>
                  <p className={`text-sm mb-3 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs rounded-full border font-medium ${theme === 'dark' ? 'bg-white/5 text-gray-300 border-white/10' : 'bg-gray-100 text-gray-700 border-gray-200'} group-hover:border-orange-500/30 transition-colors`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project button */}
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section - High Level Sexy Design
function Education({ theme, selectedCert, setSelectedCert }: { theme: string, selectedCert: string | null, setSelectedCert: (cert: string | null) => void }) {
  const educationData = {
    degree: "Bachelor of Technology",
    college: "Moradabad Institute of Technology",
    year: "2022-2026",
    type: "Undergraduate",
  }

  return (
    <section id="education" className={`min-h-auto md:min-h-screen py-16 md:py-20 relative overflow-hidden ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
      {/* Background Effects */}
      {theme === 'dark' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-vibrant-purple/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-vibrant-pink/20 to-transparent rounded-full blur-3xl" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-3"
          >
            <GraduationCap className="w-3 h-3 text-vibrant-purple" />
            <span className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Academic Journey</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
            <span className={theme === 'dark' ? 'text-gradient' : 'text-blue-600'}>Education</span> & Certifications
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Building a strong foundation for data-driven decision making
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="relative mb-8"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-cyan rounded-2xl p-0.5">
            <div className="absolute inset-0 bg-dark rounded-2xl" />
          </div>
          
          <div className="relative bg-dark/90 backdrop-blur-xl rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Left - Icon */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="md:col-span-3 flex justify-center"
              >
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple to-vibrant-pink rounded-2xl blur-xl opacity-50 animate-pulse" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-vibrant-purple to-vibrant-pink flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Center - Details */}
              <div className="md:col-span-6 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-vibrant-purple/20 to-vibrant-pink/20 text-vibrant-purple text-xs font-medium mb-3 border border-vibrant-purple/20">
                    {educationData.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {educationData.degree}
                  </h3>
                  <p className="text-vibrant-cyan font-medium text-lg mb-1">{educationData.college}</p>
                  <p className="text-gray-500 text-sm">{educationData.year}</p>
                </motion.div>
              </div>

              {/* Right - Stats */}
              <div className="md:col-span-3 flex md:flex-col items-center justify-center gap-4 md:gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring' }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-cyan">
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-vibrant-purple/10 to-transparent rounded-full blur-xl" />
          </div>
        </motion.div>

        {/* Certifications - Horizontal Scroll/Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`h-px w-16 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'to-cyan-500' : 'to-gray-400'}`} />
            <h3 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span className={`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center ${theme === 'dark' ? 'from-cyan-500 to-blue-600' : 'from-blue-500 to-indigo-600'}`}>
                <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Professional Certifications
            </h3>
            <div className={`h-px w-16 bg-gradient-to-l from-transparent ${theme === 'dark' ? 'to-purple-500' : 'to-gray-400'}`} />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Multi-color gradient glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 ${theme === 'dark' ? '' : 'opacity-30'}`} />
                
                {/* Card */}
                <div 
                  className={`relative rounded-2xl overflow-hidden cursor-pointer h-full ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                  onClick={() => cert.image && setSelectedCert(cert.image)}
                >
                  {/* Top decorative bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 via-blue-500 to-purple-600' : 'from-blue-400 via-indigo-500 to-purple-500'}`} />
                  
                  {/* Certification Image */}
                  {cert.image && (
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className={`absolute top-3 right-3 z-20 backdrop-blur-md px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}>
                        <span className={`text-xs font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Cert</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-4">
                    {/* Organization badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:text-cyan-300' : 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-600 group-hover:text-blue-700'} transition-colors`}>
                        {cert.org.length > 30 ? cert.org.substring(0, 30) + '...' : cert.org}
                      </span>
                    </div>
                    
                    <h4 className={`font-bold text-base mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {cert.name}
                    </h4>
                    
                    {/* Period with icon */}
                    {cert.period && (
                      <div className={`flex items-center gap-1.5 text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {cert.period}
                      </div>
                    )}
                    
                    {/* Description */}
                    {cert.description && (
                      <p className={`text-sm leading-relaxed line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {cert.description}
                      </p>
                    )}
                    
                    {/* View Certificate button */}
                    <div className={`mt-3 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-vibrant-pink to-vibrant-purple"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact({ theme }: { theme: string }) {
  return (
    <section id="contact" className={`min-h-auto md:min-h-screen py-20 md:py-32 relative ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
            <span className="text-gradient-ocean">Get In Touch</span>
          </h2>
          <p className={`max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href={`tel:${resumeData.contact.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-6 flex items-center gap-4 hover:border-vibrant-cyan transition-colors ${theme === 'dark' ? '' : 'bg-white shadow-lg'}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-vibrant-cyan to-blue-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{resumeData.contact.phone}</p>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${resumeData.contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`glass rounded-2xl p-6 flex items-center gap-4 hover:border-vibrant-purple transition-colors ${theme === 'dark' ? '' : 'bg-white shadow-lg'}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-vibrant-purple to-pink-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{resumeData.contact.email}</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass rounded-2xl p-8 text-center ${theme === 'dark' ? '' : 'bg-white shadow-lg'}`}
          >
            <motion.a
              href={`https://${resumeData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block cursor-pointer"
            >
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>LinkedIn</h3>
              <div className="flex justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 glass-cyan rounded-full flex items-center justify-center hover:bg-vibrant-cyan/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-vibrant-cyan" />
                </motion.div>
              </div>
            </motion.a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <a 
              href="/Prince kumar resume.pdf" 
              download="Prince_Kumar_Resume.pdf"
              className={`px-8 py-4 bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full font-semibold hover:opacity-90 transition-opacity glow-rainbow flex items-center gap-3 text-white`}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500"
        >
          <p>© 2025 {resumeData.name}. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  )
}

// Main Page Component
export default function Home() {
  const [theme, setTheme] = useState('dark')
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <main className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} min-h-screen relative transition-colors duration-500`}>
      <div className={theme === 'dark' ? 'bg-orbs' : ''}>
        <AnimatedBackground />
      </div>
      <Navigation theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} selectedCert={selectedCert} setSelectedCert={setSelectedCert} />
      <Education theme={theme} selectedCert={selectedCert} setSelectedCert={setSelectedCert} />
      <Contact theme={theme} />
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
