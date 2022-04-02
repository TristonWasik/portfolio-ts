import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GithubLogo, LinkedinLogo, Envelope, Article } from 'phosphor-react';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const featured = [
    {
      title: 'OKCandles',
      description: 'An ecommerce site to sell and advertise homemade candles. This project uses Strapi CMS so the client can manage their products with ease.',
      github: 'githublink',
      demo: 'demolink',
      img: 'https://via.placeholder.com/400x200?text=Project+Image',
      technology: [
        'ReactJS',
        'React-Query',
        'Strapi'
      ]
    },
    {
      title: 'RecipeHost',
      description: 'A self-hosted recipe app that offers P2P downloads of recipes and public data to share and collaborate with other RecipeHost applications.',
      github: 'githublink',
      demo: 'demolink',
      img: 'https://via.placeholder.com/400x200?text=Project+Image',
      technology: [
        'NextJS',
        'Prisma',
        'MySQL',
        'TS',
        'Strapi'
      ]
    },
  ]

  const projects = [
    {
      title: 'Portfolio',
      description: 'A portfolio designed around simplicity and elegance. Created in NextJS using Typescript.',
      github: 'githublink',
    },
    {
      title: 'USB Display Switcher',
      description: 'A console app created to utilize USB events and detect when a USB switcher changes the device its attached to. It sends DDC/CI commands to the monitors so they change their displays.',
      github: 'githublink',
    },
    {
      title: 'Camp Registration App',
      description: 'A camp registration app for the Eagle River United Methodist Camp.',
      github: 'githublink',
    },
    {
      title: 'Handbrake Automation App',
      description: 'An app to automate the conversion of video files using the Handbrake CLI. This greatly reduces the filesize of videos for media servers.',
      github: 'githublink',
    },
  ]

  const work = [
    {
      title: 'Renegade Hosting',
      basis: 'Contractual',
      dates: '03/2015-Present',
      img: 'https://via.placeholder.com/100x100?text=Employer+Logo'
    },
    {
      title: 'State of Alaska',
      basis: 'Full-Time',
      dates: '10/2018-12/2021',
      img: 'https://via.placeholder.com/100x100?text=Employer+Logo'
    },
    {
      title: 'OKCandles',
      basis: 'Contractual',
      dates: '10/2021-Present',
      img: 'https://via.placeholder.com/100x100?text=Employer+Logo'
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Triston Wasik Portfolio</title>
        <meta name="description" content="Triston wasik portfolio using neumorphism" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <section className={styles.headerContainer}>
          <div className={styles.headerContainer_imageContainer}>
            <Image src='/me.jpg' alt='Personal Photo' width={300} height={300} />
          </div>
          <div className={styles.headerContainer_content}>
            <h1 className={styles.title}>Triston Wasik</h1>
            <span className={styles.subtitle}>Freelance Software Engineer</span>
            <p>
              Creating, embracing, and utilizing technology to create innovative solutions to everyday problems.
            </p>
            <div className={styles.headerContainer_links}>
              <a  href='/somelink.pdf' title='Resume Download' className={styles.resumeLink} download>Download Resume</a>
            </div>
          </div>
        </section>

        <h2 className={styles.sectionHeader}>Projects</h2>
        <section className={styles.featured}>
          {featured && featured.map(item => (
            <div className={styles.featuredContainer} key={item.title}>
              <div className={styles.featuredContainer_content}>
                <h2 className={styles.header}>{item.title}</h2>
                <p className={styles.featuredContainer_technology}>{item.technology.toString()}</p>
                <p>{item.description}</p>
                <div className={styles.featuredContainer_contentLinks}>
                  <a href={item.github} className={styles.link}>GitHub</a>
                  <a href={item.demo} className={styles.link}>Demo</a>
                </div>
              </div>
              <div className={styles.featuredContainer_ImageContainer}>
                <img src={item.img} alt="Project Image" />
              </div>
            </div>
          ))}
        </section>

        <section className={styles.projects}>
          {projects && projects.map(item => (
            <div className={styles.projectContainer} key={item.title}>
              <h3 className={styles.header}>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.projectsContainer_links}>
                <a href={item.github} className={styles.link}>GitHub</a>
              </div>
            </div>
          ))}
        </section>

        <h2 className={styles.sectionHeader}>Employment</h2>
        <section className={styles.work}>
          {work && work.map(item => (
            <div className={styles.workContainer} key={item.title}>
              <img src={item.img} alt={item.title} />
              <div className={styles.workContainer_content}>
                <h3>{item.title}</h3>
                <p className={styles.workContainer_details}>{item.basis}: {item.dates}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Triston Wasik - Juneau, AK</p>
        <div className={styles.socialLinks}>
          <a href='https://www.github.com/elfinslayer'><GithubLogo size={24} /></a>
          <a href='https://www.linkedin.com/elfinslayer'><LinkedinLogo size={24} /></a>
          <a href='mailto:twasik4@gmail.com'><Envelope size={24} /></a>
          <a href='/somelink.doc' title='Resume Download' download><Article size={24} /></a>
        </div>
      </footer>
    </div>
  )
}

export default Home
