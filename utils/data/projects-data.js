import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "E-commerce website",
    description:
      "I developed a dynamic and responsive e-commerce website using React.js and Tailwind CSS for the frontend, combined with Laravel for the backend. The frontend offers a smooth and intuitive user experience with modern UI elements, fast load times, and seamless navigation. Tailwind CSS helped me create a responsive design that adapts beautifully to various screen sizes. On the backend, Laravel powers a robust and secure API, handling product management, user authentication, and payment processing efficiently. This project demonstrates my full-stack development skills, integrating modern technologies to deliver a high-performing, scalable e-commerce solution.",
    tools: ["ReactJs", "Laravel", "Tailwind css", "Css", "API", "NodeJs"],
    role: "Full stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Weather App",
    description:
      "I built a responsive Weather App using React.js and Tailwind CSS for the frontend, while integrating data from the Current Weather API for the backend. The app allows users to search for real-time weather updates by city, displaying detailed weather conditions such as temperature, humidity, and wind speed. The sleek and modern UI, designed with Tailwind CSS, ensures a smooth user experience across various devices. This project showcases my ability to work with external APIs and create dynamic, user-friendly applications with clean, efficient code.",
    tools: ["ReactJS", "Tailwind CSS", "API", "JavaScript", "Css"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "IPTV Website",
    description:
      "I developed an IPTV website utilizing Angular 17 and TypeScript to create a scalable, high-performance frontend. The layout and design were crafted with Bootstrap and CSS, while I integrated NG Flex and NG Prime to enhance the user interface with flexible grids and pre-built components. The site dynamically fetches and displays TV channel data from an external API and JSONServer, allowing users to browse channels easily and access real-time content. This project highlights my expertise in modern Angular frameworks, API integration, and building responsive, interactive web applications.",
    tools: [
      "Angular 17",
      "Bootstrap",
      "CSS",
      "NG Flex",
      "NG Prime",
      "TypeScript",
      "API",
      "JSONServer",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Crud App",
    description:
      "I created a Simple CRUD Application using Angular 17 and TypeScript to perform essential operations like create, read, update, and delete (CRUD) data entries. The frontend design was implemented with Bootstrap and CSS for a clean, responsive interface. Users can easily add new items, edit existing ones, view detailed information, and delete entries. This app is powered by an efficient, reusable component-based structure, showcasing my ability to implement core CRUD functionality in a dynamic, user-friendly application.",
    tools: ["Angular 17", "TypeScript", "Bootsrap", "Css", "Html"],
    code: "",
    demo: "",
    image: ayla,
    role: "Front-end Developer",
  },
];
