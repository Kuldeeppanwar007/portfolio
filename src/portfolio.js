/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Kuldeep Panwar",
  title: "Hi all, I'm Kuldeep",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XgtNVQw6adnHz6NhB06qh35WWiY45LN1/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Linksw

const socialMediaLinks = {
  github: "https://github.com/kuldeeppanwar007",
  linkedin: "https://www.linkedin.com/in/kuldeep-panwar-0433a5184/",
  hackerrank: "https://www.hackerrank.com/kuldeeppanwar007",
  gmail: "kuldeeppanwar7697@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/kuldeep.panwar007',
  twitter: 'https://twitter.com/kuldeeppanwar_7',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sant Singaji Institute Of Science And Management",
      logo: require("./assets/images/ssism.png"),
      subHeader: "Bachelors in Computer Application (BCA)",
      duration: "September 2020 - April 2023",
      desc: "",
      web: true,
      link: "http://ssism.singaji.in/",
      descBullets: [

      ]
    },
    {
      schoolName: "Shree vidhya sagar public school",
      logo: require("./assets/images/vidhyasagar.jpg"),
      subHeader: "10th (CBSE) + 12th (MP_Board)",
      duration: "September 2018 - April 2020",
      desc:
        "",
      web: false,
      link: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "cloud (Learing)",
      progressPercentage: "25%"

    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kuldeeppanwar007", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THERE ARE SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/LaptopManage.jpg"),
      projectName: "Laptop and Accesoris Management",
      projectDesc: "Laptop and Accesoris Management project that manages the currently allocated to the users(staff,studens,...etc) and also history of accessories",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://inventryfrontend.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/amazonClone.jpg"),
      projectName: "Amazon Clone",
      projectDesc: "Clone of amazon and technology uses are React Js , Firebase",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-60f52.web.app/"
        },
        {
          name: "github Link",
          url: "https://github.com/Kuldeeppanwar007/amazon-clone"
        }
      ]
    },
    {
      image: require("./assets/images/idCard.png"),
      projectName: "Student And Teacher Id Card Generator",
      projectDesc: "technology used are React Js , Node Js for (Sant Singaji Institute Of Science And Management)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://id-cards-ssism.herokuapp.com/"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "6232710975",
  email_address: "kuldeeppanwar7697@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kuldeeppanwar_07", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
