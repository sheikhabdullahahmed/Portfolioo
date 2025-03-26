interface Project {
    id: number;
    title: string;
    stack: string;
    imgUrl: string;
    url: string;
    github: string;
  }
  
  
  const AIRDATA: { projects: Project[] } = {
    projects: [
      {
        id: 1,
        title: 'Animated Landing Page',
        stack: 'Others',
        imgUrl:
          'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800477/yodkwtf.com/projects/Screenshot_4_-min_e9runx.jpg',
        url: 'https://landingpageanimations-dk.netlify.app/',
        github:
          'https://github.com/yodkwtf/random-cool-projects/tree/main/02-smooth-page-transiitons',
      },
      {
        id: 2,
        title: 'Budget Logger',
        stack: 'Others',
        imgUrl:
          'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800478/yodkwtf.com/projects/Screenshot_2_-min_my526g.jpg',
        url: 'https://financelogger-dk.netlify.app/',
        github:
          'https://github.com/yodkwtf/typescript-projects/tree/main/01-finance-logger',
      },
      {
        id: 3,
        title: 'chat application',
        stack: 'nodejs',
        imgUrl:
          'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800480/yodkwtf.com/projects/newwwwww_dxihfk.webp',
        url: 'https://chat-app-dk.onrender.com/',
        github: 'https://github.com/yodkwtf/nodejs-chat-app',
      },
    ],
  };
  
  export default AIRDATA
  