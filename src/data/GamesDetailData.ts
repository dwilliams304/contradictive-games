import { IGameData } from "../types";

import { NeonDivide_IMG_1,
  NeonDivide_IMG_2,
  NeonDivide_IMG_3,
  NeonDivide_IMG_4
 } from "../assets/neondivide";


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
    trailerUrl: NeonDivide_IMG_1,
    screenshots: [
      NeonDivide_IMG_2,
      NeonDivide_IMG_3,
      NeonDivide_IMG_4,
      NeonDivide_IMG_1
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