export interface ProjectLink {
  google?: string;
  apple?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink;
  status: string;
  year?: string;
  type?: string;
  screenshots?: string[];
  longDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RopQuiz",
    description:
      "Think you're good at quizzes? RobQuiz Play challenges your brain with hundreds of fun quizzes across all categories — completely free. From general knowledge, football, geography, history, movies, flags, countries, and top-ten challenges, there's always something new to test yourself with.",
    image: "/images/Quiz/webp/cover_image.webp",
    tags: [
      "Bloc/Cubit",
      "Clean Architecture",
      "Firebase",
      "oAuth",
      "Ads",
      "Dio",
    ],
    links: {
      google:
        "https://play.google.com/store/apps/details?id=com.robquiz.app",
      apple: "https://apps.apple.com/us/app/robquiz/id6749267275",
    },
    status: "Completed",
    screenshots: [
      "/images/Quiz/webp/f1.webp",
      "/images/Quiz/webp/f2.webp",
      "/images/Quiz/webp/f3.webp",
      "/images/Quiz/webp/f4.webp",
      "/images/Quiz/webp/f5.webp",
      "/images/Quiz/webp/f6.webp",
      "/images/Quiz/webp/f7.webp",
      "/images/Quiz/webp/f8.webp",
    ],
  },
  {
    id: 2,
    title: "SCA",
    description:
      "Engineer, contractor, marketer, or factory owner? All your professional tools in one place! A centralized marketplace for building materials and experts. SCA The Smart Platform for Construction & Contracting. - Smart Construction Assistant. Engineer, contractor, marketer, or factory/exhibition owner? All your professional tools in one place! Features include: Profile/Company Page to showcase skills, Centralized Marketplace to search for materials/offers, Secure Communication with suppliers, and Global Network connection. 100% Free with no hidden fees.",
    image: "/images/sca/webp/s0.webp",
    tags: [
      "Bloc/Cubit",
      "Clean Architecture",
      "Firebase",
      "oAuth",
      "Chats",
      "Apis",
      "Dio",
      "Notifications",
    ],
    links: {
      google:
        "https://play.google.com/store/apps/details?id=com.sca_online.app&hl=en",
      apple: "https://apps.apple.com/us/app/smart-contracting-assistant/id6748751862",
    },
    status: "Completed",
    screenshots: [
      "/images/sca/webp/s0.webp",
      "/images/sca/webp/s00.webp",
      "/images/sca/webp/s000.webp",
      "/images/sca/webp/s1.webp",
      "/images/sca/webp/s2.webp",
      "/images/sca/webp/s5.webp",
      "/images/sca/webp/s6.webp",
      "/images/sca/webp/s11.webp",
      "/images/sca/webp/ss3.webp",
    ],
  },
  {
    id: 3,
    title: "NightDream",
    description:
      "Night Dream is an app designed to help you plan weddings, exhibitions, and private parties by providing a comprehensive directory of event services.",
    image: "/images/night dream/webp/cover.webp",
    tags: [
      "Bloc/Cubit",
      "Clean Architecture",
      "Firebase",
      "oAuth",
      "Apis",
      "Dio",
      "Notifications",
      "Payments",
      "Sqflite",
    ],
    links: {
      google:
        "https://play.google.com/store/apps/details?id=online.nightdream.app",
      apple: "https://apps.apple.com/us/app/night-dream-app/id6748253872",
    },
    status: "Completed",
    screenshots: [
      "/images/night dream/webp/f1.webp",
      "/images/night dream/webp/f2.webp",
      "/images/night dream/webp/f3.webp",
      "/images/night dream/webp/f4.webp",
      "/images/night dream/webp/f5.webp",
      "/images/night dream/webp/f6.webp",
    ],
  },
  {
    id: 4,
    title: "Moragea",
    description:
      "Book appointments with doctors based on real-time availability. Choose hospitals, book online or on-site, and handle payments securely.",
    image: "/images/moragea/webp/cover_imag.webp",
    tags: [
      "Bloc/Cubit",
      "Clean Architecture",
      "Firebase",
      "oAuth",
      "Apis",
      "Dio",
      "Notifications",
      "Payments",
      "Video Call (Agora)",
      "Chats",
    ],
    links: {
      demo:
        "https://drive.google.com/file/d/1AzxyTpLcOPpobfJI_CdQPw2Hh1rLVdbG/view?usp=drive_link",
    },
    status: "Completed",
    screenshots: [
      "/images/moragea/webp/m1.webp",
      "/images/moragea/webp/m2.webp",
      "/images/moragea/webp/m3.webp",
      "/images/moragea/webp/m4.webp",
      "/images/moragea/webp/m5.webp",
      "/images/moragea/webp/m6.webp",
      "/images/moragea/webp/m7.webp",
      "/images/moragea/webp/m8.webp",
    ],
  },
  {
    id: 5,
    title: "Keramik",
    description:
      "Through the application, we can order food from the restaurant, view food options, specify the desired location on the map, view the meal in the form of a three-dimensional image, in addition to the possibility of electronic payment and many other features.",
    image: "/images/Karamice/webp/cover_k3.webp",
    tags: ["Maps", "Mulite language", "Notifications"],
    links: {
      demo:
        "https://drive.google.com/file/d/1849a06Vr8fQpyw3iF2Lg2TvF4pUKR_r5/view?usp=drive_link",
    },
    status: "Completed",
    screenshots: [
      "/images/Karamice/webp/k1.webp",
      "/images/Karamice/webp/k2.webp",
      "/images/Karamice/webp/k4.webp",
      "/images/Karamice/webp/k5.webp",
    ],
  },
  {
    id: 6,
    title: "Rehearsals",
    description:
      "AI Interview Coach is a Flutter-based web app that helps you practice real job interviews. The AI asks you tailored questions based on your field or specialty, then analyzes your answers to highlight your strengths and weaknesses. This helps you improve your performance and feel more confident in actual job interviews. Many more features are waiting to be explored — let's discover them together!",
    image: "/images/Rehearsals/webp/cover_1.webp",
    tags: [
      "Flutter Web",
      "JS Interop",
      "Fatoorah",
      "Localization",
      "Charts",
      "Audio/Mic",
    ],
    links: {},
    status: "Completed",
    screenshots: [
      "/images/Rehearsals/webp/2.webp",
      "/images/Rehearsals/webp/3.webp",
      "/images/Rehearsals/webp/4.webp",
      "/images/Rehearsals/webp/5.webp",
      "/images/Rehearsals/webp/6.webp",
    ],
  },
  {
    id: 7,
    title: "Dentist",
    description:
      "Dentist App is a mobile app that makes booking doctor appointments easy and convenient. Users can view the doctor's working hours and holidays, then schedule appointments accordingly with just a few taps. Doctors can manage all patient appointments, access medical inventory, and explore many more powerful features designed to simplify their workflow.",
    image: "/images/dentist app/webp/cover.webp",
    tags: ["REST API", "AI"],
    links: {
      demo:
        "https://drive.google.com/file/d/1SQ7Xa3sN-Mi2NckCoxqQyjorIcrXH6fs/view",
    },
    status: "Completed",
    screenshots: [
      "/images/dentist app/webp/d2.webp",
      "/images/dentist app/webp/d3.webp",
      "/images/dentist app/webp/d4.webp",
      "/images/dentist app/webp/d5.webp",
      "/images/dentist app/webp/d6.webp",
      "/images/dentist app/webp/d7.webp",
      "/images/dentist app/webp/d8.webp",
      "/images/dentist app/webp/d9.webp",
      "/images/dentist app/webp/d10.webp",
      "/images/dentist app/webp/d11.webp",
      "/images/dentist app/webp/d13.webp",
      "/images/dentist app/webp/d14.webp",
      "/images/dentist app/webp/d15.webp",
    ],
  },
  {
    id: 8,
    title: "Qasaudna",
    description:
      "Qasaudna is a mobile app that lets you explore and listen to poems recited by your favorite poets. You can also search for songs and discover artistic content in one place. If you're a poet yourself, you can join the platform and publish your own poems for others to enjoy. There's so much more waiting for you — let's explore it together!",
    image: "/images/Qasaudna/webp/cover_q1.webp",
    tags: ["Flutter", "REST API", "Animations", "Riverpod"],
    links: {
      demo:
        "https://drive.google.com/file/d/1YDN4IZeELOBw4vRPempj6nVz7eUoTqgi/view?usp=drive_link",
    },
    status: "Completed",
    year: "2024",
    type: "Application",
    screenshots: [
      "/images/Qasaudna/webp/q2.webp",
      "/images/Qasaudna/webp/q3.webp",
      "/images/Qasaudna/webp/q4.webp",
      "/images/Qasaudna/webp/q5.webp",
      "/images/Qasaudna/webp/q6.webp",
      "/images/Qasaudna/webp/q7.webp",
      "/images/Qasaudna/webp/q8.webp",
      "/images/Qasaudna/webp/q9.webp",
      "/images/Qasaudna/webp/q10.webp",
      "/images/Qasaudna/webp/q11.webp",
    ],
    longDescription:
      "Qasaudna is a mobile app that lets you explore and listen to poems recited by your favorite poets. You can also search for songs and discover artistic content in one place. If you're a poet yourself, you can join the platform and publish your own poems for others to enjoy. There's so much more waiting for you — let's explore it together!",
  },
  {
    id: 9,
    title: "Dental Lap",
    description:
      "Beautiful weather forecasts with detailed metrics and location-based alerts. Clean UI design.",
    image: "/images/dental lap/cover.jpg",
    tags: ["Flutter", "REST API", "Animations", "Riverpod"],
    links: {},
    status: "In Progress",
    screenshots: [
      "/images/dental lap/kl1.jpg",
    ],
  },
  {
    id: 10,
    title: "Sooq Syria",
    description:
      "Beautiful weather forecasts with detailed metrics and location-based alerts. Clean UI design.",
    image: "/images/sooq syria/cover_image1.png",
    tags: ["Flutter", "REST API", "Animations", "Riverpod"],
    links: {},
    status: "In Progress",
  },
];
