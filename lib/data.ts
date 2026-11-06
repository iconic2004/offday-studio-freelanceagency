import ksCoverImg from "@/app/assets/ks-cover-img.png";
import designerMonkCoverImg from "@/app/assets/the-desM-cover-img.png";
import clutchGgCoverImg from "@/app/assets/clutchgg-cover-img.png";

import visualImageOne from "@/app/assets/visual/Screenshot 2026-09-04 224630.png";
import visualImageTwo from "@/app/assets/visual/Screenshot 2026-09-04 224707.png";
import visualImageThree from "@/app/assets/visual/Screenshot 2026-09-04 224731.png";
import visualImageFour from "@/app/assets/visual/Screenshot 2026-09-04 224803.png";
import visualCampaignPoster from "@/app/assets/visual/campaign poster.jpg";
import visualCampaignPosterTwo from "@/app/assets/visual/campaign poster2.jpg";
import visualStory from "@/app/assets/visual/story.png";


export const services = [
  {
    number: "01",
    label: "DIGITAL",
    slug: "digital",
    title: "Websites & digital experiences engineered to perform.",
    tone: "lavender",
  },
  {
    number: "02",
    label: "VISUAL",
    slug: "visual",
    title:
      "Brand identities, graphics & visual systems that get remembered.",
    tone: "lime",
  },
  {
    number: "03",
    label: "CONTENT",
    slug: "content",
    title: "Video, reels & creative content built for attention.",
    tone: "coral",
  },
  {
    number: "04",
    label: "SOCIAL",
    slug: "social",
    title:
      "Strategy, content & management that keeps your brand moving.",
    tone: "sky",
  },
  {
    number: "05",
    label: "GROWTH",
    slug: "growth",
    title:
      "Marketing systems designed to turn visibility into growth.",
    tone: "yellow",
  },
];

export type PortfolioProject = {
  title: string;
  description: string;
  categories: string;
  image?: string;
  images?: string[];
  video?: string;
  videos?: string[];
  url?: string;
  year?: string;
  client?: string;
  type?: string;
};

export type GrowthService = {
  number: string;
  title: string;
  description: string;
};

export type GrowthStep = {
  number: string;
  title: string;
  description: string;
  items: string;
};

export type PortfolioCategory = {
  number: string;
  label: string;
  title: string;
  description: string;
  tone: string;
  projects: PortfolioProject[];
  growthServices?: GrowthService[];
  growthSteps?: GrowthStep[];
};

export const portfolioCategories: Record<string, PortfolioCategory> = {
  digital: {
    number: "01",
    label: "DIGITAL",
    title: "Digital / Web And App Development",
    description:
      "Websites, applications and digital experiences built to make the next move matter.",
    tone: "lavender",
    projects: [
      {
        title: "KnownStrangers",
        description:
          "A sharper identity and digital home for a considered retail world.",
        categories: "Branding / E-Commerce / Web Design",
        image: ksCoverImg.src,
        url: "https://knownstrangers.in/",
        type: "E-commerce website",
      },
      {
        title: "The Designer Monk",
        description:
          "A digital experience for a creative practice in progress.",
        categories:
          "Web Development / Creative / Marketing",
        image: designerMonkCoverImg.src,
        url: "https://thedesignermonk.in/",
        type: "Website",
      },
      {
        title: "Clutch.GG",
        description:
          "A digital experience built for the competitive gaming community.",
        categories:
          "Gaming / Tournament Hosting Platform / Digital Experience",
        image: clutchGgCoverImg.src,
        url: "https://clutchgg.in/",
        type: "Website",
      },
    ],
  },

  visual: {
    number: "02",
    label: "VISUAL",
    title: "Visual / Graphic Design",
    description:
      "Identity systems, graphics and visual work shaped for people to remember.",
    tone: "lime",
    projects: [
      {
        title: "Graphic Designing",
        description:
          "Brand identity, content and social design work.",
        categories:
          "Brand Identity / Content / Social",
        images: [
          visualImageOne.src,
          visualImageTwo.src,
          visualImageThree.src,
          visualImageFour.src,
          visualCampaignPoster.src,
          visualCampaignPosterTwo.src,
          visualStory.src,
        ],
        type: "Visual design",
      },
    ],
  },

  content: {
    number: "03",
    label: "CONTENT",
    title: "Content / Production",
    description:
      "Edited video, reels and motion-led content made for attention and action.",
    tone: "coral",
    projects: [
      {
        title: "Content & Reels",
        description:
          "Edited videos, reels and motion-led content created for brands, campaigns and digital platforms.",
        categories:
          "Video Editing / Reels / Motion Content",
        videos: [
          "/assets/content/content-13.mp4",
          "/assets/content/Video%20Project.mp4",
          "/assets/content/Video-2662.mp4",
          "/assets/content/Video-8655.mp4",
          "/assets/content/Video-28459.mp4",
          "/assets/content/Video-33128.mp4",
          "/assets/content/Video-53016.mp4",
          "/assets/content/Video-60071.mp4",
          "/assets/content/Video-70834.mp4",
          "/assets/content/content-10.mp4",
          "/assets/content/content-11.mp4",
          "/assets/content/content-12.mp4",
          
        ],
        type: "Video & Content",
      },
    ],
  },

  social: {
    number: "04",
    label: "SOCIAL",
    title: "Social / Management",
    description:
      "Social strategy, content systems and account management that keep brands moving.",
    tone: "sky",
    projects: [
      {
  title: "Clutch.GG",
  description:
    "Social media management and content created to keep the gaming brand active and engaging.",
  categories: "Social Media Management / Content / Gaming",
  image: "/assets/social/IMG_8871.png",
  url: "https://www.instagram.com/clutchg.g/",
  type: "Instagram Management",
},
{
  title: "KnownStrangers",
  description:
    "Social content and management built around a sharper fashion and lifestyle identity.",
  categories: "Social Media Management / Fashion / Content",
  image: "/assets/social/IMG_8872.png",
  url: "https://www.instagram.com/knownstrangers.in/",
  type: "Instagram Management",
},
{
  title: "Trident Gaming Cafe",
  description:
    "Social media content and management designed to keep the gaming community engaged.",
  categories: "Social Media Management / Gaming / Content",
  image: "/assets/social/IMG_8873.png",
  url: "https://www.instagram.com/trident_gaming_cafe/",
  type: "Instagram Management",
},
{
  title: "Fire5 Esports",
  description:
    "Social media management and creative content for an esports-focused brand.",
  categories: "Social Media Management / Esports / Content",
  image: "/assets/social/IMG_8874.png",
  url: "https://www.instagram.com/fire5esports/",
  type: "Instagram Management",
},
    ],
  },

  growth: {
    number: "05",
    label: "GROWTH",
    title: "Growth / Marketing",
    description:
      "Campaigns and marketing systems designed to turn visibility into growth.",
    tone: "yellow",
    projects: [],

    growthServices: [
      {
        number: "01",
        title: "Performance Marketing",
        description:
          "Paid campaigns built to reach the right audience, generate demand and drive measurable action.",
      },
      {
        number: "02",
        title: "SEO & Organic Growth",
        description:
          "Search strategies that help your brand become easier to discover and harder to forget.",
      },
      {
        number: "03",
        title: "Conversion & Funnels",
        description:
          "Landing pages, funnels and conversion systems designed to turn attention into action.",
      },
      {
        number: "04",
        title: "Campaign Strategy",
        description:
          "Campaigns built around the right audience, message, creative and channel.",
      },
    ],

    growthSteps: [
      {
        number: "01",
        title: "ATTRACT",
        description:
          "Get discovered by the right people.",
        items:
          "SEO / PAID MEDIA / CAMPAIGNS",
      },
      {
        number: "02",
        title: "ENGAGE",
        description:
          "Give people a reason to care.",
        items:
          "CONTENT / CREATIVE / SOCIAL",
      },
      {
        number: "03",
        title: "CONVERT",
        description:
          "Turn attention into action.",
        items:
          "WEBSITES / LANDING PAGES / FUNNELS",
      },
      {
        number: "04",
        title: "OPTIMISE",
        description:
          "Learn what works. Scale it.",
        items:
          "ANALYTICS / TESTING / PERFORMANCE",
      },
    ],
  },
};

export const projects = [
  {
    number: "01",
    title: "KnownStrangers",
    categories:
      "Branding / E-Commerce / Web Design",
    description:
      "A sharper identity and digital home for a considered retail world.",
    tone: "violet",
  },
  {
    number: "02",
    title: "Graphic Designing",
    categories:
      "Brand Identity / Content / Social",
    description:
      "A placeholder case study for a future brand with somewhere to go.",
    tone: "orange",
  },
  {
    number: "03",
    title: "The Designer Monk",
    categories:
      "Web Development / Creative / Marketing",
    description:
      "A placeholder case study for a digital experience in progress.",
    tone: "green",
  },
];

export const process = [
  [
    "01",
    "DISCOVER",
    "We understand your brand, audience and goals.",
  ],
  [
    "02",
    "DEFINE",
    "We define the direction, strategy and creative approach.",
  ],
  [
    "03",
    "DESIGN",
    "We turn the strategy into a strong visual experience.",
  ],
  [
    "04",
    "BUILD",
    "We bring the experience to life using modern technology.",
  ],
  [
    "05",
    "LAUNCH",
    "We launch, measure and improve.",
  ],
] as const;