export interface Artist {
  name: string;
  image: string;
  role: string;
  description: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
    file?: string;
  };
}

export interface Brand {
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface Video {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export interface InstagramVideo {
  url: string;
  title: string;
}

export const choreographyStats = [
  {
    label: "Dance Styles",
    value: "10+"
  },
  {
    label: "Students Trained",
    value: "500+"
  },
  {
    label: "Performances",
    value: "100+"
  }
];

export const artistManagementStats = [
  {
    label: "Artists Managed",
    value: "15+"
  },
  {
    label: "Events Coordinated",
    value: "50+"
  },
  {
    label: "Brand Partnerships",
    value: "20+"
  }
];

export const artists = [
  {
    name: "Nirvana",
    role: "Lead Dancer",
    image: "/assets/artist/nirvana.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/nirvanasoul.music",
      spotify: "https://open.spotify.com/artist/349UK3uF5XJagxkMjvZO9b",
      youtube: "https://youtube.com/@nirvanasoulmusic"
    }
  },
  {
    name: "Chitragupt",
    role: "Choreographer",
    image: "/assets/artist/chitragupth.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/chitraguptttt",
      youtube: "https://youtu.be/B5bngDuXlhU"
    }
  },
  {
    name: "Nex",
    role: "Dance Artist",
    image: "/assets/artist/nex.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/nex._b_",
      file: "https://nachiketalumina.wixsite.com/nachiketportfolio"
    }
  }
];

export const brands = [
  {
    name: "Switch It",
    description: "Innovative dance and music platform",
    image: "/assets/Collabs/switchit.jpeg",
    link: "https://perspectivee.company.site/"
  },
  {
    name: "Rut Music",
    description: "Premium music production and distribution",
    image: "/assets/Collabs/rutmusic.jpeg",
    link: "https://rutmusic.com"
  }
];

export const videos: Video[] = [
  {
    title: "Contemporary Fusion",
    url: "https://www.youtube.com/embed/your-video-id-1",
    thumbnail: "/assets/artist/nirvana.jpeg",
    description: "A beautiful fusion of contemporary and classical dance styles."
  },
  {
    title: "Hip-Hop Showcase",
    url: "https://www.youtube.com/embed/your-video-id-2",
    thumbnail: "/assets/artist/chitragupth.jpeg",
    description: "High-energy hip-hop performance featuring our talented artists."
  },
  {
    title: "Street Dance Battle",
    url: "https://www.youtube.com/embed/your-video-id-3",
    thumbnail: "/assets/artist/nex.jpeg",
    description: "Intense street dance battle showcasing raw talent and creativity."
  }
];
export const contactInfo = {
  name: "Dev Jasani",
  email: "devjasani79@gmail.com",
  phone: "+91 7888117903",
  socialLinks: {
    instagram: "https://www.instagram.com/dev_jasani/",
    github: "https://github.com/devjasani79",
    linkedin: "https://www.linkedin.com/in/devjasani79/"
  }
}; 