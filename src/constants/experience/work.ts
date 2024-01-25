import { SKILLS } from '../skills'
import { SingularExperienceType } from './interface'

const WorkExperience: SingularExperienceType[] = [
  {
    name: 'Traveloka',
    logo: 'images/companies/traveloka.png',
    links: [{ name: 'Website', link: 'https://www.traveloka.com/' }],
    location: 'Tangerang, Indonesia',
    roles: [
      {
        name: 'Backend Engineer Intern',
        date: 'Feb 2024 - Present',
      },
    ],
    skills: [SKILLS.Java, SKILLS.SpringBoot],
  },
  {
    name: 'Transjakarta (Project Based)',
    logo: 'images/companies/transjakarta.png',
    links: [{ name: 'Website', link: 'https://transjakarta.co.id/' }],
    location: 'Depok, Indonesia',
    roles: [
      {
        name: 'Machine Learning Engineer',
        date: 'Oct 2023 - Present',
        description: [
          'Developed a backend system for an app that is integrated with an AI model.',
          'The app features include live bus location, estimated time of arrival (ETA), the ability to search for the nearest bus stops, and many more.',
        ],
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.Python,
      SKILLS.FastAPI,
      SKILLS.GoogleAPI,
      SKILLS.AWS,
    ],
  },
  {
    name: 'RISTEK Fasilkom UI',
    logo: 'images/companies/ristek.png',
    links: [{ name: 'Website', link: 'https://ristek.cs.ui.ac.id/' }],
    date: 'Feb 2023 - Present',
    location: 'Depok, Indonesia',
    roles: [
      {
        name: 'Lead of Data Science & Analytics SIG',
        date: 'Feb 2024 - Present',
      },
      {
        name: 'Lead of Web Development SIG',
        date: 'Feb 2023 - Jan 2024',
        description: [
          'Awarded as the best lead of web development SIG during the first quarter of RISTEK 2023',
          'Contributed to the Data Science SIG by actively participating in various data science competitions.',
          'Collaborate on both internal and external web development projects while also taking charge of guiding and mentoring team members to enhance their prociency in the web development domain.',
        ],
      },
    ],
    skills: [
      SKILLS.ML,
      SKILLS.CV,
      SKILLS.NLP,
      SKILLS.Python,
      SKILLS.Tensorflow,
      SKILLS.Pytorch,
      SKILLS.OpenCV,
      SKILLS.HuggingFace,
      SKILLS.ReactJS,
      SKILLS.NextJS,
      SKILLS.Django,
      SKILLS.ExpressJS,
      SKILLS.PostgreSQL,
    ],
  },
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
    links: [{ name: 'Website', link: 'https://www.sabilamall.co.id/' }],
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
      SKILLS.AWS,
    ],
  },
  {
    name: 'Xeratic',
    logo: 'images/companies/xeratic.jpeg',
    location: 'Tangerang, Indonesia',
    roles: [
      {
        name: 'Data Ops Intern',
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
