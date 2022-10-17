import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GithubLogo, LinkedinLogo, Envelope, Article } from "phosphor-react";
import ProjectContent from "../components/projectcontent";
import { Project } from "../lib/types";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      title: "OKCandles",
      description:
        "An ecommerce site to sell and advertise homemade candles. This project uses Strapi headless CMS and square API so the client can manage their content and products with ease.",
      github: "",
      demo: "https://okcandles.shop",
      img: "okcandles.png",
      technology: [
        "NextJS",
        "Framer-Motion",
        "Typescript",
        "Strapi",
        "Square",
        "Docker",
        "React",
      ],
      isFeatured: true,
    },
    {
      title: "Collectionizer",
      description:
        "Collectionizer is a tool that lets you enter the ID or URL of a steam mod collection and gives you back all of the mod id's in a single list. This has a niche use for dedicated server owners/hosts.",
      demo: "https://collectionizer.esinnovations.com",
      github: "https://github.com/tristonwasik/collectionizer",
      img: "collectionizer.png",
      technology: [
        "NextJS",
        "Typescript",
        "Axios",
        "Ackee",
        "NextUI",
        "Cheeriojs",
      ],
      isFeatured: true,
    },
    {
      title: "Handbrake Automation App",
      description:
        "An app to automate the conversion of video files using the Handbrake CLI. This greatly reduces the filesize of videos for media servers.",
      demo: "",
      github: "",
      img: "handbrake.png",
      technology: ["ReactJS", "SocketIO"],
      isFeatured: true,
    },
    {
      title: "Server App",
      description:
        "WIP, coming soon (10/22). This app offers server owners a self-hosted solution to display the status of their servers to their friends and/or communities. Utilizes NextAuth to handle session based authentication and authorization with the Discord social login. Offers integration with zabbix and uptime kuma for automation of adding new server status items as well as updating existing ones.",
      demo: "",
      github: "",
      img: "serverapp.png",
      isFeatured: true,
      technology: [
        "NextJS",
        "NextAuth",
        "tRPC",
        "T3",
        "Prisma",
        "Typescript",
        "React-Hook-Forms",
        "Zod",
      ],
    },
    {
      title: "RecipeHost",
      description:
        "WIP. A self-hosted recipe app that offers Peer-to-Peer (P2P) downloads of recipes and public data. This removes the need of a dedicated server and allows hosts to share and collaborate with other RecipeHost applications.",
      github: "",
      demo: "",
      img: "https://via.placeholder.com/400x200?text=Coming+Soon",
      technology: [
        "NextJS",
        "Prisma",
        "MySQL",
        "Typescript",
        "Docker",
        "Framer-Motion",
      ],
    },
    {
      title: "Portfolio",
      description:
        "A portfolio designed around simplicity using typescript. Completely responsive, this design works on any device size using flex.",
      demo: "",
      github: "https://github.com/tristonwasik/portfolio-ts",
      technology: ["NextJS", "Framer-Motion", "Typescript"],
    },
    {
      title: "USB Display Switcher",
      description:
        "A console app created to utilize USB events and detect when a USB switcher changes the device its attached to. It sends DDC/CI commands to the monitors so they change their displays.",
      demo: "",
      github: "https://github.com/tristonwasik/usb-display-switcher",
      technology: ["NodeJS"],
    },
  ];

  const work = [
    {
      title: "Renegade Hosting",
      basis: "Contractual",
      dates: "03/2015-Present",
      img: "rh.png",
    },
    {
      title: "State of Alaska",
      basis: "Full-Time",
      dates: "10/2018-12/2021",
      img: "alaskaflag.png",
    },
    {
      title: "OKCandles",
      basis: "Contractual",
      dates: "10/2021-Present",
      img: "okcandles.jpeg",
    },
  ];

  const volunteer = [
    {
      label: "Eagle River United Methodist Camp",
      dates: "7/2012-Present",
      position: "Camp Director, Vice President, Counselor",
      img: "erumc.png",
    },
  ];

  const featured = projects.filter((f) => f.isFeatured === true);
  const miscProjects = projects.filter((f) => !f.isFeatured);

  const SocialLinks = () => {
    return (
      <div className={styles.socialLinks}>
        <a href="https://www.github.com/tristonwasik" title="Github">
          <GithubLogo size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/triston-wasik-6769aa214/"
          title="LinkedIn"
        >
          <LinkedinLogo size={24} />
        </a>
        <a href="mailto:twasik4@gmail.com" title="Email">
          <Envelope size={24} />
        </a>
        <a href="/triston wasik resume.pdf" title="Resume Download" download>
          <Article size={24} />
        </a>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Triston Wasik Portfolio</title>
        <meta
          name="description"
          content="Triston wasik portfolio using neumorphism."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className={styles.headerContainer}>
          <div className={styles.headerContainer_imageContainer}>
            <Image
              src="/me.jpg"
              alt="Personal Photo"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.headerContainer_content}>
            <h1 className={styles.title}>Triston Wasik</h1>
            <span className={styles.subtitle}>Software Engineer</span>
            <p>
              Creating, embracing, and utilizing technology to create innovative
              solutions to everyday problems.
            </p>
            <SocialLinks />
          </div>
        </section>

        <h2 className={styles.sectionHeader}>Projects</h2>
        <section className={styles.featured}>
          {featured &&
            featured.map((project, index) => (
              <div className={styles.featuredContainer} key={index}>
                <ProjectContent project={project} />
                <div className={styles.featuredContainer_ImageContainer}>
                  <img src={project.img} alt="Project Image" />
                </div>
              </div>
            ))}
        </section>

        <section className={styles.projects}>
          {miscProjects &&
            miscProjects.map((project, index) => (
              <div className={styles.projectContainer} key={index}>
                <ProjectContent project={project} />
              </div>
            ))}
        </section>

        <h2 className={styles.sectionHeader}>Employment</h2>
        <section className={styles.work}>
          {work &&
            work.map((item, index) => (
              <div className={styles.workContainer} key={index}>
                <img src={item.img} alt={item.title} />
                <div className={styles.workContainer_content}>
                  <h3>{item.title}</h3>
                  <p className={styles.workContainer_details}>
                    {item.basis}: {item.dates}
                  </p>
                </div>
              </div>
            ))}
        </section>

        <h2 className={styles.sectionHeader}>Volunteer</h2>
        <section className={styles.work}>
          {volunteer &&
            volunteer.map((item, index) => (
              <div className={styles.workContainer} key={index}>
                <img src={item.img} alt={item.label} />
                <div className={styles.workContainer_content}>
                  <h3>{item.label}</h3>
                  <p className={styles.workContainer_details}>
                    {item.position}: {item.dates}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Triston Wasik - Juneau, AK</p>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Home;
