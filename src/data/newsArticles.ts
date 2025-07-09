import { NeonDivide_IMG_1,
  NeonDivide_IMG_2,
  NeonDivide_IMG_3,
  NeonDivide_IMG_4
 } from "../assets/neondivide";

// Rich content structure for articles
interface RichContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'quote' | 'code';
  content: string | string[];
  level?: number; // for headings (h1, h2, h3, etc.)
  imageAlt?: string; // for images
  author?: string; // for quotes
}

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Keep for backward compatibility
  richContent: RichContentBlock[]; // New rich content structure
  author: string;
  publishDate: string;
  category: string;
  image: string;
  featured: boolean;
  tags?: string[];
  readTime?: number; // estimated reading time in minutes
}

export const NewsArticlesData: NewsArticle[] = [
  {
    id: 1,
    title: "Mystic Realms: The Shadow Update Now Live",
    excerpt: "Experience new dungeons, powerful spells, and challenging bosses in our biggest content update yet.",
    content: "The Shadow Update brings over 20 hours of new content to Mystic Realms...",
    author: "Development Team",
    publishDate: "2025-07-01",
    category: "Game Updates",
    image: NeonDivide_IMG_1,
    featured: true,
    tags: ["Mystic Realms", "Update", "Shadow", "Dungeons"],
    readTime: 5,
    richContent: [
      {
        type: 'paragraph',
        content: "The Shadow Update represents our most ambitious content expansion to date, bringing over 20 hours of new gameplay to Mystic Realms. This massive update introduces three new shadow-themed dungeons, each with unique mechanics and challenging boss encounters."
      },
      {
        type: 'heading',
        content: "New Shadow Dungeons",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Players can now explore the mysterious Shadow Realm, where light and darkness play crucial roles in both puzzle-solving and combat. Each dungeon features progressive difficulty and exclusive shadow-forged equipment."
      },
      {
        type: 'list',
        content: [
          "The Obsidian Caverns - A sprawling underground complex with crystal-based puzzles",
          "Shadowmere Keep - An ancient fortress where stealth and strategy are key",
          "The Void Sanctum - The ultimate challenge featuring the Shadow Lord boss"
        ]
      },
      {
        type: 'heading',
        content: "Enhanced Magic System",
        level: 2
      },
      {
        type: 'paragraph',
        content: "We've completely revamped the magic system to include shadow magic as a new school of spells. This opens up entirely new build possibilities and combat strategies."
      },
      {
        type: 'quote',
        content: "The shadow magic system has completely changed how I approach combat encounters. The strategic depth is incredible!",
        author: "Beta Tester - MagicMaster92"
      },
      {
        type: 'paragraph',
        content: "The update also includes quality of life improvements, performance optimizations, and balance adjustments based on community feedback. We're already working on the next major update, so stay tuned for more exciting content!"
      }
    ]
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Space Odyssey",
    excerpt: "Take a deep dive into our development process and see how we're crafting the ultimate space adventure.",
    content: "Development of Space Odyssey began three years ago with a simple question...",
    author: "Lead Designer",
    publishDate: "2025-06-28",
    category: "Development",
    image: NeonDivide_IMG_2,
    featured: false,
    tags: ["Space Odyssey", "Development", "Behind the Scenes"],
    readTime: 8,
    richContent: [
      {
        type: 'paragraph',
        content: "Development of Space Odyssey began three years ago with a simple question: What would it feel like to truly explore the vastness of space? This question has guided every design decision, from the procedural galaxy generation to the intricate ship customization systems."
      },
      {
        type: 'heading',
        content: "The Vision",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Our goal was to create a space exploration game that captures both the wonder and the isolation of deep space travel. We wanted players to feel the scale of the universe while still maintaining engaging moment-to-moment gameplay."
      },
      {
        type: 'heading',
        content: "Technical Challenges",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Creating a believable universe required solving numerous technical challenges. Our procedural generation system creates over 18 quintillion unique planets, each with distinct biomes, weather systems, and potential for life."
      },
      {
        type: 'list',
        content: [
          "Custom engine built for seamless space-to-planet transitions",
          "Advanced physics simulation for realistic space flight",
          "Dynamic economy system spanning multiple star systems",
          "AI-driven faction relationships and conflicts"
        ]
      },
      {
        type: 'heading',
        content: "Art Direction",
        level: 2
      },
      {
        type: 'paragraph',
        content: "The visual design draws inspiration from both classic science fiction and cutting-edge space photography. Every star system feels unique while maintaining visual consistency across the galaxy."
      },
      {
        type: 'quote',
        content: "We wanted players to feel like they're looking through the Hubble telescope while playing a video game.",
        author: "Art Director - Sarah Chen"
      },
      {
        type: 'paragraph',
        content: "Space Odyssey is scheduled for early access release in Q2 2026, with the full launch planned for late 2026. We can't wait for players to begin their own journey among the stars."
      }
    ]
  },
  {
    id: 3,
    title: "Community Spotlight: Amazing Player Creations",
    excerpt: "Check out the incredible mods, artwork, and videos created by our talented community.",
    content: "Our community continues to amaze us with their creativity...",
    author: "Community Manager",
    publishDate: "2025-06-25",
    category: "Community",
    image: NeonDivide_IMG_3,
    featured: false,
    tags: ["Community", "Mods", "Artwork", "Creations"],
    readTime: 4,
    richContent: [
      {
        type: 'paragraph',
        content: "Our community continues to amaze us with their incredible creativity and passion. This month, we're highlighting some of the most impressive player-created content that has caught our attention."
      },
      {
        type: 'heading',
        content: "Featured Mods",
        level: 2
      },
      {
        type: 'paragraph',
        content: "The modding community has been particularly active, creating everything from quality-of-life improvements to complete overhauls of game systems."
      },
      {
        type: 'list',
        content: [
          "Enhanced UI Pack by @ModMaster - Complete interface redesign with 50K+ downloads",
          "Realistic Weather System by @StormCoder - Dynamic weather affects gameplay",
          "Epic Boss Battles Mod by @BossHunter - 15 new challenging encounters",
          "Player Housing Extended by @BuilderPro - Expanded customization options"
        ]
      },
      {
        type: 'heading',
        content: "Community Artwork",
        level: 2
      },
      {
        type: 'paragraph',
        content: "The artistic talent in our community never ceases to amaze us. From detailed character portraits to stunning landscape paintings, players continue to bring our game worlds to life in new ways."
      },
      {
        type: 'heading',
        content: "Video Content",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Content creators have been producing exceptional gameplay videos, tutorials, and even machinima films using our games as the foundation."
      },
      {
        type: 'quote',
        content: "Seeing players create content that goes beyond what we ever imagined is the most rewarding part of game development.",
        author: "Game Director - Mike Rodriguez"
      },
      {
        type: 'paragraph',
        content: "If you've created something amazing with our games, we'd love to see it! Share your creations on our community forums or social media with the hashtag #PlayerCreations."
      }
    ]
  },
  {
    id: 4,
    title: "Upcoming Gaming Convention Appearances",
    excerpt: "Meet the team and play our latest demos at these upcoming gaming events.",
    content: "We're excited to announce our presence at several gaming conventions...",
    author: "Marketing Team",
    publishDate: "2025-06-20",
    category: "Events",
    image: NeonDivide_IMG_4,
    featured: false,
    tags: ["Conventions", "Events", "Demos"],
    readTime: 3,
    richContent: [
      {
        type: 'paragraph',
        content: "We're excited to announce our presence at several major gaming conventions over the next few months. These events provide amazing opportunities to meet our community face-to-face and showcase our latest projects."
      },
      {
        type: 'heading',
        content: "PAX West 2025",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Join us at PAX West from August 30 - September 2 at the Seattle Convention Center. We'll have playable demos of Space Odyssey and exclusive merchandise."
      },
      {
        type: 'list',
        content: [
          "Booth #2847 - Main Exhibition Hall",
          "Daily developer Q&A sessions at 2 PM",
          "Exclusive Space Odyssey alpha demo",
          "Limited edition convention merchandise"
        ]
      },
      {
        type: 'heading',
        content: "GamesCom 2025",
        level: 2
      },
      {
        type: 'paragraph',
        content: "We're returning to GamesCom in Cologne, Germany from August 21-25. This will be our largest international presence this year."
      },
      {
        type: 'heading',
        content: "What to Expect",
        level: 2
      },
      {
        type: 'paragraph',
        content: "At each convention, attendees will be able to play early builds of our upcoming games, meet the development team, and participate in special giveaways."
      },
      {
        type: 'quote',
        content: "Convention appearances give us invaluable feedback and remind us why we love making games.",
        author: "CEO - Jennifer Walsh"
      },
      {
        type: 'paragraph',
        content: "Can't make it to the conventions? Don't worry! We'll be streaming live from each event and sharing exclusive content on our social media channels."
      }
    ]
  }
];

export type { NewsArticle, RichContentBlock };