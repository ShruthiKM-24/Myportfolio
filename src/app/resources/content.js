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
    name: "Gmail",
    icon: "gmail",
    link: "mailto:shruthikm24@gmail.com",
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
        timeframe: "May 2026 - July 2026",
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
    title: "Technical Skills",
    skills: [
      {
        title: "Microsoft Excel",
        description: <>Basic knowledge of Excel for organizing data and creating simple spreadsheets. Able to use formulas, tables, and charts for academic and business tasks.</>,
        images: [],
      },
      {
        title: "PowerPoint Presentation",
        description: <>Skilled in creating clear and visually appealing presentations. Able to organize information effectively using slides and graphics.</>,
        images: [],
      },
      {
        title: "Operations Management",
        description: <>Understanding of basic operations management concepts and processes. Interested in improving efficiency and supporting smooth workflow management.</>,
        images: [],
      },
      {
        title: "Business Communication",
        description: <>Good verbal and written communication skills in professional settings. Able to communicate ideas clearly and work effectively with others.</>,
        images: [],
      },
      {
        title: "Strategic Planning",
        description: <>Basic knowledge of planning and goal-setting for projects and activities. Able to identify objectives and organize tasks to achieve them.</>,
        images: [],
      },
      {
        title: "Digital Marketing Basics",
        description: <>Familiar with basic digital marketing concepts and online platforms. Interested in learning how businesses promote products and services online.</>,
        images: [],
      },
      {
        title: "Social Media Strategy",
        description: <>Basic understanding of social media platforms and content planning. Able to create simple content ideas to improve audience engagement.</>,
        images: [],
      },
      {
        title: "Report Preparation",
        description: <>Capable of preparing simple and well-organized reports. Able to collect information and present it in a clear format.</>,
        images: [],
      },
      {
        title: "Presentation Skills",
        description: <>Comfortable presenting ideas and information to small groups. Able to explain topics clearly and confidently.</>,
        images: [],
      },
      {
        title: "Team Coordination",
        description: <>Able to work effectively as part of a team and support group activities. Good at cooperating with others to complete tasks and achieve goals.</>,
        images: [],
      },
    ],
  },
  soft: {
    display: true,
    title: "Soft Skills",
    skills: [
      {
        title: "Leadership",
        description: <>Demonstrated leadership abilities through academic projects, team activities, and event participation. Capable of motivating team members, taking initiative, and contributing to successful outcomes.</>,
      },
      {
        title: "Public Speaking",
        description: <>Confident in presenting ideas and sharing information with groups and audiences. Able to communicate clearly and engage listeners in professional and academic settings.</>,
      },
      {
        title: "Communication & Teamwork",
        description: <>Strong interpersonal skills with the ability to collaborate effectively in team environments. Skilled at sharing ideas, listening actively, and working towards common goals.</>,
      },
      {
        title: "Time Management",
        description: <>Effective at organizing tasks, prioritizing responsibilities, and meeting deadlines. Able to manage multiple activities efficiently while maintaining quality performance.</>,
      },
      {
        title: "Strategic Thinking",
        description: <>Capable of analyzing situations and identifying practical solutions to achieve objectives. Able to evaluate options and contribute to informed decision-making processes.</>,
      },
      {
        title: "Coordination Skills",
        description: <>Skilled in organizing tasks, supporting team activities, and ensuring smooth communication. Able to coordinate resources and efforts to help achieve project and organizational goals.</>,
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
