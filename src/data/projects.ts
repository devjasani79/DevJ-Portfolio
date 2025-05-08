// data/projects.ts
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
    images: ["/src/assets/projects/WhatsupDev1.PNG","/src/assets/projects/WhatsupDev6.PNG","/src/assets/projects/WhatsupDev5.PNG","/src/assets/projects/WhatsupDev4.PNG","/src/assets/projects/WhatsupDev2.PNG","/src/assets/projects/WhatsupDev3.PNG","/src/assets/projects/WhatsupDev7.PNG"],
    link: "https://whats-up-dev.vercel.app/",
  },
  {
    title: "HISAAB",
    description:
    "Expense Tracker app featuring JWT auth, CRUD operations, expense visualization with charts, and periodic email summaries via cron jobs.",
    tech: ["MERN", "JWT", "Cron", "Chart.js"],
    images: ["/src/assets/projects/Hisaan.PNG", "/src/assets/projects/Hisaan1.PNG"],
    link: "https://expenses-dev.vercel.app/",
  },
  {
    title: "JDMFORALL",
    description:
      "A vibrant and interactive platform celebrating the passion and designed for enthusiasts to connect, explore, and engage. JDM WEB combines creativity, technology, and passion",
    tech: ["HTML", "CSS", "Javascript","Chart.js"],
    images: ["/src/assets/projects/jdm1.PNG", "/src/assets/projects/jdm4.PNG", "/src/assets/projects/jdm3.PNG", "/src/assets/projects/jdm2.PNG", "/src/assets/projects/jdm5.PNG", "/src/assets/projects/jdm6.PNG", "/src/assets/projects/jdm7.PNG", "/src/assets/projects/jdm8.PNG", "/src/assets/projects/jdm9.PNG"],
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