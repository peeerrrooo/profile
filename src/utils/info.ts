import { getAge } from './moment'
import aboutImage from 'resources/img/about-image.jpg'
import ujet from 'resources/img/ujet.svg'
import ismart from 'resources/img/ismart.svg'
import finservice from 'resources/img/finservice.svg'
import pure from 'resources/img/pure.svg'
import zaaptv from 'resources/img/zaaptv.png'

export const info = () => ({
  menu: {
    home: 'Home',
    about: 'About',
    aboutHeader: 'About me',
    services: 'Services',
    resume: 'Resume',
    resumeHeader: 'My skills',
    portfolio: 'Portfolios',
    portfolioHeader: 'Portfolios',
    contact: 'Contact',
    contactHeader: 'Contact me'
  },
  information: {
    hello: 'Hi, I am',
    fullName: 'Daniil Brakk',
    firstName: 'Daniil',
    lastName: 'Brakk',
    aboutContent:
      'I am a Frontend Engineer and I enjoy building client platforms. And also everything that relates to Microservices and Unix Way inspires.',
    github: 'https://github.com/peeerrrooo',
    instagram: 'https://www.instagram.com/daniil.brakk',
    telegram: 'daniilbrakk',
    skype: 'peeerroo',
    age: getAge('18.09.1992'),
    phone: '9233050152',
    nationality: 'Russian',
    language: 'Russian, English',
    email: 'peeerrrooo@gmail.com',
    freelanceStatus: 'Available',
    address: 'Russia, Moscow',
    aboutImage
  },
  services: [
    {
      title: 'Design Systems',
      icon: 'IoMdColorPalette',
      details:
        'Architecture design component library and style themes. Creation of development tools and integration of ui kit into the existing system.'
    },
    {
      title: 'Frontend Development',
      icon: 'FiCode',
      details:
        'Implementation of responsive code for mobile devices, tablets and laptops. Creation of single page applications and isomorphic platforms.'
    },
    {
      title: 'Backend Development',
      icon: 'FiServer',
      details:
        'Designing a microservices architecture focused on the real-time client side. Implementation of code based on websockets.'
    }
  ],
  skills: {
    main: [
      {
        title: 'React',
        href: 'https://reactjs.org'
      },
      {
        title: 'Node.js',
        href: 'https://nodejs.org'
      },
      {
        title: 'Typescript',
        href: 'https://www.typescriptlang.org'
      },
      {
        title: 'Next.js',
        href: 'https://nextjs.org'
      },
      {
        title: 'MobX',
        href: 'https://mobx.js.org'
      },
      {
        title: 'Redux',
        href: 'https://redux.js.org'
      },
      {
        title: 'Styled',
        href: 'https://styled-components.com'
      },
      {
        title: 'Storybook',
        href: 'https://storybook.js.org'
      },
      {
        title: 'React Native',
        href: 'https://reactnative.dev'
      },
      {
        title: 'Webpack',
        href: 'https://webpack.js.org'
      },
      {
        title: 'Strapi',
        href: 'https://strapi.io'
      },
      {
        title: 'Electron',
        href: 'https://www.electronjs.org'
      }
    ],
    other: [
      {
        title: 'PostCSS',
        href: 'https://postcss.org'
      },
      {
        title: 'JSS',
        href: 'https://cssinjs.org'
      },
      {
        title: 'SVG',
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial'
      },
      {
        title: 'Showdown',
        href: 'https://github.com/showdownjs/showdown'
      },
      {
        title: 'MJML',
        href: 'https://mjml.io'
      },
      {
        title: 'OpenGraph',
        href: 'https://ogp.me'
      },
      {
        title: 'CKEditor',
        href: 'https://ckeditor.com'
      },
      {
        title: 'Monaco',
        href: 'https://microsoft.github.io/monaco-editor'
      },
      {
        title: 'Material Design',
        href: 'https://material-ui.com'
      },
      {
        title: 'Ant Design',
        href: 'https://ant.design'
      },
      {
        title: 'Rsuite Design',
        href: 'https://rsuitejs.com'
      },
      {
        title: 'Gulp',
        href: 'https://gulpjs.com'
      },
      {
        title: 'Express',
        href: 'https://expressjs.com'
      },
      {
        title: 'Koa',
        href: 'https://koajs.com'
      },
      {
        title: 'Nginx',
        href: 'https://nginx.org'
      },
      {
        title: 'Golang',
        href: 'https://golang.org'
      },
      {
        title: 'Gorm',
        href: 'https://gorm.io'
      },
      {
        title: 'Gin',
        href: 'https://github.com/gin-gonic/gin'
      },
      {
        title: 'Gorilla',
        href: 'https://www.gorillatoolkit.org'
      },
      {
        title: 'Logrus',
        href: 'https://github.com/sirupsen/logrus'
      },
      {
        title: 'Viper',
        href: 'https://github.com/spf13/viper'
      },
      {
        title: 'Postgres',
        href: 'https://www.postgresql.org'
      },
      {
        title: 'Redis',
        href: 'https://redis.io'
      },
      {
        title: 'Mongo',
        href: 'https://www.mongodb.com'
      },
      {
        title: 'Nats',
        href: 'https://nats.io'
      },
      {
        title: 'MQTT',
        href: 'https://mqtt.org'
      },
      {
        title: 'C++11',
        href: 'https://isocpp.org'
      },
      {
        title: 'Qt',
        href: 'https://www.qt.io'
      },
      {
        title: 'Qml',
        href: 'https://doc.qt.io/qt-5/qtqml-index.html'
      },
      {
        title: 'Makefile',
        href: 'https://www.gnu.org/software/make/manual/make.html'
      },
      {
        title: 'Yocto Linux',
        href: 'https://www.yoctoproject.org'
      },
      {
        title: 'Docker',
        href: 'https://www.docker.com'
      },
      {
        title: 'Swarm',
        href: 'https://docs.docker.com/engine/swarm/swarm-tutorial'
      }
    ]
  },
  experience: {
    workingExperience: [
      {
        year: 'Jan. 2021 - Apr. 2021',
        position: 'Frontend Developer',
        company: 'Pure',
        href: 'https://pure.app',
        details:
          'Development of a pure.app dating web application and marketing content platform.'
      },
      {
        year: 'May 2019 - Jan. 2021',
        position: 'Frontend Developer',
        company: 'Finservice',
        href: 'https://finservice.pro',
        details:
          'Development of a digital platform focused on loan officers and online orders.'
      },
      {
        year: 'Feb. 2017 - Sept. 2017',
        position: 'Embedded Developer',
        company: 'Ujet International S.à.r.l.',
        href: 'https://www.ujet.com',
        details:
          'Creation of software for an embedded system of a scooter on-board computer connected with the infrastructure of the Internet of Things.'
      },
      {
        year: 'Nov. 2017 - May 2019',
        position: 'Fullstack Developer',
        company: 'iSmart',
        href: 'https://ismart.org',
        details:
          'Creation of an online platform for completing educational assignments in subjects, classes and topics for school-age children.'
      },
      {
        year: 'May 2016 - Nov. 2017',
        position: 'Fullstack Developer',
        company: 'Cloud Antenne Services Sàrl',
        href: 'https://www.zaaptv.com',
        details:
          'Creation of software for SmartTV set-top boxes of different providers.'
      }
    ],
    educationExperience: [
      {
        year: '2016 - 2018',
        graduation: 'Master of Information Technology',
        university:
          'Reshetnev Siberian State University of Science and Technology',
        details: 'Software engineering',
        href: 'https://www.sibsau.ru/page/home'
      },
      {
        year: '2012 - 2016',
        graduation: 'Bachelor of Information Technology',
        university:
          'Reshetnev Siberian State University of Science and Technology',
        details: 'Software engineering',
        href: 'https://www.sibsau.ru/page/home'
      }
    ]
  },
  portfolios: [
    {
      title: 'Pure',
      image: pure,
      position: 'Frontend Developer',
      href: 'https://pure.app',
      skills: [
        { title: 'React', href: 'https://reactjs.org' },
        { title: 'Node.js', href: 'https://nodejs.org' },
        {
          title: 'Typescript',
          href: 'https://www.typescriptlang.org'
        },
        {
          title: 'MobX',
          href: 'https://mobx.js.org'
        },
        {
          title: 'Redux',
          href: 'https://redux.js.org'
        },
        {
          title: 'Saga',
          href: 'https://redux-saga.js.org/'
        },
        {
          title: 'Styled',
          href: 'https://styled-components.com'
        },
        {
          title: 'Next.js',
          href: 'https://nextjs.org'
        },
        {
          title: 'Strapi',
          href: 'https://strapi.io'
        },
        {
          title: 'MJML',
          href: 'https://mjml.io'
        },
        {
          title: 'OpenGraph',
          href: 'https://ogp.me'
        },
        {
          title: 'CKEditor',
          href: 'https://ckeditor.com/'
        },
        { title: 'Webpack', href: 'https://webpack.js.org' }
      ],
      content: [
        'Development of a pure.app dating web application and marketing content platform.',
        'The app works on iOS, Android and Web platforms.'
      ],
      progress: [
        'Frontend development for dating application.',
        'Creation of a marketing platform for blogging and various advertising mailings.',
        'Custom CKEditor & Strapi integration.'
      ]
    },
    {
      title: 'Finservice',
      image: finservice,
      position: 'Frontend Developer',
      href: 'https://finservice.pro',
      skills: [
        { title: 'React', href: 'https://reactjs.org' },
        {
          title: 'MobX',
          href: 'https://mobx.js.org'
        },
        {
          title: 'Storybook',
          href: 'https://storybook.js.org'
        },
        {
          title: 'Styled',
          href: 'https://styled-components.com'
        },
        {
          title: 'Next.js',
          href: 'https://nextjs.org'
        },
        { title: 'Webpack', href: 'https://webpack.js.org' },
        {
          title: 'Ant Design',
          href: 'https://ant.design'
        }
      ],
      content: [
        'Development of a digital platform focused on loan officers and online orders.',
        'The application has integration with many popular banking systems. It also provides a single integration method for generating online orders.'
      ],
      progress: [
        'Migration from Redux to MobX.',
        'Component library development.',
        'SDK development for third-party integrations.',
        'Development and support of frontend microservices for the end user.',
        'Adapting an application for isomorphic rendering.'
      ]
    },
    {
      title: 'Ujet International S.à.r.l.',
      image: ujet,
      position: 'Embedded Developer',
      href: 'https://www.ujet.com',
      skills: [
        {
          title: 'Yocto Linux',
          href: 'https://www.yoctoproject.org'
        },
        {
          title: 'ARM',
          href: 'https://www.arm.com'
        },
        {
          title: 'Bluetooth Low Energy',
          href:
            'https://www.bluetooth.com/blog/4-essential-tools-for-every-bluetooth-low-energy-developer'
        },
        {
          title: 'C++11',
          href: 'https://isocpp.org'
        },
        {
          title: 'Golang',
          href: 'https://golang.org'
        },
        {
          title: 'Qt',
          href: 'https://www.qt.io'
        },
        {
          title: 'Qml',
          href: 'https://doc.qt.io/qt-5/qtqml-index.html'
        },
        {
          title: 'Makefile',
          href: 'https://www.gnu.org/software/make/manual/make.html'
        },
        {
          title: 'MQTT',
          href: 'https://mqtt.org'
        },
        {
          title: 'Nats',
          href: 'https://nats.io'
        }
      ],
      content: [
        'Creation of software for an embedded system of a scooter on-board computer connected with the infrastructure of the Internet of Things.',
        'The on-board computer has a human machine interface for the scooter touchscreen. And also a set of background processes that control the work with the Internet of Things gateway and with devices based on Bluetooth Low Energy. The operating system is its own assembly of Yocto Linux.'
      ],
      progress: [
        'Setting up, configuring and compiling Yocto Linux.',
        'Development of a graphical interface based on Qt Device Creation.',
        'Development of processes / microservices boards for working with Internet of Things infrastructure.',
        'Development of a module for working with devices based on Bluetooth Low Energy.',
        'Implementation of microservices for working with MQTT telemetry.'
      ]
    },
    {
      title: 'iSmart',
      image: ismart,
      position: 'Fullstack Developer',
      href: 'https://ismart.org',
      skills: [
        { title: 'React', href: 'https://reactjs.org' },
        { title: 'Redux', href: 'https://redux.js.org' },
        {
          title: 'JSS',
          href: 'https://cssinjs.org'
        },
        {
          title: 'SVG',
          href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial'
        },
        {
          title: 'Showdown',
          href: 'https://github.com/showdownjs/showdown'
        },
        {
          title: 'Golang',
          href: 'https://golang.org'
        },
        {
          title: 'Gin',
          href: 'https://github.com/gin-gonic/gin'
        },
        {
          title: 'Gorilla',
          href: 'https://www.gorillatoolkit.org'
        },
        { title: 'Mongo', href: 'https://www.mongodb.com' },
        { title: 'Webpack', href: 'https://webpack.js.org' },
        {
          title: 'Rsuite Design',
          href: 'https://rsuitejs.com'
        },
        {
          title: 'Nats',
          href: 'https://nats.io'
        }
      ],
      content: [
        'Creation of an online platform for completing educational assignments in subjects, classes and topics for school-age children.',
        'Tasks are created by content managers based on a template system. There are a lot of drag-and-drop and automatically-generated images based on SVG in the tasks.'
      ],
      progress: [
        'Front-end architecture development.',
        'Development of the task template system engine.',
        'Creating a Markdown editor and parser with custom SVG layouts and interactive elements.',
        'Development of modules for working with end users (guest / parent / child).',
        'Real-time game engine server side implementation.'
      ]
    },
    {
      title: 'ZaapTV',
      image: zaaptv,
      position: 'Fullstack Developer',
      href: 'https://www.zaaptv.com',
      skills: [
        { title: 'React', href: 'https://reactjs.org' },
        { title: 'Node.js', href: 'https://nodejs.org' },
        {
          title: 'PostCSS',
          href: 'https://postcss.org'
        },
        { title: 'Backbone', href: 'https://backbonejs.org/' },
        { title: 'Redux', href: 'https://redux.js.org' },
        { title: 'Mongo', href: 'https://www.mongodb.com' },
        { title: 'Redis', href: 'https://redis.io' },
        { title: 'Nginx', href: 'https://nginx.org' },
        { title: 'Express', href: 'https://expressjs.com' },
        { title: 'Gulp', href: 'https://gulpjs.com' },
        { title: 'Webpack', href: 'https://webpack.js.org' }
      ],
      content: [
        'Creation of software for SmartTV set-top boxes of various digital providers.',
        'The interface of the final SmartTV set-top box looks like a regular Youtube TV-style interface. However, "under the hood" it is presented as a cross-browser HTML5 application base on Webkit & Qt Webkit. Each version of the set-top box has its own version of the browser.'
      ],
      progress: [
        'Cross-platform Front-end, working under different versions of Webkit both on the consoles themselves and in different browsers.',
        'Creation of a monitoring system for satellite devices for SmartTV infrastructure.',
        'Development of microservices for satellites.',
        'Creating a clearing system the Akamai, Redis, Nginx cache.',
        'Participation in the creation of a distribution and deployment system.'
      ]
    }
  ]
})
