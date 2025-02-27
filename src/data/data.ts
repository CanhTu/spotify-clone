import flowerMp3 from "../assets/flower.mp3";
import duChoTanTheMp3 from "../assets/du_cho_tan_the.mp3";
import aptMp3 from "../assets/apt.mp3";
import esspressoMp3 from "../assets/espresso.mp3";
import dieWithASmileMp3 from "../assets/die_with_a_smile.mp3";
import seven from "../assets/seven.mp3";
import earthquake from "../assets/earthquake.mp3";

interface Track {
  id: number;
  name: string;
  artist: string;
  album: string;
  url: string;
  images: {
    url: string;
  };
}

const songData: Track[] = [
  {
    id: 1,
    name: "Flower",
    artist: "JISOO",
    album: "ME",
    url: flowerMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02b0bc4161fffa156cacafc128",
    },
  },
  {
    id: 2,
    name: "Dù Cho Tận Thế",
    artist: "Erik",
    album: "Dù Cho Tận Thế",
    url: duChoTanTheMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02f2247e7271ee0ecd57d96f62",
    },
  },
  {
    id: 3,
    name: "APT.",
    artist: "ROSÉ, Bruno Mars",
    album: "rosie",
    url: aptMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e0236032cb4acd9df050bc2e197",
    },
  },
  {
    id: 4,
    name: "Seven",
    artist: "Jung Kook",
    album: "Seven",
    url: seven,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02741fd4807f442af3f7359316",
    },
  },
  {
    id: 5,
    name: "Espresso",
    artist: "Sabrina Carpenter",
    album: "Short n'Seet",
    url: esspressoMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02de84adf0e48248ea2d769c3e",
    },
  },
  {
    id: 6,
    name: "Die With A Smile",
    artist: "Lady Gaga, Bruno Mars",
    album: "ROSE",
    url: dieWithASmileMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e0282ea2e9e1858aa012c57cd45",
    },
  },
  {
    id: 7,
    name: "Earthquake",
    artist: "Jisoo",
    album: "Earthquake",
    url: earthquake,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02557019801cd1cb6d8175f3f1",
    },
  },
  {
    id: 8,
    name: "Espresso",
    artist: "Sabrina Carpenter",
    album: "Short n'Seet",
    url: esspressoMp3,
    images: {
      url: "https://i.scdn.co/image/ab67616d00001e02de84adf0e48248ea2d769c3e",
    },
  },
];

export default songData;
