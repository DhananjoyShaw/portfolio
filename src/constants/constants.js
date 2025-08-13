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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "Next JS",
        icon: Nextjs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "PostgreSQL",
        icon: PostgreSQL,
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
            "A comprehensive, full-stack platform that provides three distinct portals: one for patients to easily find doctors and book appointments, one for doctors to manage their profiles and schedules, and a comprehensive dashboard for admins to oversee the entire operation. The result is a seamless, role-based application that streamlines the healthcare experience for everyone involved.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            }, {
                name: "Node.js",
                color: "pink-text-gradient",
            }, {
                name: "Express.js",
                color: "blue-text-gradient",
            }, {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            }, {
                name: "MongoDB",
                color: "green-text-gradient",
            }, {
                name: "Cloudinary",
                color: "blue-text-gradient",
            }, {
                name: "Razorpay",
                color: "green-text-gradient",
            },
        ],
        image: ProjectCover1,
        source_code_link: "https://github.com/cryptasim/Doctor-Booking-Application",
    },
    {
        name: "GearGrid",
        description:
            "A modern, full-stack application using Next.js for high performance, PostgreSQL with the Prisma ORM, and integrated Gemini AI to power the visual search and car details extraction feature. The result is a responsive, modern marketplace that offers a truly innovative way for users to find and test drive their next vehicle.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            }, {
                name: "Gemini AI",
                color: "pink-text-gradient",
            },
            {
                name: "Supabase",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            }, {
                name: "Prisma",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            }, {
                name: "Shadcn UI",
                color: "green-text-gradient",
            },
        ],
        image: ProjectCover2,
        source_code_link: "https://github.com/DhananjoyShaw/gear-grid",
    },
    {
        name: "JobForge",
        description:
            "A modern, full-stack job portal with role-based authentication where students can build profiles and apply for jobs, and recruiters can post positions and manage applicants. I developed this MERN stack application, implementing JWT authentication, real-time job updates using Redux for state management, and Cloudinary for resume uploads.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            }, {
                name: "redux",
                color: "blue-text-gradient",
            }, {
                name: "Node.js",
                color: "pink-text-gradient",
            }, {
                name: "Express.js",
                color: "blue-text-gradient",
            }, {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            }, {
                name: "MongoDB",
                color: "green-text-gradient",
            }, {
                name: "Cloudinary",
                color: "blue-text-gradient",
            },
        ],
        image: ProjectCover3,
        source_code_link: "https://github.com/DhananjoyShaw/job-portal",
    }, {
        name: "ChatStack",
        description:
            "A full-stack chat application built on the MERN stack that goes beyond simple text messaging, featuring one-on-one chats, group chat functionality, and integrated file sharing. My role was to build the application, with a focus on implementing Socket.IO for instant, bidirectional communication and Cloudinary for optimized media transfers.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            }, {
                name: "Socket.IO",
                color: "blue-text-gradient",
            }, {
                name: "Node.js",
                color: "pink-text-gradient",
            }, {
                name: "Express.js",
                color: "blue-text-gradient",
            }, {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            }, {
                name: "MongoDB",
                color: "green-text-gradient",
            }, {
                name: "Cloudinary",
                color: "blue-text-gradient",
            },
        ],
        image: ProjectCover4,
        source_code_link: "https://github.com/DhananjoyShaw/Chat-Application",
    },
];

export { services, technologies, experiences, projects };


