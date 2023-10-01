import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    wetindey,
    lasco,
    tesla,
    shopify,
    blizz,
    calculator,
    ectasy,
    worldnike,
    canineland,
    luckyshrub,
    jobit,
    tripguide,
    threejs,
    php,
    sql,
    sass,
    // wordpress,
    tomzy,
    bigb,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Hardware Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "My SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Worpress",
    //   icon: wordpress,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Wetindey",
      icon: wetindey,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Development and maintainance of web applications using PHP and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Keeping tabs and updating web applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Hardware Engineer",
      company_name: "Lasco",
      icon: lasco,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Detecting personal computers issues",
        "Performance testing of computers and hardware devices",
        "Updating drives and installation of necessary softwares for better functionality on computers",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "This is a great job, I  love the attention to details and how responsive it was to use it!. Higly recommended developer",
      name: "Tommy Alpher",
      designation: "Writer",
      company: "Freelancing",
      image: tomzy,
    },
    {
      testimonial:
        "I love the ectasy site. It has the latest entertainment news available and it is easy to use. I will recommend it.",
      name: "Bammy XI",
      designation: "Psychologist",
      company: "Tokabam",
      image: bigb,
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "BLIZZ",
      description:
        "Web-based platform that allows users to share and download memories, pictures.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blizz,
      source_code_link: "https://github.com/Chengo-ril/blizzed",
      source_web_link: "https://blizznew.netlify.app/",
    },
    {
      name: "Calculator",
      description:
        "Web-based platform that allows you to make mathematical calculations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/Chengo-ril/newcalc",
      source_web_link: "https://chengo-ril.github.io/newcalc/",
    },
    {
      name: "Ectasy",
      description:
        "Web-based platform that allows users to share and download memories, pictures.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: ectasy,
      source_code_link: "https://github.com/Chengo-ril/BLACK",
      source_web_link: "https://ectasy.000webhostapp.com/",
    },
    {
      name: "Canine Land",
      description:
        "Web application that enables users to find the perfect dog to adopt",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: canineland,
      source_code_link: "https://github.com/Chengo-ril/canineland",
      source_web_link: "https://canineland.netlify.app/",
    },
    {
      name: "Lucky Shrub",
      description:
        "Website that allows you pick the perfect plant for your home, office and workspace.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: luckyshrub,
      source_code_link: "https://github.com/Chengo-ril/Lucky",
      source_web_link: "https://chengo-ril.github.io/Lucky/",
    },
    {
      name: "World Nike",
      description:
        "Web-based platform that allows users to find the perfect footwear.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: worldnike,
      source_code_link: "https://github.com/Chengo-ril/nikestore",
      source_web_link: "https://worldnike.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };