import { SKILLS } from '../skills'
import { ProjectType } from './interface'

export const PROJECTS: ProjectType[] = [
  {
    name: 'FrOG: Framework of Open GraphRAG',
    image: 'images/projects/frog/image1.png',
    date: '2025',
    description:
      'Conducted a study introducing an open GraphRAG, a system that integrates Retrieval-Augmented Generation (RAG) with knowledge graphs (KGs) for question-answering (QA). The research leveraged open source large language models (LLMs) to generate SPARQL queries on Wikidata, DBpedia and Local KGs. Manuscript has been published at the ESWC LLM-TEXT2KG 2025.',
    links: [
      {
        name: 'Paper',
        link: 'https://ceur-ws.org/Vol-4020/Paper_ID_7.pdf',
      },
    ],
    skills: [SKILLS.LangChain, SKILLS.RAG, SKILLS.KnowledgeGraph, SKILLS.LLM, SKILLS.NLP, SKILLS.Python, SKILLS.SPARQL],
    type: 'Research Publication',
  },
  {
    name: 'Towards an Open NLI LLM-based System for KGs: A Case Study of Wikidata',
    image: 'images/projects/nli-kg/image1.png',
    date: '2024',
    description:
      'Preliminary study for the FRoG: Framework of Open GraphRAG research. Manuscript has been published at the International Seminar on Research of Information Technology and Intelligent Systems (ISRITI) 2024.',
    links: [
      {
        name: 'Proceedings',
        link: 'https://ieeexplore.ieee.org/document/10963661',
      },
    ],
    skills: [SKILLS.LangChain, SKILLS.RAG, SKILLS.KnowledgeGraph, SKILLS.LLM, SKILLS.NLP, SKILLS.Python, SKILLS.SPARQL],
    type: 'Research Publication',
  },
  {
    name: 'Analysis of the 2024 Presidential Election Campaign Using Lexical Mutations Network, Public Stance, and Civility Tendency on Social Media',
    image: 'images/projects/election-analysis/image1.png',
    date: '2024',
    description:
      'Conducted research analytics project employed innovative methods like lexical mutation analysis, stance classification, and civility assessment to provide insights into the dynamics of social media discourse during the election campaign.',
    links: [
      {
        name: 'Slides',
        link: 'https://drive.google.com/file/d/1V0vUd1qH7-YPac044EeQka8AK3ei8407/view?usp=drive_link',
      },
      {
        name: 'Proposal',
        link: 'https://drive.google.com/file/d/1ndZ2PceM5PIP7JRswWmhNAPOXqh3pUu-/view?usp=drive_link',
      },
    ],
    skills: [SKILLS.ML, SKILLS.NLP, SKILLS.Gephi, SKILLS.Python],
    type: 'Project',
  },
  {
    name: 'Automatic Assignment of Community Reports on the CRM Platform Using Early Fusion Multimodal Transformer',
    image: 'images/projects/crm/image1.png',
    date: '2024',
    description:
      'Conducted an experiment that leveraged Transformer-based models such as DINOv2 and E5 to automatically assign community reports in Jakarta to the respective agencies, aiming to enhance the efficiency of the reporting process. Manuscript has been accepted for publication in the Journal of Computer Sciences and Information (JIKI) and expected to be published in the next volume in February 2026.',
    links: [
      {
        name: 'Paper',
        link: 'https://drive.google.com/file/d/1f3iNid15NXVFoLfYQfgfGdZvATOsu5IU/view?usp=drive_link',
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.CV,
      SKILLS.NLP,
      SKILLS.Python,
    ],
    type: 'Research Publication',
  },
  {
    name: 'PilgrimPal - Umroh AI App',
    image: 'images/projects/pilgrimpal/image1.jpeg',
    date: '2024',
    description:
      'PilgrimPal is an AI-based mobile application that aims to help pilgrims with their activities related to Umrah. This app contributes to helping pilgrims communicate, informing them of crowdedness in an area, and identifying their future needs. Our two main features are live CCTV crowd detection and AI chatbot assistant.',
    links: [
      {
        name: 'Pitch Deck',
        link: 'https://www.canva.com/design/DAF7nQXyLso/oGE0B96UUZniNcxempFxJQ/view?',
      },
      {
        name: 'Prototype Release',
        link: 'https://github.com/PilgrimPal/pilgrimpal-app/releases/tag/0.1.0%2B2',
      },
    ],
    skills: [
      SKILLS.CV,
      SKILLS.NLP,
      SKILLS.Python,
      SKILLS.FastAPI,
      SKILLS.Redis,
      SKILLS.GCP,
    ],
    type: 'Project',
  },
  {
    name: 'Transjakarta Demo App',
    image: 'images/projects/tj app/image1.png',
    date: '2023',
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
    type: 'Project',
  },
  {
    name: 'Duren Search Engine',
    image: 'images/projects/duren/image1.png',
    date: '2023',
    description:
      'Developed a search engine website that utilizes a Learning to Rank technique. The technique is trained and indexed using the WikiCLIR dataset.',
    links: [
      {
        name: 'Website',
        link: 'https://duren.edutjie.net/',
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
    ],
    type: 'Project',
  },
  {
    name: 'Image-based Drugs Search Engine using OCR and Levenshtein Algorithm',
    image: 'images/projects/drug ocr/image1.png',
    date: '2023',
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
    type: 'Project',
  },
  {
    name: 'High-Accuracy, Low-Cost Model for Indonesian Logistics Sentiment Analysis',
    image: 'images/projects/cb sentiment analysis/image1.png',
    date: '2023',
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
    skills: [SKILLS.ML, SKILLS.NLP, SKILLS.Python],
    type: 'Project',
  },
  {
    name: 'Helm Detection on Motorcycle Drivers in Indonesia using Deformable DETR',
    image: 'images/projects/helm detection/image1.png',
    date: '2024',
    description:
      'Conducted research that leveraged Transformer-based object detection model, Deformable DETR to detect helmet usage on motorcycle riders. Utilized CCTVs from Bali Tower to create our own dataset. Manuscript published for publication to the National Student Performance Bulletin in Information and Communication Technology.',
    links: [
      {
        name: 'Journal',
        link: 'https://buletingemastik.id/index.php/bg/article/view/202404.009',
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.CV,
      SKILLS.Python,
      SKILLS.Pytorch,
    ],
    type: 'Research Publication',
  },
  {
    name: 'Data Analytics Dashboard Competition Grader Website, COMPFEST 15',
    image: 'images/projects/dad/image1.png',
    date: '2023',
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
    type: 'Project',
  },
  {
    name: 'Pesta Rakyat 2022 & 2023 Website, PERAK 2023',
    image: 'images/projects/perak/image1.png',
    date: '2022 & 2023',
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
    type: 'Project',
  },
  {
    name: 'Segmentation Self-Driving Car',
    image: 'images/projects/segmentation car/image1.png',
    date: '2022',
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
    type: 'Project',
  },
]
