import { getAge } from './moment'
import aboutImage from 'resources/img/about-me.jpeg'
import ujet from 'resources/img/ujet.svg'
import ismart from 'resources/img/ismart.svg'
import finservice from 'resources/img/finservice.svg'
import pure from 'resources/img/pure.svg'
import zaaptv from 'resources/img/zaaptv.png'
import oneInch from 'resources/img/1inch.svg'

// eslint-disable-next-line max-lines-per-function
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
      'I am a Software Engineer and I enjoy building rich platforms. And also everything that relates to Microservices and Unix Way inspires.',
    github: 'https://github.com/peeerrrooo',
    instagram: 'https://www.instagram.com/daniil.brakk',
    telegram: 'daniilbrakk',
    age: getAge('18.09.1992'),
    nationality: 'Russian',
    language: 'Russian, English',
    email: 'peeerrrooo@gmail.com',
    address: 'Russia, Moscow',
    aboutImage
  },
  skills: {
    main: [
      {
        title: 'Node.js',
        href: 'https://nodejs.org'
      },
      {
        title: 'Typescript',
        href: 'https://www.typescriptlang.org'
      },
      { title: 'Nest.js', href: 'https://nestjs.com' },
      { title: 'Solidity', href: 'https://soliditylang.org' },
      { title: 'Golang', href: 'https://golang.org' },
      { title: 'Kubernetes', href: 'https://kubernetes.io' },
      {
        title: 'React',
        href: 'https://reactjs.org'
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
        title: 'React Native',
        href: 'https://reactnative.dev'
      }
    ],
    other: [
      {
        title: 'Gin',
        href: 'https://github.com/gin-gonic/gin'
      },
      {
        title: 'Terraform',
        href: 'https://www.terraform.io'
      },
      { title: 'Prometheus', href: 'https://prometheus.io/' },
      { title: 'Grafana', href: 'https://grafana.com/' },
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
        title: 'C++11',
        href: 'https://isocpp.org'
      },
      {
        title: 'QT',
        href: 'https://www.qt.io'
      },
      {
        title: 'Yocto Linux',
        href: 'https://www.yoctoproject.org'
      }
    ]
  },
  experience: {
    workingExperience: [
      {
        year: 'May. 2021 - Present',
        position: 'Blockchain Developer',
        company: '1inch',
        href: 'https://1inch.io/',
        details:
          'Development of microservices for DeFi project 1inch and DeFi/DAO protocols.'
      },
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
      title: '1inch',
      image: oneInch,
      position: 'Blockchain Developer',
      href: 'https://1inch.io/',
      skills: [
        { title: 'Node.js', href: 'https://nodejs.org/en/' },
        { title: 'Typescript', href: 'https://www.typescriptlang.org/' },
        { title: 'Golang', href: 'https://go.dev/' },
        { title: 'Nest.js', href: 'https://nestjs.com/' },
        {
          title: 'Solidity',
          href: 'https://docs.soliditylang.org/en/v0.8.10/'
        },
        { title: 'Kubernetes', href: 'https://kubernetes.io' },
        { title: 'Prometheus', href: 'https://prometheus.io/' },
        { title: 'Grafana', href: 'https://grafana.com/' },
        { title: 'Kibana', href: 'https://www.elastic.co/kibana/' },
        { title: 'Postgres', href: 'https://www.postgresql.org/' },
        { title: 'Redis', href: 'https://redis.io/' }
      ],
      content: [
        'Development of microservices for DeFi project 1inch and DeFi/DAO protocols.',
        '1inch project is leader in the decentralized finance (DeFi).'
      ],
      progress: [
        'Backend microservices development with Node.js and Golang.',
        'Protocol implementation from some DeFi projects and liquidity providers.',
        'Library development for Nest.js.',
        `Kubernetes, Grafana and Prometheus adaptation for microservices development.`
      ]
    },
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
          href: 'https://www.bluetooth.com/blog/4-essential-tools-for-every-bluetooth-low-energy-developer'
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
        // eslint-disable-next-line max-len
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
        // eslint-disable-next-line max-len
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
