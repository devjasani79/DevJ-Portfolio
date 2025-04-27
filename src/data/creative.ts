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
    value: "10+"
  },
  {
    label: "Events Coordinated",
    value: "35+"
  },
  {
    label: "Brand Partnerships",
    value: "10+"
  }
];

export const artists = [
  {
    name: "Nirvana Soul",
    role: "Rapper",
    image: "/src/assets/artist/nirvana.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/nirvanasoul.music",
      spotify: "https://open.spotify.com/artist/349UK3uF5XJagxkMjvZO9b",
      youtube: "https://youtube.com/@nirvanasoulmusic"
    }
  },
  {
    name: "Chitragupth",
    role: "Composer/Singer",
    image: "/src/assets/artist/chitragupth.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/chitraguptttt",
      youtube: "https://youtu.be/B5bngDuXlhU"
    }
  },
  {
    name: "Nex",
    role: "Entrepreneur/Influencer",
    image: "/src/assets/artist/nex.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/nex._b_",
      file: "https://nachiketalumina.wixsite.com/nachiketportfolio"
    }
  }
];

export const brands = [
  {
    name: "Switch It",
    description: "Next Gen StreetWear Creators",
    image: "/src/assets/Collabs/switchit.jpeg",
    link: "https://perspectivee.company.site/"
  },
  {
    name: "Rut Music",
    description: "Premium music production and distribution",
    image: "/src/assets/Collabs/rutmusic.jpeg",
    link: "https://rutmusic.com"
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
