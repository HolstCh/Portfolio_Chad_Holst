export const projects = [
    {
        id: 1,
        title: "Unmanned Underwater Vehicle",
        subtitle: "Python, Pymavlink, Drone Prototype, and Electronics",
        description:
            "This research project involves designing and implementing a software/hardware integration to provide control for a drone prototype. Our team successfully integrated various electronic components and developed software to control the underwater drone. We had developed a GUI using Python that is capable of communicating with a Raspberry Pi and PX4 flight controller to send commands and read movement data. The project consists of a GUI, a Raspberry Pi 3 Model B, Pixhawk 4 autopilot, a drone prototype, and other various electronics.",
        summary:
            "GUI that integrates electronics for a drone prototype using the MAVlink protocol",
        src: "../images/drone.jpg",
        alt: "Drone Control Project",
        link: "https://github.com/HolstCh/Unmanned_Underwater_Vehicle",
    },
    {
        id: 0,
        title: "University of Calgary Marketplace",
        subtitle: "MERN stack (MongoDB, Express, React, and Node.js)",
        description:
            "This web application is designed specifically for students to sell or purchase items conveniently at the university. Student users are able to create posts for the purpose of buying or selling items. When a student creates a post, it will include information about the item they wish to sell or buy, their contact information (email or phone), and an option to chat through our built in real-time messaging platform. Admin users are also supported which have the ability to ban students and delete users/posts.",
        summary:
            "Responsive marketplace web application for students at U of C to communicate regarding buy and sell posts",
        src: "../images/buy.png",
        alt: "Marketplace Web Application Project",
        link: "https://github.com/HolstCh/UofCMarketplace",
    },
    {
        id: 0,
        title: "ML Models for Predicting a Song's Genre",
        subtitle: "Apache Spark and Python",
        description:
            "This Jupyter notebook implemented and compared various ML models for predicting whether a song is pop or rap (binary classification). The project utilizes sentiment analysis (AFINN) to facilitate training each model. The model types we evaluated are Logistic Regression, Decision Tree, Random Forest and Gradient Boosted Trees (GBT). We evaluated each model using accuracy, precision, recall, f-score, and AUC-ROC metrics.",
        summary:
            "Jupyter notebook that utilizes sentiment analysis and ML to predict if a song is pop or rap",
        src: "../images/ML_Models.jpg",
        alt: "Genre Prediction",
        link: "https://github.com/HolstCh/ML-Models-for-Genre-Prediction",
    },
    {
        title: "Portfolio",
        subtitle: "React and Tailwind CSS",
        description:
            "My personal website that was implemented to showcase some of my software projects. I purchased a domain and hosted the website using Vercel. The website utilizes an API (EmailJS) to receive emails from potential employers and is mobile-responsive.",
        summary:
            "Responsive personal website that is currently being used to view a sample of my software projects",
        src: "../images/portfolio.jpg",
        alt: "Chad's Portfolio",
        link: "https://github.com/HolstCh/Portfolio_Chad_Holst",
    },
];

/**
 *   {
 *         title: "Home Theatre Personal Computer User Interface",
 *         subtitle: "HTML/CSS/JS",
 *         description:
 *             "A user interface designed to integrate various media content and their corresponding applications (e.g., Netflix and Spotify) while practicing Task-Centered System Design. The user interface focuses on movies, TV shows, music, and videos. The interface has a rating system, manages subscriptions, list features, and search/browsing functionalities.",
 *         summary:
 *             "Front-end project that focuses on integrating media content and their corresponding applications",
 *         src: "../images/HTPC.jpg",
 *         alt: "HTPC UI",
 *         link: "https://github.com/HolstCh/HTPC",
 *     },
 *     {
 *         title: "Group Home Data Management System",
 *         subtitle: "Python, Flask, MySQL, and HTML/CSS",
 *         description:
 *             "A web application with a RESTful API that was inspired by the disorganization of my brother's group home workplace. Group homes have many professionals involved; however, the application allows for three professionals to share data involving a youth at risk. The user types are: youth worker, psychologist, and pediatrician. Each user type is able to create a \"document\" which involves inputting data into the user's corresponding HTML form. Every time a document is created, a share code is generated and the user is able to share their document with another user.",
 *         summary:
 *             "Database design, RESTful API, and web application project that allows for sharing data between professionals in a group home",
 *         src: "../images/group_home.jpg",
 *         alt: "Group Home Web Application Project",
 *         link: "https://github.com/HolstCh/Group-Home-Data-Management-Web-Application",
 *         id: 0,
 *     },
 *     {
 *         title: "Professional Forum",
 *         subtitle: "Python, Flask, MySQL, and HTML/CSS/JS",
 *         description:
 *             "This web application was developed to allow professionals to communicate through the use of a forum. The project was inspired by Reddit and LinkedIn. Each user is able to post questions to seek answers regarding problems they are encountering at their workplace. Each user can also search existing questions, post answers to other user's questions, and build their profile (i.e., past projects, companies). The application is currently hosted on PythonAnywhere and the link is in the README of the GitHub repository. ",
 *         summary:
 *             "Reddit and LinkedIn clone designed for professionals to discuss topics within their domain",
 *         src: "../images/forum.png",
 *         alt: "forum project",
 *         link: "https://github.com/HolstCh/Professional-Forum-Web-Application-",
 *         id: 0,
 *     },
 *     {
 *         title: "HTTP Proxy",
 *         subtitle: "C++/Linux",
 *         description:
 *             "Created a proxy that uses TCP sockets and intercepts all HTTP requests and responses between a browser and web server. The proxy redirects each GET request for a JPG image to one of two file paths containing a PNG clown image. Additionally, the proxy replaces a keyword within the HTML message of a web server response with another word.",
 *         summary:
 *             "Proxy that uses TCP sockets and intercepts HTTP requests and responses to replace images/text",
 *         src: "../images/proxy.png",
 *         alt: "proxy project",
 *         link: "https://github.com/HolstCh/HTTP-Proxy",
 *         id: 0,
 *     },
 *     {
 *         title: "Client-Server Decoder",
 *         subtitle: "C++/Linux",
 *         description:
 *             "Two programs based on the client-server model which encodes and decodes messages based on vowels using TCP and UDP sockets. After the client sends an encoded or decoded message, the server responds with a decoded or encoded message respectively. Two streams are used each request, vowels are sent on UDP and non-vowels are sent on TCP.",
 *         summary:
 *             "Message encoder/decoder that uses TCP and UDP sockets which is based on the client-server model",
 *         src: "../images/decoder.jpg",
 *         alt: "decoder project",
 *         link: "https://github.com/HolstCh/Client-Server-Message-Decoder-Encoder",
 *         id: 0,
 *     },
 *     {
 *         title: "Dots and Boxes Browser Game",
 *         subtitle: "JS/HTML/CSS",
 *         description:
 *             "A three-player game influenced by the classic dots and boxes game. Players take turns clicking on a line to complete square(s). If the player completes a square, then they receive an extra turn. The program uses click handling events to enforce game logic, classes for abstraction, and a grid to identify components.",
 *         summary:
 *             "Classic game where players compete to draw the most squares by connecting dots",
 *         src: "../images/dots.png",
 *         alt: "box game project",
 *         link: "https://github.com/HolstCh/Dots_Boxes_Game",
 *         id: 0,
 *     },
 *     {
 *         title: "Ski/Snowboard Club Static Website",
 *         subtitle: "HTML/CSS",
 *         description:
 *             "HTML/CSS static website about a hypothetical snowboarding/skiing club in Calgary. The website informs viewers about events, tutorials, and preparation. It is composed of 5 pages that consist of embedded YouTube videos, images, checklists, tables, and links.",
 *         summary:
 *             "Static website about a hypothetical skiing club in Calgary",
 *         src: "../images/ski_club.png",
 *         alt: "static website project",
 *         link: "https://github.com/HolstCh/Snowboard-Club-Website",
 *         id: 0,
 *     },
 */