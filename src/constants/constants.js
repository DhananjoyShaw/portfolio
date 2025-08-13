import {
    cpp, java, python, html, css, backend, creator, mobile, web, javascript,
    typescript, reactjs, Accenture, redux, tailwind, nodejs,
    mongodb, git, docker, ProjectCover1, ProjectCover2, ProjectCover3, ProjectCover4,
    Nextjs, PostgreSQL, Prisma, Supabase,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: " Data Scientist",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "C++",
        icon: cpp,
    }, {
        name: "Java",
        icon: java,
    }, {
        name: "Python",
        icon: python,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Next JS",
        icon: Nextjs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "PostgreSQL",
        icon: PostgreSQL,
    }, {
        name: "Prisma",
        icon: Prisma,
    }, {
        name: "Supabase",
        icon: Supabase,
    },
];

const experiences = [
    {
        title: "Development & Advanced Engineering Job Simulation",
        company_name: "Accenture North America",
        icon: Accenture,
        iconBg: "#383E56",
        date: "March 2025 - March 2025",
        points: [
            "Completed a job simulation where I supported a client with a small development team overwhelmed by the growth of their code base.",
            "Wrote a class to perform search on an interactive website in Java using the Spring Boot framework.",
            "Set up automated builds using Jenkins to validate code changes on every push.",
            "Managed the team's workload by preparing for a sprint and writing user stories in an Agile planning session.",
        ],
    },
];

const projects = [
    {
        name: "NovaMed",
        description:
            "A comprehensive, full-stack web application designed to streamline the process of booking doctor appointments for patients, doctors, and administrators. The Doctor Booking Application provides a seamless experience for users to register, browse doctors by specialty, book and manage appointments, and handle payments securely. Administrators can efficiently manage doctors, appointments, and users through a dedicated admin portal, while doctors can view and manage their schedules and profiles.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: ProjectCover1,
        source_code_link: "https://github.com/cryptasim/Doctor-Booking-Application",
    },
    {
        name: "GearGrid",
        description:
            "A modern, full-stack car marketplace built with Next.js 15, featuring AI-powered image search, test drive bookings, and comprehensive car management. GearGrid provides an intuitive platform for users to discover, save, and test drive vehicles with advanced search capabilities.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: ProjectCover2,
        source_code_link: "https://github.com/DhananjoyShaw/gear-grid",
    },
    {
        name: "JobForge",
        description:
            "A modern job portal application that connects students with recruiters, featuring role-based authentication, job posting/application management, and real-time search functionality.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: ProjectCover3,
        source_code_link: "https://github.com/DhananjoyShaw/job-portal",
    }, {
        name: "ChatStack",
        description:
            "A modern real-time chat application using the MERN stack with a React front-end and Node.js back-end, featuring individual messaging, group chats, file sharing, and real-time communication using Socket.IO.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: ProjectCover4,
        source_code_link: "https://github.com/DhananjoyShaw/Chat-Application",
    },
];

export { services, technologies, experiences, projects };


