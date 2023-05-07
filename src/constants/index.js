import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "native",
    icon: native,
  },
  {
    name: "flutter",
    icon: flutter,
  }
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Timsoft",
    icon: timdesk,
    iconBg: "#383E56",
    date: "Feb 2022 - Jul 2022",
    points: [
      "- Realization of a 'Ticketing Portal for the follow-up of the Classic & TMA support activity'",
      "- Functional study and needs analysis",
      "- Design and layout of the Ticketing portal",
      "- Portal Development,",
      "-Testing and implementation in a pre-production environment at the client's site",
     " Technologies: MYSQL, Laravel , React , Figma.",
      
    ],
  },
  {
    title: "Content Creation",
    company_name: "Welness",
    icon: wellness,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jun 2023",
    points: [
      "- Research and design: Understand needs, identify trends and develop logo concepts.",
      "- Refinement and finalization: Improve the selected concepts, finalize the design and provide high-quality files.",
    ],
  },
  {
    title: "National Manager with AIESEC Costa Rica",
    company_name: "AIESEC",
    icon: aiesec,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
 "- Event and project planning.",
"- Planning of internal communication and engagement with the team.",
"- Execution of work (sales (application of Sales Funnel),CRM like Hubspot, market understanding and segmentation, mailing system,market segmentation, mailing system using extensions like Gmass, mailtrack...).",
"- Knowledge transfer meetings.", 
"- Replanning meeting based on the feedback provided.",
  ],
  },
  {
    title: "Full stack Developer",
    company_name: "AsyncGroup",
    icon: asyncgroup,
    iconBg: "#E6DEDD",
    date: "Mars 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    testimonial:
      "Believe you can and you're halfway there.",
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
