import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "𝓢𝓱𝓻𝓾𝓽𝓱𝓲",
  lastName: "𝓚 𝓜",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "𝓕𝓾𝓵𝓵𝓯𝓲𝓵𝓵𝓶𝓮𝓷𝓽 𝓢𝓹𝓮𝓬𝓲𝓪𝓵𝓲𝓼𝓽",
  avatar: "/about/me.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "മലയാളം", "தமிழ் "],
};

const newsletter = {
  display: true,
  title: <>𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝚝𝚘 {person.firstName}'𝚜 𝙽𝚎𝚠𝚜𝚕𝚎𝚝𝚝𝚎𝚛</>,
  description: (
    <>
      𝖨 𝗈𝖼𝖼𝖺𝗌𝗂𝗈𝗇𝖺𝗅𝗅𝗒 𝗐𝗋𝗂𝗍𝖾 𝖺𝖻𝗈𝗎𝗍 𝖽𝖾𝗌𝗂𝗀𝗇, 𝗍𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒, 𝖺𝗇𝖽 𝗌𝗁𝖺𝗋𝖾 𝗍𝗁𝗈𝗎𝗀𝗁𝗍𝗌 𝗈𝗇 𝗍𝗁𝖾 𝗂𝗇𝗍𝖾𝗋𝗌𝖾𝖼𝗍𝗂𝗈𝗇 𝗈𝖿       𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝖾𝗇𝗀𝗂𝗇𝖾𝖾𝗋𝗂𝗇𝗀.
    </>
  ),
};

const social = [

  {
    name: "𝙶𝚒𝚝𝙷𝚞𝚋",
    icon: "github",
    link: "https://github.com/shruthikm",
  },
  {
    name: "𝙻𝚒𝚗𝚔𝚎𝚍𝙸𝚗",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shruthi-km/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "𝙴𝚖𝚊𝚒𝚕",
    icon: "email",
    link: "mailto:shruthi.km2427@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `𝖯𝗈𝗋𝗍𝖿𝗈𝗅𝗂𝗈 𝗐𝖾𝖻𝗌𝗂𝗍𝖾 𝗌𝗁𝗈𝗐𝖼𝖺𝗌𝗂𝗇𝗀 𝗆𝗒 𝗐𝗈𝗋𝗄 𝖺𝗌 𝖺 ${person.role}`,
  headline: "𝓕𝓾𝓵𝓵𝓯𝓲𝓵𝓵𝓶𝓮𝓷𝓽 𝓢p𝓮𝓬𝓲𝓪𝓵𝓲𝓼𝓽 ❃",
  subline: (
    <>
      𝙸'𝚖 𝚂𝚑𝚛𝚞𝚝𝚑𝚒 & 𝙸’𝚟𝚎 𝚠𝚘𝚛𝚔𝚎𝚍 𝚘𝚗 𝚍𝚒𝚟𝚎𝚛𝚜𝚎 𝚙𝚛𝚘𝚓𝚎𝚌𝚝𝚜 𝚊𝚌𝚛𝚘𝚜𝚜<InlineCode>𝐸𝓂𝒷𝑒𝒹𝒹𝑒𝒹 𝒮𝓎𝓈𝓉𝑒𝓂𝓈, 𝒫𝓎𝓉𝒽𝑜𝓃, 𝒲𝑒𝒷, 𝒶𝓃𝒹 𝒜𝐼 𝓈𝑜𝓁𝓊𝓉𝒾𝑜𝓃𝓈</InlineCode>.
      <br /> 𝚃𝚑𝚒𝚜 𝚟𝚎𝚛𝚜𝚊𝚝𝚒𝚕𝚒𝚝𝚢 𝚛𝚎𝚏𝚕𝚎𝚌𝚝𝚜 𝚖𝚢 𝚋𝚎𝚕𝚒𝚎𝚏 𝚝𝚑𝚊𝚝:
      <br /><br />
      <i>𝒜 𝒿𝒶𝒸𝓀 𝓞𝒻 𝒶𝓁𝓁 𝓉𝓇𝒶𝒹𝑒𝓼 𝒾𝓈 𝓂𝒶𝓈𝓉𝑒𝓇 𝓞𝒻 𝓃𝓞𝓉𝒽𝒾𝓃𝑔, 𝒷𝓊𝓉 𝓞𝒻𝓉𝑒𝓃 𝒷𝑒𝓉𝓉𝑒𝓇 𝓉𝚑𝒶𝓃 𝓂𝒶𝓈𝓉𝑒𝓇 𝓞𝒻 𝓞𝓃𝑒.😉</i>

    </>
  ),
};
const project = {
  label: "Events",
  title: "𝓕𝓻𝓸𝓶 𝓬𝓸𝓭𝓮𝓼 𝓽𝓸 𝓷𝓸𝓭𝓮𝓼, 𝓘’𝓿𝓮 𝓭𝓪𝓷𝓬𝓮𝓭 𝓽𝓱𝓻𝓸𝓾𝓰𝓱 𝓮𝓿𝓮𝓻𝔂 𝓴𝓲𝓷𝚍 𝓸𝓯 𝓹𝚛𝚘𝓳𝓮𝓬𝓽 — 𝓿𝓮𝚛𝓼𝓪𝓽𝓲𝓵𝓲𝓽𝔂 𝓲𝓼 𝓶𝔂 𝓳𝓪𝓶 𝓲𝓷 𝓽𝓱𝓮 𝓼𝓸𝓯𝓽𝔀𝓪𝓻𝓮 𝓰𝓪𝓶𝓮. 😌",
  description: `Explore personal and collaborative works by ${person.name}`,
};
const about = {
  label: "𝙰𝚋𝚘𝚞𝚝",
  title: "𝙰𝚋𝚘𝚞𝚝 𝚖𝚎",
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
    title: "𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚝𝚒𝚘𝚗",
    description: (
      <>
       Motivated and ambitious BBA student with a strong passion for business management, marketing strategy, operations, and leadership development.
      Skilled in communication, team collaboration, event coordination, and strategic planning through academic projects and organizational activities. Possesses strong presentation and public engagement abilities with a proactive mindset toward continuous learning and professional growth. Eager to contribute effectively in business-oriented and management roles while building impactful organizational and leadership skills.

      </>
    ),
  },
  work: {
    display: true,
    title: "𝙸𝚗𝚝𝚎𝚛𝚗 𝙹𝚘𝚞𝚛𝚗𝚎𝚢",
    experiences: [
      {
        company: "Marca Rise",
        timeframe: "Dec 2025 - May 2026",
        role: "Video Presenter | Creative Strategy",
        achievements: [
          <>
            Presented creative content and supported digital media projects.
            Collaborated with cross-functional teams for branding and audience engagement

          </>,
          <>
            Supported campaign development through creative execution and strategic communication planning.
          </>,
        ],
        images: [


        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "𝚂𝚝𝚞𝚍𝚒𝚎𝚜",
    institutions: [
      {
        name: "SRM instituation of science and technology",
        description: <>Completed Bachelore of business Administration.</>,
      },
      {
        name: "Kaligi Ranganathan Montford Matriculation Higher Secondary School",
        description: <>𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱 𝗛𝗦𝗦𝗟𝗖 𝗚𝗿𝗮𝗱𝗲 𝘄𝗶𝘁𝗵 𝗽𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲 𝗼𝗳 94%.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "𝚃𝚎𝚌𝚑𝚗𝚒𝚌𝚊𝚕 𝚜𝚔𝚒𝚕𝚕𝚜",
    skills: [
      {
        title: "Microsoft Excel",
        description: <>Proficiency in data analysis, formula-based calculations, PivotTables, and business modeling.</>,
        // optional: leave the array empty if you don't want to display images
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
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Business Communication",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Strategic Planning",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Digital Marketing Basics",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Social Media Strategy",
        description: <>Strong organizational and coordination skills with experience in planning, executing, and monitoring projects to achieve defined goals.</>,
        // optional: leave the array empty if you don't want to display images
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
  label: "𝚂𝚞𝚖𝚖𝚒𝚝",
  title: "𝓦𝓻𝓲𝓽𝓲𝓷𝓰 𝓪𝓫𝓸𝓾𝓽 𝓭𝓮𝓼𝓲𝓰𝓷 𝓪𝓷𝓭 𝓽𝓮𝓬𝓱...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "𝙰𝚌𝚝𝚒𝚟𝚒𝚝𝚢",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "𝙼𝚢 𝚅𝚊𝚞𝚕𝚝",
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
