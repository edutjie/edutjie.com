import { SKILLS } from '../skills'
import { SingularExperienceType } from './interface'

const WorkExperience: SingularExperienceType[] = [
  {
    name: 'International Olympiad in Artificial Intelligence (IOAI)',
    logo: 'images/companies/ioai.png',
    links: [
      { name: 'Olympiad Website', link: 'https://ioai-official.org/' },
      {
        name: 'News',
        link: 'https://www.planetberita.com/berita/1001378305/tim-indonesia-akan-ikut-di-ajang-international-olympiad-in-artificial-intelligence-ioai-2025',
      },
      {
        name: 'Official IG Post',
        link: 'https://www.instagram.com/p/DLEg7jnR0Eo/',
      },
    ],
    location: 'Jakarta, Indonesia',
    roles: [
      {
        name: 'AI Coach, Indonesian National Team',
        date: 'Jun 2025 - August 2025',
        description: [
          "Mentoring and preparing Indonesia’s top high school students for Indonesia's debut at the 2025 International Olympiad in Artificial Intelligence (IOAI), covering key areas such as machine learning, natural language processing (NLP), computer vision (CV), and data science.",
        ],
      },
    ],
    skills: [SKILLS.Python, SKILLS.ML, SKILLS.NLP, SKILLS.CV, SKILLS.Pytorch],
  },
  {
    name: 'Maknadata',
    logo: 'images/companies/maknadata.png',
    links: [{ name: 'Company Website', link: 'https://www.maknadata.ai/' }],
    location: 'Jakarta, Indonesia',
    roles: [
      {
        name: 'AI Engineer Intern',
        date: 'Jan 2025 - April 2025',
        description: [
          'Worked closely with the CEO on the Criminal Detention Studies in Indonesia project, developing AI-driven solutions.',
          'Built an LLM-powered system to extract key criminal information from unstructured legal documents (e.g., PDFs).',
          'Developed an automated meeting notes generation system for prisoner-officer interviews.',
          'Designed a Chat RAG system leveraging relational databases for efficient information retrieval.',
        ],
      },
    ],
    skills: [SKILLS.LLM, SKILLS.NLP, SKILLS.SLP, SKILLS.PostgreSQL],
  },
  {
    name: 'Media Kernels Indonesia',
    logo: 'images/companies/mki.png',
    links: [{ name: 'Company Website', link: 'https://mediakernels.com/' }],
    location: 'Jakarta, Indonesia',
    roles: [
      {
        name: 'AI Engineer Intern',
        date: 'Sep 2024 - Present',
        description: [
          'Worked directly under the CTO to research, design, and develop an advanced Retrieval-Augmented Generation (RAG) system leveraging diverse data sources, including social media, news outlets, and legal documents.',
        ],
      },
    ],
    skills: [SKILLS.LLM, SKILLS.NLP, SKILLS.Python, SKILLS.FastAPI, SKILLS.TypeScript, SKILLS.PostgreSQL],
  },
  {
    name: 'Traveloka',
    logo: 'images/companies/traveloka.png',
    links: [{ name: 'Company Website', link: 'https://www.traveloka.com/' }],
    location: 'Tangerang, Indonesia',
    roles: [
      {
        name: 'Backend Engineer Intern',
        date: 'Feb 2024 - Jun 2024',
        description: [
          'Part of a core team within the company, the Flight Supply team, which is responsible for managing the technology related to airline inventory.',
          'Successfully improved booking health by ~4%, seat selection availability of the top 3 airline providers by ~10%, and our Memcache effectiveness and hit rate by ~15%',
          'Chosen as an intern out of 8700 applicants.',
        ],
      },
    ],
    skills: [SKILLS.Java, SKILLS.SpringBoot, SKILLS.AWS],
  },
  // {
  //   name: 'Transjakarta (Project Based)',
  //   logo: 'images/companies/transjakarta.png',
  //   links: [{ name: 'Website', link: 'https://transjakarta.co.id/' }],
  //   location: 'Depok, Indonesia',
  //   roles: [
  //     {
  //       name: 'Machine Learning Engineer',
  //       date: 'Oct 2023 - Present',
  //       description: [
  //         'Developed a backend system for an app that is integrated with an AI model.',
  //         'The app features include live bus location, estimated time of arrival (ETA), the ability to search for the nearest bus stops, and many more.',
  //       ],
  //     },
  //   ],
  //   skills: [
  //     SKILLS.ML,
  //     SKILLS.Python,
  //     SKILLS.FastAPI,
  //     SKILLS.GoogleAPI,
  //     SKILLS.Redis,
  //     SKILLS.AWS,
  //   ],
  // },
  {
    name: 'Faculty of Computer Science, Universitas Indonesia',
    headlineRole: 'Teaching Assistant',
    logo: 'images/companies/fasilkom.jpeg',
    date: 'Aug 2022 - Jan 2024',
    location: 'Depok, Indonesia',
    roles: [
      {
        name: 'Teaching Assistant for Data Structure and Algorithms',
        date: 'Aug 2023 - Jan 2024',
        description: [
          'Responsible for aiding professors and providing support to students in comprehending course materials.',
          "Created lab exercises and programming tasks to enhance the students' learning experience.",
        ],
      },
      {
        name: 'Teaching Assistant for Programming Foundations 2',
        date: 'Jan 2023 - Jun 2023',
        description: [
          'Responsible for helping professors and assisting students in helping them better understand the Java materials taught in the Programming Foundations 2 course.',
        ],
      },
      {
        name: 'Teaching Assistant for Programming Foundations 1',
        date: 'Jan 2023 - Jun 2023',
        description: [
          'Responsible for helping professors and assisting students in helping them better understand the Python materials taught in Programming Foundations 1 course.',
        ],
      },
    ],
    skills: [SKILLS.Python, SKILLS.Java],
  },
  {
    name: 'SabilaMall',
    logo: 'images/companies/sabilamall.png',
    links: [{ name: 'Company Website', link: 'https://www.sabilamall.co.id/' }],
    location: 'Depok, Indonesia',
    roles: [
      {
        name: 'Software Engineer Intern',
        date: 'Jun 2023 - Sep 2023',
        description: [
          'Revamped the backend of www.sabilamall.co.id using Express with TypeScript.',
          'This revamp resulted in an impressive average improvement of 50% in response time.',
          'Additionally, we managed and redesigned the MySQL database and successfully migrated it to AWS RDS.',
        ],
      },
    ],
    skills: [
      SKILLS.TypeScript,
      SKILLS.ExpressJS,
      SKILLS.Prisma,
      SKILLS.MySQL,
      SKILLS.Redis,
      SKILLS.AWS,
    ],
  },
  {
    name: 'Xeratic',
    logo: 'images/companies/xeratic.jpeg',
    location: 'Tangerang, Indonesia',
    roles: [
      {
        name: 'Data Ops Engineer Intern',
        date: 'Sep 2022 - Nov 2022',
        description: [
          'Contributed to the Great Giant Foods (GGF) project by utilizing Pentaho for ETL processes and Tableau to create informative dashboards.',
        ],
      },
    ],
    skills: [SKILLS.Pentaho, SKILLS.Tableau, SKILLS.MySQL],
  },
]

export default WorkExperience
