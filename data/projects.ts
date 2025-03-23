export interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
}

export type ProjectCategory = "Software Development" | "Data Analytics / Machine Learning" | "AI / Gen - AI" | "Devops / Cloud"

export interface Projects {
  [key: string]: Project[]
}

export const categories: ProjectCategory[] = [
  "Software Development",
  "Data Analytics / Machine Learning",
  "AI / Gen - AI",
  "Devops / Cloud"
]

export const projects: Projects = {
  "Software Development": [
    {
      id: 1,
      title: "Next Enti",
      shortDescription: "A personalized career advisor web-app enhanced by AI",
      description: "A modern web application for managing and tracking daily tasks and activities.",
      image: "/logo white.png",
      tags: ["React","LLM", "Python", "Flask", "Firebase", "MUI", "Open AI","Postman"],
      features: [
        "Inventory management system",
        "Real-time stock tracking",
        "Secure payment processing",
        "Order management dashboard",
        "Customer analytics",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Sushiman",
      shortDescription: "SushiMan is a responsive and visually engaging website showcasing a menu of Japanese food, built with modern web technologies for optimal user interaction and design.",
      description: "A Japanese restaurant website showcasing menu items and online ordering.",
      image: "/1.png",
      tags: ["CSS Variables", "Importing CSS Files", "Flex and Position Properties", "Rendering HTML through JavaScript", "Smooth Animations", "BEM Method", "Responsive Design"],
      features: [
        "Navigation Bar",
        "Creative Hero Section",
        "About Us Section",
        "Popular Food, Trending Sushi, Drinks Sections",
        "Newsletter Signup and Footer",
      ],
      demoLink: "https://github.com/SatyaJaidev/Html-and-css-Website",
      githubLink: "https://github.com/SatyaJaidev/Html-and-css-Website",
    },
    {
      id: 4,
      title: "Salesforce",
      shortDescription: "Salesforce API integration project demonstrates CSV report extraction and object model parsing in Python.",
      description: "A CRM solution for managing customer relationships and business processes.",
      image: "/salesforce.jpg",
      tags: ["Salesforce", "Project Management", "Custom Objects", "Screen Flow"],
      features: [        "Creation of projects from templates",
        "Dynamic task generation from templates",
        "Screen flow for streamlined project setup",
        "Permissions management for security"],
      demoLink: "https://github.com/SatyaJaidev/salesforce",
      githubLink: "https://github.com/SatyaJaidev/salesforce",
    },
  ],
  "Data Analytics / Machine Learning": [
    {
      id: 5,
      title: "Budget Analysis",
      shortDescription: "Data Analysis project generating reports from CSV files using Generative AI with LangChain, Llama, and Groq.",
      description: "Data Analysis project generating reports from CSV files using Generative AI with LangChain, Llama, and Groq.",
      image: "/analysis.png",
      tags: ["Generative AI", "LangChain", "Groq API", "Python", "Power BI"],
      features: [    "Generative AI for report generation",
        "Integration with LangChain and Groq API",
        "Efficient data parsing from CSV",
        "Interactive visualizations",
        "Custom analytics",
        "Data export",
  "Interactive dashboards and reports in Power BI"
      ],
      demoLink: "https://github.com/SatyaJaidev/Data-Analysis",
      githubLink: "https://github.com/SatyaJaidev/Data-Analysis",
    },
    {
      id: 6,
      title: "Web Scraping",
      shortDescription: "Web scraping project focused on analyzing sales data using Python and SQL with visualization in Power BI.",
      description: "Web scraping project focused on analyzing sales data using Python and SQL with visualization in Power BI.",
      image: "/web.png",
      tags: ["Web Scraping", "Python", "SQL", "Power BI"],
      features: [
        "Data scraping and cleaning with Python",
        "SQL for data manipulation and storage",
        "Feature engineering",
        "Model optimization",
        "Performance metrics",
      ],
      demoLink: "github.com/SatyaJaidev/IR---PROJECT",
      githubLink: "github.com/SatyaJaidev/IR---PROJECT",
    },
    {
      id: 7,
      title: "Data Analysis on FPI",
      shortDescription: "Analyzes Foreign Portfolio Investments in India using data science techniques to understand investment trends and market impacts.",
      description: "Analyzes Foreign Portfolio Investments in India using data science techniques to understand investment trends and market impacts.",
      image: "/fpi.png",
      tags: ["Data Analysis", "Python", "Finance", "Investment Trends"],
      features: [
        "Comparison of FPI data with Nifty indices",
        "Analysis of investment trends over two decades",
        "Visualizations of pre and post lockdown market effects",
        "Error handling",
        "Monitoring",
        "Scalability",
      ],
      demoLink: "https://github.com/SatyaJaidev/FPI-Report-Analysis",
      githubLink: "https://github.com/SatyaJaidev/FPI-Report-Analysis",
    },
  ],
  "AI / Gen - AI": [
    {
      id: 9,
      title: "Software Project Management using LLM's",
      shortDescription: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
      description: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
      image: "/genai.png",
      tags: ["DevSecOps", "Scrum", "Waterfall", "Project Management"],
      features: [
        "Implementation of DevSecOps for enhanced security and efficiency",
        "Integration of Scrum and Waterfall methodologies",
        "Focus on automation and continuous integration/continuous deployment"
      ],
      demoLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
      githubLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
    },
  ],
  "Devops / Cloud": [
    {
      id: 13,
      title: "DevSecOps",
      shortDescription: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
      description: "Explores DevSecOps automation within virtual teams using Scrum and Waterfall methodologies to enhance project management.",
      image: "/devops.png",
      tags: ["DevSecOps", "Docker", "Scrum", "Waterfall", "Project Management"],
      features: [
        "Implementation of DevSecOps for enhanced security and efficiency",
        "Integration of Scrum and Waterfall methodologies",
        "Focus on automation and continuous integration/continuous deployment"
      ],
      demoLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
      githubLink: "https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall",
    },
  ],
} 