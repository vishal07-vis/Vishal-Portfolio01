import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Code2, Database, Globe, Layers3, Download, Menu, X,
  ExternalLink, Award, GraduationCap, Briefcase, Heart
} from "lucide-react";
import "./styles.css";

const skills = {
  "Programming": ["Java","Python", "JavaScript"],
  "Web Development": ["HTML", "CSS", "APIs"],
  "Frameworks": ["React.js", "Node.js","JDBC", "Servlets", "Hibernate", "Spring Boot", ],
  "Database": ["MySQL"],
  "Developer Tools": ["VS Code", "Eclipse", "Sublime", "Microsoft Office", "GitHub"]
};
const experience = [
  {
    role: "Front-End Development Intern",
    company: "Code Alpha",
    period: "Internship",
    icon: <Globe size={20} />,
    points: [
      "Created mobile-first responsive layouts using CSS media queries.",
      "Worked on cross-browser compatibility for consistent user experiences.",
      "Built interactive web pages with clean HTML5, CSS and vanilla JavaScript.",
      "Focused on responsive design and frontend performance."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Bharat Intern",
    period: "Internship",
    icon: <Code2 size={20} />,
    points: [
      "Developed functional and visually appealing websites.",
      "Applied responsive design and accessibility best practices.",
      "Worked toward cross-browser compatibility and optimal performance across devices."
    ]
  },
  {
  role: "Java Developer Trainee & Intern",
  company: "QSpiders, Noida",
  period: "Currently Working",
  icon: <Code2 size={20} />,
  points: [
    "Currently undergoing hands-on training in Java development and enterprise application development.",
    "Working with Core Java, JDBC, Servlets, Hibernate, SQL, and Spring Boot.",
    "Developing and debugging Java-based applications while applying object-oriented programming and database concepts.",
    "Practicing real-world development workflows, problem-solving, and writing maintainable code."
  ]
 }
];
const projects = [
  {
    title: "E-Learning Website",
    category: "Full Stack Web Development",
    description:
      "Responsive e-learning platform with authentication, course management, enrollment, course listings, ratings and a contact form.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Indian Constitution",
    category: "Educational Web Project",
    description:
      "Interactive educational resource explaining the Fundamental Rights of India with article references, amendments, examples and landmark cases.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "React Productivity Dashboard",
    category: "React Project",
    description:
      "Modern productivity dashboard featuring task management, Pomodoro timer, dark mode and responsive UI using React Hooks.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Tic Tac Toe Game",
    category: "Java Project",
    description:
      "A Tic Tac Toe game implemented in Java.",
    tech: ["Core Java"]
  }
];
const certifications = [
  "Machine Learning With Python — IBM",
  "Microsoft Copilot for Productivity — Microsoft",
  "SAR Data Processing & its Applications — IIRS, ISRO",
  "Python for AI & Development — Coursera",
  "Introduction to Artificial Intelligence — LinkedIn Learning",
  "Front End | Full Stack Web Development — Coding Ninjas",
  "Web Development — Internshala"
];

const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    place: "Uttarakhand Technical University, Dehradun",
    score: "69.2%",
    period: "Aug 2021 — June 2025"
  },
  {
    title: "Class XII — CBSE",
    place: "Pragya Niketan Public School, Sasaram",
    score: "58.2%",
    period: "April 2020"
  },
  {
    title: "Class X — CBSE",
    place: "St. Michael’s Academy, Sasaram",
    score: "63%",
    period: "April 2018"
  }
];

function App() {
  const [open, setOpen] = React.useState(false);
  const roles = [
    "Web Developer",
    "Java Developer",
    
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedRole(currentRole.substring(0, typedRole.length + 1));
        if (typedRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypedRole(currentRole.substring(0, typedRole.length - 1));
        if (typedRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  const closeMenu = () => setOpen(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Vishal_Raj_Resume.pdf";
    link.download = "./Vishal_Raj_Resume.pdf";
    link.click();
  };

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>Vishal<span>.</span></a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["home", "profile", "about", "skills", "experience", "projects", "education", "contact"].map(item => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button className="nav-resume" onClick={downloadResume}>
            <Download size={16} /> Resume
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> ASPIRING SOFTWARE ENGINEER</div>
            <h1>Hi, I'm <span>Vishal Raj</span></h1>
            <h2 className="developer-role"><span className="typing-role">{typedRole}</span><span className="typing-cursor">|</span></h2>
            <p>
              Aspiring Software Engineer with a passion for coding, debugging and testing.
              I enjoy learning new technologies and building useful software projects.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">View My Work <ArrowUpRight size={18} /></a>
              <a href="#contact" className="btn secondary">Let's Connect</a>
            </div>
            <div className="quick-info">
              <span><MapPin size={15}/> India</span>
              <span><Mail size={15}/> vishala3212@gmail.com</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="glow"></div>
            <div className="code-card">
              <div className="window-bar"><i></i><i></i><i></i><span>developer.java</span></div>
              <pre>{`public class Developer {

  public static void main(String[] args) {

    String name = "Vishal Raj";
    String role = "Java Developer";
    String frontend = "React.js";
    String backend = "Spring Boot";

    System.out.println("Building the future...");
  }
}`}</pre>
            </div>
            <div className="float-chip chip-one"><Code2 size={17}/> React.js</div>
            <div className="float-chip chip-two">☕ Java</div>
            <div className="float-chip chip-three"><Layers3 size={17}/> Spring Boot</div>
          </div>
        </section>

        <section id="profile" className="section profile">
          <div className="section-heading">
            <span>01 — PROFILE</span>
            <h2>A little more <em>about Vishal.</em></h2>
          </div>

          <div className="profile-card">
            <div className="profile-main">
              <div className="profile-avatar"><img src="./my img.jpg" alt="Vishal Raj" /></div>
              <div className="profile-intro">
                <div className="profile-status"><span></span> OPEN TO OPPORTUNITIES</div>
                <h3>Vishal Raj</h3>
                <p className="profile-role">Aspiring Software Engineer</p>
                <p>
                  Computer Science & Engineering graduate passionate about coding,
                  debugging, testing and building responsive web applications.
                </p>
                <div className="profile-actions">
                  <a href="#contact" className="btn primary">Contact Me <ArrowUpRight size={17}/></a>
                  <button className="btn secondary" onClick={downloadResume}>
                    <Download size={17}/> Resume
                  </button>
                </div>
              </div>
            </div>

            <div className="profile-details">
              <div className="profile-detail">
                <span>FULL NAME</span>
                <strong>Vishal Raj</strong>
              </div>
              <div className="profile-detail">
                <span>ROLE</span>
                <strong>Software Engineer</strong>
              </div>
              <div className="profile-detail">
                <span>EDUCATION</span>
                <strong>B.Tech — CSE</strong>
              </div>
              <div className="profile-detail">
                <span>UNIVERSITY</span>
                <strong>Uttarakhand Technical University</strong>
              </div>
              <div className="profile-detail">
                <span>EMAIL</span>
                <strong>vishala3212@gmail.com</strong>
              </div>
              <div className="profile-detail">
                <span>PHONE</span>
                <strong>+91 9123280984</strong>
              </div>
              <div className="profile-detail">
                <span>LOCATION</span>
                <strong>India</strong>
              </div>
              <div className="profile-detail">
                <span>PRIMARY STACK</span>
                <strong>React · JavaScript · Python</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span>01 — ABOUT ME</span>
            <h2>Turning curiosity into <em>working software.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am an aspiring Software Engineer and Computer Science & Engineering graduate
                who enjoys coding, debugging, testing and building web applications.
              </p>
              <p>
                My experience includes frontend and web development internships, along with
                academic projects covering React, JavaScript, Node.js, Express, MongoDB and
                educational web applications.
              </p>
              <p>
                I am committed to continuous self-development and excited to collaborate in a
                dynamic team environment where I can learn and contribute.
              </p>
            </div>
            <div className="stats">
              <div><strong>2025</strong><span>B.Tech Graduate</span></div>
              <div><strong>2+</strong><span>Internship Experiences</span></div>
              <div><strong>4</strong><span>Featured Projects</span></div>
              <div><strong>7</strong><span>Certifications</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>02 — SKILLS</span>
            <h2>Tools I use to <em>build.</em></h2>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items], index) => (
              <article className="skill-card" key={group}>
                <div className="skill-icon">
                  {index === 0 ? <Code2/> : index === 1 ? <Globe/> : index === 2 ? <Layers3/> : <Database/>}
                </div>
                <h3>{group}</h3>
                <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span>03 — EXPERIENCE</span>
            <h2>Where I've <em>worked.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-dot">{item.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div><span className="period">{item.period}</span><h3>{item.role}</h3><h4>{item.company}</h4></div>
                    <span className="timeline-no">0{i + 1}</span>
                  </div>
                  <ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <span>04 — PROJECTS</span>
            <h2>Things I've <em>built.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                <a href="#contact" className="project-link">Discuss project <ArrowUpRight size={16}/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span>05 — EDUCATION & CERTIFICATIONS</span>
            <h2>Learning is <em>continuous.</em></h2>
          </div>
          <div className="education-grid">
            <div>
              <h3 className="subheading"><GraduationCap size={20}/> Education</h3>
              <div className="edu-list">
                {education.map(e => (
                  <article className="edu-card" key={e.title}>
                    <span>{e.period}</span>
                    <h4>{e.title}</h4>
                    <p>{e.place}</p>
                    <strong>{e.score}</strong>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="subheading"><Award size={20}/> Certifications</h3>
              <div className="cert-list">
                {certifications.map((c, i) => (
                  <div className="cert" key={c}><span>{String(i + 1).padStart(2, "0")}</span><p>{c}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section extra">
          <div className="extra-card">
            <div>
              <span>ACTIVITIES</span>
              <h2>Beyond the <em>code.</em></h2>
            </div>
            <div className="activity-list">
              <span><Heart size={16}/> Fundraising Volunteer — Hamari Pachan NGO</span>
              <span><Award size={16}/> ByteQuest Hackathon — Top 30 finalists</span>
              <span><Award size={16}/> National Cadet Corps — NCC B Certificate</span>
              <span>📚 Reading Books</span>
              <span>✈️ Travelling</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div>
              <span>06 — CONTACT</span>
              <h2>Let's build something <em>together.</em></h2>
              <p>Have an opportunity, project or just want to connect? Feel free to reach out.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:vishala3212@gmail.com"><Mail/> vishala3212@gmail.com <ArrowUpRight/></a>
              <a href="tel:+919123280984"><Phone/> +91 9123280984 <ArrowUpRight/></a>
              <a href="https://www.linkedin.com/in/vishal-raj-5aa892230/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn <ArrowUpRight/></a>
              <a href="https://github.com/vishal07-vis" target="_blank" rel="noreferrer"><Github/> GitHub <ArrowUpRight/></a>
              <button onClick={downloadResume}><Download/> Download Resume <ArrowUpRight/></button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">Vishal<span>.</span></div>
        <p>Designed & built with React. © {new Date().getFullYear()} Vishal Raj.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {/* WhatsApp Floating Button */}
    <a
        href="https://wa.me/919123280984?text=Hello%20Vishal,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={40} />
    </a>
    </div>
  );
}



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);