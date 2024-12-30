import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  symfony,
  springboot,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  flutter,
  laravel,
  nextjs,
  angular,
  native,
  ecommerce,
  timdesks,
  gpt,
  bank,
  nativee,
  restaur,
} from "../assets";

import timdesk from "../assets/company/timdesk.png";
import wellness from "../assets/company/wellness.png";
import aiesec from "../assets/company/aiesec.png";
import asyncgroup from "../assets/company/asyncgroup.jfif";
import smartskills from "../assets/company/smartskills.png";
import kiffcom from "../assets/company/kiffcom.webp";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "react native",
    icon: native,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Fullstack Developer Internship",
    company_name: "Timsoft",
    icon: timdesk,
    iconBg: "#383E56",
    date: "Feb 2022 - Jul 2022",
    points: [
      " Realization of a 'Ticketing Portal for the follow-up of the Classic & TMA support activity'",
      " Functional study and needs analysis",
      " Design and layout of the Ticketing portal",
      " Portal Development,",
      " Testing and implementation in a pre-production environment at the client's site",
      " Technologies: MYSQL, Laravel , React , Figma.",
    ],
  },
  {
    title: "Full-stack Developer (Freelance Project)",
    company_name: "Async GROUP",
    icon: asyncgroup,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Aug 2023",
    points: [
      " Developed web apps with Next.js and Laravel for scalable solutions.",
      " Collaborated with teams to deliver user-centric products.",
      " Implemented responsive designs with cross-browser compatibility.",
      " Improved code quality through reviews and best practices.",
      " Managed code using version control for team collaboration.",
      " Adapted to remote workflows with strong communication.",
    ],
  },
  {
    title: "National Manager with AIESEC Costa Rica",
    company_name: "AIESEC",
    icon: aiesec,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      " Event and project planning.",
      " Planning of internal communication and engagement with the team.",
      " Execution of work (sales (application of Sales Funnel),CRM like Hubspot, market understanding and segmentation, mailing system,market segmentation, mailing system using extensions like Gmass, mailtrack...).",
      " Knowledge transfer meetings.",
      " Replanning meeting based on the feedback provided.",
    ],
  },

  {
    title: "Full-stack Developer",
    company_name: "Smart Skills",
    icon: smartskills,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2024",
    points: [
      " Built next-gen web apps with React.js, Python, PHP, and Laravel.",
      " Enhanced security using JWT-based authentication.",
      " Designed responsive interfaces for seamless user experiences.",
      " Managed pre-production environments with VMware Workstation.",
      " Optimized app performance through regular maintenance.",
      " Streamlined code management with GitHub and reviews.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Kiffcom Tunisie",
    icon: kiffcom,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      " Created responsive apps using React and Material-UI.",
      " Integrated Flask APIs for robust client-server communication.",
      " Optimized state management with Redux.",
      " Containerized apps with Docker for smoother deployments.",
      " Automated CI/CD pipelines in GitLab.",
      " Developed Chrome extensions to expand app functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "Winston Churchill",
  },
  {
    testimonial:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela",
  },
  {
    testimonial: "Believe you can and you're halfway there.",
    name: "Steve Jobs",
  },
];

const projects = [
  {
    name: "GPT Blog",
    description:
      "GPT Blog is an app created to provide useful information, tips, and insights on various topics using natural language processing and machine learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/HosniHazem/gpt_project",
  },
  {
    name: "Restaurant Menu",
    description:
      "A restaurant menu website is an online platform that displays the food and drink options offered by a restaurant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: restaur,
    source_code_link: "https://github.com/HosniHazem/Resteaurent_Project",
  },
  {
    name: "Bank Website",
    description:
      "A bank website is a digital platform that provides customers with access to various banking services and information.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/HosniHazem/Bank_Modern_Project",
  },
  {
    name: "Job finder mobile",
    description:
      "The Job Finder mobile app helps job seekers search and apply for job opportunities on-the-go.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
    ],
    image: nativee,
    source_code_link: "https://github.com/HosniHazem/Jobs_Project",
  },
  {
    name: "Multiservices Ecommerce platform",
    description:
      "An ecommerce platform is an online platform that allows businesses to create an online store to sell products or services to customers over the internet.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/HosniHazem/Integration-Project",
  },
  {
    name: "Ticketing platform",
    description:
      "Realization of a 'Ticketing Portal for the follow-up of the Classic & TMA support activity.'",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: timdesks,
    source_code_link: "https://github.com/HosniHazem/TimdeskFr",
  },
];

export { services, technologies, experiences, testimonials, projects };
