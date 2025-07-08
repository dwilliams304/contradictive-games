import { IGameData } from "../types";

import neondivide1 from "../assets/neondivide-1.png";
import neondivide2 from "../assets/neondivide-2.png";
import neondivide3 from "../assets/neondivide-3.png";
import neondivide4 from "../assets/neondivide-4.png";


export const GamesDetailData: { [key: string]: IGameData } = {
  'neon-divide': {
    title: 'Neon Divide',
    subtitle: 'Become the Resistance',
    description: '',
    longDescription: `There will be a long description that eventually goes here`,
    releaseDate: '12/31/2333',
    platforms: ['Steam'],
    status: 'Ongoing',
    price: 'N/A',
    rating: 'N/A',
    trailerUrl: neondivide1,
    screenshots: [
      neondivide1,
      neondivide2,
      neondivide3,
      neondivide4
    ],
    features: [
      'Leaderboards',
      'Roguelike',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-4590 / AMD FX 8350',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD R9 290',
        storage: '2 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel i7-8700K / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3060 / AMD RX 6600',
        storage: '2 GB available space'
      }
    }
  },
};