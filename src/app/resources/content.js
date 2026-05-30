import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shruthi",
  lastName: "K M",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fulfillment Specialist",
  avatar: "/about/me.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "മലയാളം", "தமிழ் "],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shruthikm",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shruthi-km/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shruthi.km2427@gmail.com",
  },
];

const project = {
  label: "Projects",
  title: "Professional Endeavors",
  description: `Explore my professional projects, management initiatives, and collaborative work.`,
};

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Fulfillment Specialist ❃",
  subline: (
    <>
      I'm Shruthi & I've worked on diverse projects across <InlineCode>Embedded Systems, Python, Web, and AI solutions</InlineCode>.
      <br /> This versatility reflects my belief that:
      <br /><br />
      <i>A jack of all trades is master of nothing, but often better than master of one.😉</i>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/shruthikm.in",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Motivated and ambitious BBA student with a strong passion for business management, marketing strategy, operations, and leadership development.
        Skilled in communication, team collaboration, event coordination, and strategic planning through academic projects and organizational activities. Possesses strong presentation and public engagement abilities with a proactive mindset toward continuous learning and professional growth. Eager to contribute effectively in business-oriented and management roles while building impactful organizational and leadership skills.
      </>
    ),
  },
  work: {
    display: true,
    title: "Intern Journey",
    experiences: [
      {
        company: "Marca Rise",
        timeframe: "Dec 2025 - May 2026",
        role: "Video Presenter | Creative Strategy",
        achievements: [
          <>
            Presented creative content and supported digital media projects.
            Collaborated with cross-functional teams for branding and audience engagement.
          </>,
          <>
            Supported campaign development through creative execution and strategic communication planning.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "SRM instituation of science and technology",
        description: <>Completed Bachelore of business Administration.</>,
      },
      {
        name: "Kaligi Ranganathan Montford Matriculation Higher Secondary School",
        description: <>Completed HSSLC Grade with percentage of 94%.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Microsoft Excel",
        description: <>Proficiency in data analysis, formula-based calculations, PivotTables, and business modeling.</>,
        images: [],
      },
      {
        title: "PowerPoint Presentation",
        description: <>Effective in structuring content, designing visuals, and delivering clear, engaging presentations.</>,
        images: [],
      },
      {
        title: "Operations Management",
        description: <>Excellent time management skills with proven ability to handle multiple tasks, prioritize effectively, and deliver quality work within deadlines.</>,
        images: [],
      },
      {
        title: "Business Communication",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Strategic Planning",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Digital Marketing Basics",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Social Media Strategy",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Report Preparation",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Presentation Skills",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
      {
        title: "Team Coordination",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Summit",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Activity",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "My Vault",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/certificate .jpeg",
      alt: "NPTEL Online Certification",
      title: "Introduction to Operating Systems",
      description: "Successfully completed the NPTEL course with a consolidated score of 54% from IIT Madras. This course covered core concepts like process management, memory allocation, and file systems.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/certificate sheild.jpeg",
      alt: "Southern Railway Certificate",
      title: "Southern Railway EMU Workshop",
      description: "Certificate of Appreciation for active participation in the Southern Railway EMU Workshop held at Avadi. Gained hands-on experience in electrical and mechanical systems of EMUs.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/only certificate.jpeg",
      alt: "Web Development Training",
      title: "Full-Stack Web Development",
      description: "Intensive training certificate for completing a comprehensive course in Web Development at Intenzvalley, focusing on React, Node.js, and modern UI/UX principles.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/certificate 3.jpeg",
      alt: "Internship Certificate",
      title: "Web Development Internship",
      description: "Completed a 2-month internship as a Web Developer, contributing to real-world projects and enhancing skills in responsive design and backend integration.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sheild.jpeg",
      alt: "AI Fundamentals",
      title: "Artificial Intelligence Fundamentals",
      description: "Certified for completing the Artificial Intelligence Fundamentals course, covering machine learning algorithms, neural networks, and data preprocessing.",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, project };
