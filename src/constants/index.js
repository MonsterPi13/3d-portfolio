import { chinaTelecom, ennGroup, ETOMarkets } from "../assets/images";
import {
  html5,
  contact,
  css,
  estate,
  express,
  git,
  github,
  javascript,
  chromeExtension,
  linkedin,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  vue,
  pinia,
  sass,
  snapgram,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html5,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: chromeExtension,
    name: "Chrome Extension",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: pinia,
    name: "Pinia",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "HTML5 Technical Architect",
    company_name: "China Telecom",
    icon: chinaTelecom,
    iconBg: "#D9EDBF",
    date: "July 2015 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js stack and Vue stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior frontend developer",
    company_name: "ENN Group",
    icon: ennGroup,
    iconBg: "#2C7865",
    date: "July 2021 - March 2024",
    points: [
      "Participated in the development of the company's front-end middleware component library Ency, contributed multiple common components",
      "Responsible for the development of multiple SaaS products across multiple business lines in the company's production middleware.",
      "Responsible for front-end project management, formulating front-end development standards, executing code reviews, and ensuring code quality.",
    ],
  },
  {
    title: "Senior frontend developer",
    company_name: "ETO Markets",
    icon: ETOMarkets,
    iconBg: "#90D26D",
    date: "March 2024 - Present",
    points: [
      "Participated in the development of copying trading platform ETO Plus",
      "Participated in the development of CRM platfrom",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "ETO Plus Copy Trading platform",
    description:
      "Developed a online copy trading platform empowers users to publish trading strategies and subscribe to others' for earning profits.",
    link: "https://www.etoplus.co/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Chat With Your Pdf Online Platform",
    description:
      'Developed an online platform for real-time collaboration on PDF documents.',
    link: "https://www.pdfai.io/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "My Personal Blog Website",
    description:
      "This is my Personal Blog Website",
    link: "https://github.com/MonsterPi13/monsterpi13.dev",
  },
  {
    iconUrl: estate,
    theme: "btn-back-pink",
    name: "Chat With Your Pdf Chrome Extension",
    description:
      "Built a chrome extension for chatting with your pdf",
    link: "https://chromewebstore.google.com/u/0/detail/pdfaiio-best-ai-pdf-chrom/jocmhahiccpckdaffdokgaijcdofgpff",
  },
];
