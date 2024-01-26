import { SKILLS } from '../skills'
import { ProjectType } from './interface'

export const PROJECTS: ProjectType[] = [
  {
    name: 'Transjakarta App',
    image: 'images/projects/tj app/image1.png',
    date: 'Oct 2023-Present',
    description:
      'Developing an app for PT Transjakarta that leverages an AI model and live GPS to provide live bus location, ETA, and nearby bus stops.',
    skills: [
      SKILLS.ML,
      SKILLS.Python,
      SKILLS.FastAPI,
      SKILLS.GoogleAPI,
      SKILLS.Redis,
      SKILLS.AWS,
    ],
    type: 'SE',
  },
  {
    name: 'Duren Search Engine',
    image: 'images/projects/duren/image1.png',
    date: 'Dec 2023',
    description:
      'Developed a search engine website that utilizes a Learning to Rank technique. The technique is trained and indexed using the WikiCLIR dataset.',
    links: [
      {
        name: 'Website',
        link: 'https://duren.edutjie.app/',
      },
      {
        name: 'Source Code (Backend)',
        link: 'https://github.com/edutjie/duren-search-engine-be',
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.NLP,
      SKILLS.Python,
      SKILLS.FastAPI,
      SKILLS.Redis,
      SKILLS.GCP,
      SKILLS.HuggingFace,
    ],
    type: 'All',
  },
  {
    name: 'Image-based Drugs Search Engine using OCR and Levenshtein Algorithm',
    image: 'images/projects/drug ocr/image1.png',
    date: 'Oct 2023',
    description:
      'Developed an OCR-based drug brand detector for the Kasir Pintar® company during the Airnology 2.0 Data Competition.',
    links: [
      {
        name: 'Slides',
        link: 'https://docs.google.com/presentation/d/1BlHTQLov80DPzyMtRfwblcDp1_Zq5TSP1d2mNSw9es0/edit?usp=drive_link',
      },
      {
        name: 'Source Code',
        link: 'https://github.com/edutjie/drug-ocr',
      },
    ],
    skills: [SKILLS.ML, SKILLS.CV, SKILLS.NLP, SKILLS.Python, SKILLS.OpenCV],
    type: 'AI',
  },
  {
    name: 'High-Accuracy, Low-Cost Model for Indonesian Logistics Sentiment Analysis',
    image: 'images/projects/cb sentiment analysis/image1.png',
    date: 'Oct 2023',
    description:
      'Conducted an experimentona "High-Accuracy, Low-Cost" model for sentiment analysis using self-acquired and pseudo-labeled data obtained through web scraping. The focus of the analysis was on the Indonesian logistics industry.',
    links: [
      {
        name: 'Slides',
        link: 'https://docs.google.com/presentation/d/1Lpaqc8JIjlVnWu0VdvE3ww51-joKPPa554qvu7F40Dk/edit?usp=sharing',
      },
      {
        name: 'Proposal',
        link: 'https://docs.google.com/document/d/1b2yb6K0zvnY7AKaKJ1S5jNREaXFXh69Dmo1Q34D6eEE/edit?usp=sharing',
      },
    ],
    skills: [SKILLS.ML, SKILLS.NLP, SKILLS.Python, SKILLS.HuggingFace],
    type: 'AI',
  },
  {
    name: 'Helm Detection on Motorcycle Drivers in Indonesia using Deformable DETR',
    image: 'images/projects/helm detection/image1.png',
    date: 'Jul 2023',
    description:
      'Conducted research for the purpose of GEMASTIK XVI selection. Utilized CCTVs from Bali Tower to create our own dataset.',
    links: [
      {
        name: 'Paper',
        link: 'https://drive.google.com/file/d/1G57th3X3WgnTZwvZypZZSqBeoVZY_eaH/view?usp=drive_link',
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.CV,
      SKILLS.Python,
      SKILLS.OpenCV,
      SKILLS.Pytorch,
      SKILLS.HuggingFace,
    ],
    type: 'AI',
  },
  {
    name: 'Data Analytics Dashboard Competition Grader Website, COMPFEST 15',
    image: 'images/projects/dad/image1.png',
    date: 'Jun 2023',
    description:
      "This website serves as the platform for the COMPFEST 15 Data Analytics Dash Competition. It is designed to evaluate participants' queries, provide information about the competition, and offer details about the questions. Developed the website using Next.js 13, Fiber, and raw query builder PGX.",
    links: [
      {
        name: 'Website',
        link: 'https://dad.compfest.id/',
      },
    ],
    skills: [
      SKILLS.Go,
      SKILLS.Fiber,
      SKILLS.PGX,
      SKILLS.PostgreSQL,
      SKILLS.Redis,
    ],
    type: 'SE',
  },
  {
    name: 'Pesta Rakyat 2022 & 2023 Website, PERAK 2023',
    image: 'images/projects/perak/image1.png',
    date: 'May 2022, Jun 2023',
    description:
      'Developed the 2022 website and led the team to make the 2023 website to accommodate the Pesta Rakyat Komputer event. It had features like mini e-commerce, a leaderboard, built-in games, a Scan Me game, and many more. Developed the website using T3stack (Next.js + tRPC +Prisma) and utilized NextAuth.js for authentication.',
    links: [
      {
        name: 'Website',
        link: 'https://perak.cs.ui.ac.id/',
      },
    ],
    skills: [
      SKILLS.TypeScript,
      SKILLS.NextJS,
      SKILLS.Prisma,
      SKILLS.tRPC,
      SKILLS.PostgreSQL,
      SKILLS.TailwindCSS,
      SKILLS.Strapi,
    ],
    type: 'SE',
  },
  {
    name: 'Segmentation Self-Driving Car',
    image: 'images/projects/segmentation car/image1.png',
    date: 'Aug 2022',
    description:
      'This project involved training a semantic segmentation model using an image dataset from Cityscapes. Three experiments were conducted using three di erent models namely U-Net, FCN8s, and U-Net x Mobile-Net V2.',
    links: [
      {
        name: 'Source code',
        link: 'https://github.com/edutjie/Computer-Vision-Indonesia.AI/blob/main/8.%20Final%20Project/segmentation_self_driving_car.ipynb',
      },
      {
        name: 'LinkedIn Post',
        link: 'https://www.linkedin.com/posts/edutjie_final-project-segmentation-self-driving-activity-6971711279463903232-E7xZ?utm_source=share&utm_medium=member_desktop',
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.CV,
      SKILLS.Python,
      SKILLS.OpenCV,
      SKILLS.Tensorflow,
    ],
    type: 'AI',
  },
]
