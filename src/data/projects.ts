// data/projects.ts
import whatsUpDev1 from '../assets/projects/WhatsupDev1.PNG';
import whatsUpDev2 from '../assets/projects/WhatsupDev2.PNG';
import whatsUpDev3 from '../assets/projects/WhatsupDev3.PNG';
import whatsUpDev4 from '../assets/projects/WhatsupDev4.PNG';
import whatsUpDev5 from '../assets/projects/WhatsupDev5.PNG';
import whatsUpDev6 from '../assets/projects/WhatsupDev6.PNG';
import whatsUpDev7 from '../assets/projects/WhatsupDev7.PNG';
import hisaan1 from '../assets/projects/Hisaan.PNG';
import hisaan2 from '../assets/projects/Hisaan1.PNG';
import jdm1 from '../assets/projects/jdm1.PNG';
import jdm2 from '../assets/projects/jdm2.PNG';
import jdm3 from '../assets/projects/jdm3.PNG';
import jdm4 from '../assets/projects/jdm4.PNG';
import jdm5 from '../assets/projects/jdm5.PNG';
import jdm6 from '../assets/projects/jdm6.PNG';
import jdm7 from '../assets/projects/jdm7.PNG';
import jdm8 from '../assets/projects/jdm8.PNG';
import jdm9 from '../assets/projects/jdm9.PNG';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "WhatsUpDev",
    description:
    "WhatsUpDev is a real-time chat application built with MERN and socket.io, featuring instant messaging, user auth, multimedia support, dark mode, vCard import",
    tech: ["MERN", "Socket.io", "Framer", "Tailwind"],
    images: [whatsUpDev1, whatsUpDev6, whatsUpDev5, whatsUpDev4, whatsUpDev2, whatsUpDev3, whatsUpDev7],
    link: "https://whats-up-dev.vercel.app/",
  },
  {
    title: "HISAAB",
    description:
    "Expense Tracker app featuring JWT auth, CRUD operations, expense visualization with charts, and periodic email summaries via cron jobs.",
    tech: ["MERN", "JWT", "Cron", "Chart.js"],
    images: [hisaan1, hisaan2],
    link: "https://expenses-dev.vercel.app/",
  },
  {
    title: "JDMFORALL",
    description:
      "A vibrant and interactive platform celebrating the passion and designed for enthusiasts to connect, explore, and engage. JDM WEB combines creativity, technology, and passion",
    tech: ["HTML", "CSS", "Javascript","Chart.js"],
    images: [jdm1, jdm4, jdm3, jdm2, jdm5, jdm6, jdm7, jdm8, jdm9],
    link: "https://jdmweb.netlify.app/",
  },
  {
    title: "MyContact-App",
    description:
      "A safe and secured contact manager supporting clean login/signup with JWT authentication, MongoDB database integration, and dynamic CRUD operations.",
    tech: ["MongoDB", "Express", "JWT", "Tailwind"],
    images: ["/src/assets/projects/MyContact1.PNG", "/src/assets/projects/MyContact2.PNG"],
    link: "https://mycontactappdev.netlify.app/",
  },
  {
    title: "TodoDev",
    description:
    "LocalStorage-powered ToDo App for developers to manage daily tasks. Clean UI with task filtering, streak tracking, and dark mode.",
    tech: ["React", "Tailwind", "LocalStorage"],
    images: ["/src/assets/projects/ToDo.PNG", "/src/assets/projects/ToDo1.PNG"],
    link: "https://todo-dev-pied.vercel.app/",
  },
  {
    title: "Events-Decor-SHOWCASE",
    description:
      "Client-facing responsive website for event decoration services. Built with clean layouts, animations, and ahard coded content ",
    tech: ["HTML", "CSS", "JavaScript", "SNTP"],
    images: ["/src/assets/projects/Events&Decor.PNG", "/src/assets/projects/Events&Decor1.PNG", "/src/assets/projects/Events&Decor2.PNG", "/src/assets/projects/Events&Decor3.PNG"],
    link: "https://shreesaievents.netlify.app/",
  },
  {
    title: "SpotifyMuse",
    description:
      "Music player website inspired by Spotify. Includes playlist UI, custom audio controls, and dynamic file-based music loading using vanilla JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: ["/src/assets/projects/Spotify1.PNG"],
    link: "https://spotifymuse.freewebhostmost.com/ ",
  },
  {
    title: "X Clone",
    description:
      "Frontend-only clone of Twitter/X built using modern TailwindCSS techniques. Features mock feed layout, responsive components, and UI mimicry.",
    tech: ["HTML", "CSS", "Tailwind"],
    images: ["/src/assets/projects/X-CLONE.PNG", "/src/assets/projects/X-CLONE1].PNG"],
    link: "https://devjasani79.github.io/x-clone.github.io/",
  },
];