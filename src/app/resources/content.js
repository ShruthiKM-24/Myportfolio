import { InlineCode } from "@/once-ui/components";

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
  label: "𝙿𝚛𝚘𝚓𝚎𝚌𝚝",
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
        company: "𝙸𝚗𝚝𝚎𝚗𝚣𝚟𝚊𝚕𝚕𝚎𝚢",
        timeframe: "Dec 2024 - Feb 2025",
        role: "𝖶𝖾𝖻 𝖣𝖾𝗌𝗂𝗀𝗇 𝖤𝗇𝗀𝗂𝗇𝖾𝖾𝗋",
        achievements: [
          <>
            𝗥𝗲𝗱𝗲𝘀𝗶𝗴𝗻𝗲𝗱 𝘁𝗵𝗲 𝗨𝗜/𝗨𝗫 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗩𝗮𝗿𝗶𝗼𝘂𝘀 𝗪𝗲𝗯 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺, 𝗿𝗲𝘀𝘂𝗹𝘁𝗶𝗻𝗴 𝗶𝗻 𝗮 𝟮𝟬% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲 𝗶𝗻 𝘂𝘀𝗲𝗿
            𝗲𝗻𝗴𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗮𝗻𝗱 𝟯𝟬% 𝗳𝗮𝘀𝘁𝗲𝗿 𝗹𝗼𝗮𝗱 𝘁𝗶𝗺𝗲𝘀.

          </>,
          <>
            𝗦𝗽𝗲𝗮𝗿𝗵𝗲𝗮𝗱𝗲𝗱 𝘁𝗵𝗲 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗔𝗜 𝘁𝗼𝗼𝗹𝘀 𝗶𝗻𝘁𝗼 𝗱𝗲𝘀𝗶𝗴𝗻 𝘄𝗼𝗿𝗸𝗳𝗹𝗼𝘄𝘀, 𝗲𝗻𝗮𝗯𝗹𝗶𝗻𝗴 𝗱𝗲𝘀𝗶𝗴𝗻𝗲𝗿𝘀 𝘁𝗼
            𝗶𝘁𝗲𝗿𝗮𝘁𝗲 𝟱𝟬% 𝗳𝗮𝘀𝘁𝗲𝗿.
          </>,
        ],
        images: [


        ],
      },
      {
        company: "𝙶𝚊𝚝𝚎𝚠𝚊𝚢 𝚂𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝚂𝚘𝚕𝚞𝚝𝚒𝚘𝚗",
        timeframe: "June - July ",
        role: "𝖣𝖺𝗍𝖺 𝖢𝗈𝗅𝗅𝗎𝗌𝗂𝗈𝗇 𝖠𝗇𝖺𝗅𝗒𝗌𝖾𝗋",
        achievements: [
          <>
            𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗮 𝗔𝗜 𝗠𝗼𝗱𝗲𝗹 𝘁𝗵𝗮𝘁 𝘂𝗻𝗶𝗳𝗶𝗲𝗱 𝘁𝗵𝗲 𝗯𝗿𝗮𝗻𝗱 𝗮𝗰𝗿𝗼𝘀𝘀 𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺𝘀, 𝗶𝗺𝗽𝗿𝗼𝘃𝗶𝗻𝗴
            𝗨𝘀𝗲𝗿 𝗮𝘁𝘁𝗿𝗮𝗰𝘁𝗶𝗼𝗻 𝗿𝗮𝘁𝗲 𝗯𝘆 𝟰𝟬%.
          </>,
          <>
            𝗧𝗵𝗲 𝗰𝗿𝗼𝘀𝘀-𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹 𝘁𝗲𝗮𝗺 𝘁𝗼 𝗹𝗮𝘂𝗻𝗰𝗵 𝗮 𝗻𝗲𝘄 𝗽𝗿𝗼𝗱𝘂𝗰𝘁 𝗹𝗶𝗻𝗲, 𝗰𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗶𝗻𝗴 𝘁𝗼 𝗮 𝟭𝟱% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲
            𝗶𝗻 𝗼𝘃𝗲𝗿𝗮𝗹𝗹 𝗰𝗼𝗺𝗽𝗮𝗻𝘆 𝗿𝗲𝘃𝗲𝗻𝘂𝗲.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "𝚂𝚝𝚞𝚍𝚒𝚎𝚜",
    institutions: [
      {
        name: "𝖲𝗍 𝖯𝖾𝗍𝖾𝗋'𝗌 𝖢𝗈𝗅𝗅𝖾𝗀𝖾 𝗈𝖿 𝖤𝗇𝗀𝗂𝗇𝖾𝖾𝗋𝗂𝗇𝗀 𝖺𝗇𝖽 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒",
        description: <>𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱 𝗕 𝗧𝗲𝗰𝗵 𝗶𝗻 "𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗮𝗻𝗱 𝗗𝗮𝘁𝗮 𝗦𝗰𝗶𝗲𝗻𝗰𝗲" 𝗗𝗼𝗺𝗮𝗶𝗻.</>,
      },
      {
        name: "Velammal Group of Schools",
        description: <>𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱 𝗛𝗦𝗦𝗟𝗖 𝗚𝗿𝗮𝗱𝗲 𝘄𝗶𝘁𝗵 𝗽𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲 𝗼𝗳 𝟴𝟬.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "𝚃𝚎𝚌𝚑𝚗𝚒𝚌𝚊𝚕 𝚜𝚔𝚒𝚕𝚕𝚜",
    skills: [
      {
        title: "𝖠𝖨 & 𝖬𝖫 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍",
        description: <>𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝗡𝗼𝘁𝗲 𝗦𝘂𝗺𝗺𝗲𝗿𝗶𝘇𝗲𝗿, 𝗙𝗮𝗰𝗲 𝗥𝗲𝗰𝗼𝗴𝗻𝗶𝘁𝗶𝗼𝗻, 𝗖𝗵𝗮𝘁𝗯𝗼𝘁 𝗲𝘁𝗰.., & 𝗮𝗹𝘀𝗼 𝘁𝗿𝗮𝗶𝗻𝗲𝗱 𝗥𝗩𝗖 𝗠𝗼𝗱𝗲𝗹 𝗳𝗿𝗼𝗺 𝗦𝗰𝗿𝗮𝘁𝗰𝗵..[Click the Video for Full Screen],</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/projects/Note-Summerize-Model.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/projects/ChatBot-2.0.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/projects/Lunar-Model.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/projects/Beacon.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "𝙵𝚞𝚕𝚕-𝚂𝚝𝚊𝚌𝚔 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝",
        description: <>𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗩𝗮𝗿𝗶𝗼𝘂𝘀 𝗠𝗼𝗯𝗶𝗹𝗲 𝗔𝗽𝗽𝘀 𝗮𝗻𝗱 𝗗𝗲𝘀𝗸𝘁𝗼𝗽 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲, 𝗿𝗲𝗹𝗲𝗮𝘀𝗲𝗱 𝗮𝘀 𝗮𝗻 𝗼𝗽𝗲𝗻 𝘀𝗼𝘂𝗿𝗰𝗲 𝗶𝗻 𝗚𝗶𝘁𝗛𝘂𝗯..[Click the Video for Full Screen] </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/projects/ChatBot-Mobile.mp4",
            alt: "Project image",
            width: 12,
            height: 30,
          },
          {
            src: "/projects/WSA-Mobile.mp4",
            alt: "Project image",
            width: 12,
            height: 30,
          },
          {
            src: "/projects/LinkTree.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/projects/Weather.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },


        ],
      },

      {
        title: "𝙽𝚎𝚡𝚝.𝚓𝚜",
        description: <>𝗕𝘂𝗶𝗹𝘁 𝗻𝗲𝘅𝘁 𝗴𝗲𝗻 𝗮𝗽𝗽𝘀 𝘄𝗶𝘁𝗵 𝗡𝗲𝘅𝘁.𝚓𝘀 + 𝗢𝗻𝗰𝗲 𝗨𝗜 + 𝗦𝘂𝗽𝗮𝗯𝗮𝘀𝗲[𝙲𝚑𝚎𝚌𝚔 𝚖𝚢 𝙰𝚌𝚝𝚒𝚟𝚒𝚝𝚢 & 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝙿𝚊𝚐𝚎 𝚏𝚘𝚛 𝙳𝚎𝚝𝚊𝚒𝚕𝚜 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 😉].</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/projects/Next.js.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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
      src: "/images/gallery/img-01.jpg",
      alt: "NPTEL Online Certification",
      title: "Introduction to Operating Systems",
      description: "Successfully completed the NPTEL course with a consolidated score of 54% from IIT Madras. This course covered core concepts like process management, memory allocation, and file systems.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Southern Railway Certificate",
      title: "Southern Railway EMU Workshop",
      description: "Certificate of Appreciation for active participation in the Southern Railway EMU Workshop held at Avadi. Gained hands-on experience in electrical and mechanical systems of EMUs.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Web Development Training",
      title: "Full-Stack Web Development",
      description: "Intensive training certificate for completing a comprehensive course in Web Development at Intenzvalley, focusing on React, Node.js, and modern UI/UX principles.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Internship Certificate",
      title: "Web Development Internship",
      description: "Completed a 2-month internship as a Web Developer, contributing to real-world projects and enhancing skills in responsive design and backend integration.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "AI Fundamentals",
      title: "Artificial Intelligence Fundamentals",
      description: "Certified for completing the Artificial Intelligence Fundamentals course, covering machine learning algorithms, neural networks, and data preprocessing.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Entrepreneurship Awareness",
      title: "Entrepreneurship Awareness Program",
      description: "Participated in the AICTE evaluated 10-day Entrepreneurship Awareness Program conducted by Turnip Innovations, focusing on startup ecosystems and business logic.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Best Responsible Student",
      title: "Social Responsibility Award",
      description: "Received the 'Best Responsible Student' award during the 'Say No to Drugs' awareness campaign for leadership and community engagement.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Frontend Development",
      title: "Frontend Development Internship",
      description: "One-week internship program certificate focused on 'Frontend Development: Best Practices and Techniques' at Marcello Tech, Trichy.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "UC MAS Certificate",
      title: "Mental Arithmetic Certification",
      description: "Advanced level certificate from UC MAS for excellence in mental arithmetic and abacus calculations, fostering cognitive development.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Nakshatra 2.0",
      title: "Technical Event Participation",
      description: "Certificate of participation in Nakshatra 2.0, a national-level technical symposium held at S.A. Engineering College, competing in AI and coding events.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Public Service Awareness",
      title: "Public Service Appreciation",
      description: "Awarded for volunteering in public service awareness drives, focusing on civic duties and community welfare programs.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Workshop Certificate",
      title: "Industrial Automation Workshop",
      description: "Hands-on workshop certificate for learning industrial automation tools and PLC programming during a technical seminar.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Cybersecurity Basics",
      title: "Cybersecurity Fundamentals",
      description: "Completed training on the basics of cybersecurity, network protection, and ethical hacking principles.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Cloud Computing",
      title: "Cloud Computing Essentials",
      description: "Certified for understanding cloud infrastructure, deployment models, and services like AWS and Azure.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "Data Science Training",
      title: "Data Science & Analytics",
      description: "Completed training in Data Science, focusing on Python for data analysis, visualization, and statistical modeling.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "IoT Workshop",
      title: "Internet of Things Workshop",
      description: "Participated in an intensive IoT workshop, building prototype systems using ESP8266 and various sensors with cloud integration.",
      orientation: "veritical",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "Soft Skills Training",
      title: "Professional Communication",
      description: "Certificate for completing a professional communication and soft skills training program to enhance workplace effectiveness.",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "Leadership Program",
      title: "Student Leadership Training",
      description: "Completed a leadership training program aimed at developing organizational skills and team management capabilities.",
      orientation: "vertical"
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, project };
