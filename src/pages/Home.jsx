import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import './Home.css'

export default function Home() {
  const [modal, setModal] = useState(null)

  const openModal  = (name) => setModal(name)
  const closeModal = () => setModal(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModal(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  const scrollToCV = () => {
    document.getElementById('cv-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const GITHUB_URL   = 'https://github.com/thuankythuatmaytinhk22-stack'
  const LINKEDIN_URL = 'https://www.linkedin.com/in/thu%E1%BA%ADn-%C4%91inh-ho%C3%A0ng-216bb4358/'
  const EMAIL        = 'thuankythuatmaytinhk22@gmail.com'

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero-section">
        <div className="image" data-aos="zoom-in-right" data-aos-duration="2000">
          <img
            src="/ht1.jpg"
            alt="Erwin Dinh Avatar"
            className="avatar-img"
          />
        </div>

        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            Hey I'm <span>Erwin Dinh</span>
          </h1>

          <div className="typewriter" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            I'm a <span>Analog IC Design</span>
          </div>

          <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">
            Fifth-year Computer Engineering student at University of Science and Technology – Da Nang,
            currently working as an <b>Analog IC Design Intern at Mixel</b>. Strong passion for analog
            semiconductor circuit design with hands-on experience in <b>Cadence Virtuoso</b> and
            <b> Pyxis</b> for schematic and layout design.
          </p>

          <div className="social-links" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="600">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={`mailto:${EMAIL}`} title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="action-buttons" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="700">
            <button onClick={scrollToCV}>📄 View Full CV</button>
            <button onClick={() => openModal('about')}>About Me</button>
            <button onClick={() => openModal('skills')}>Skills</button>
          </div>
        </div>
      </section>

      {/* ============ CV SECTION ============ */}
      <section className="cv-section" id="cv-section">
        <div className="cv-container">

          <div className="contact-info" data-aos="fade-up">
            <div>
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${EMAIL}`} style={{ color: 'inherit', textDecoration: 'none' }}>{EMAIL}</a>
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                linkedin.com/in/thuận-đinh-hoàng
              </a>
            </div>
            <div>
              <i className="fa-brands fa-github"></i>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                github.com/thuankythuatmaytinhk22-stack
              </a>
            </div>
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-user"></i> Summary
          </h2>
          <div className="summary-box" data-aos="fade-up">
            Fifth-year Computer Engineering student at University of Science and Technology – Da Nang with strong
            passion for analog semiconductor circuit design. Solid theoretical foundation combined with hands-on
            project experience in <b>Cadence Virtuoso</b> and <b> Pyxis</b>. Currently interning as an
            Analog IC Design Intern at Mixel, aiming to become a professional Analog IC Design Engineer capable
            of building complete analog systems from concept to silicon.
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-trophy"></i> Achievements
          </h2>
          <div data-aos="fade-up" style={{ marginBottom: 30 }}>
            <div className="achievement-item">
              <div className="achievement-icon">🥉</div>
              <div className="achievement-content">
                <h4>Bronze Medal - Provincial Physics Olympiad</h4>
                <p>Dak Lak Province • 2021</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏅</div>
              <div className="achievement-content">
                <h4>Consolation Prize - Provincial Excellent Student Competition</h4>
                <p>Dak Lak Province • 2022</p>
              </div>
            </div>
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-briefcase"></i> Experience
          </h2>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">Analog IC Design Intern</div>
            <div className="cv-card-subtitle">Mixel</div>
            <div className="cv-card-date">Jun 2026 - Present • Da Nang, Vietnam</div>
            <div className="cv-card-desc">
              <ul>
                <li>Participated in analog IC design projects using <b>Cadence Virtuoso</b> and <b> Pyxis</b></li>
                <li>Performed schematic design, layout design, and circuit simulation under mentor guidance</li>
                <li>Gained hands-on experience with industrial design flows from schematic to layout verification</li>
                <li>Collaborated with senior engineers to review and optimize circuit performance</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">IC Design Lab Member</div>
            <div className="cv-card-subtitle">University of Science and Technology</div>
            <div className="cv-card-date">Sep 2025 - Present • Da Nang, Vietnam</div>
            <div className="cv-card-desc">
              <ul>
                <li>Conduct analog IC design using <b>Cadence Virtuoso</b> and <b> Pyxis</b></li>
                <li>Work on schematic design, layout design, and simulation</li>
                <li>Collaborate on circuit design projects with other lab members</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">Physics Tutor</div>
            <div className="cv-card-subtitle">Self-employed</div>
            <div className="cv-card-date">2022 - Present • Da Nang, Vietnam</div>
            <div className="cv-card-desc">
              <ul>
                <li>Delivered one-on-one Physics tutoring with clear and structured explanations</li>
                <li>Prepared lesson plans, exercises, and customized study materials based on student needs</li>
                <li>Improved presentation and communication skills by explaining complex concepts simply</li>
                <li>Managed schedule effectively while balancing tutoring work with full-time university studies</li>
              </ul>
            </div>
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-microchip"></i> Projects
          </h2>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">CS Source Degeneration – Schematic & Layout</div>
            <div className="cv-card-date">2026</div>
            <div className="cv-card-desc">
              <p><b>Tool:</b> Cadence Virtuoso, Pyxis</p>
              <ul>
                <li>Designed common-source amplifier with source degeneration in schematic</li>
                <li>Analyzed the effect of source degeneration on gain, linearity, and output impedance</li>
                <li>Performed layout design with attention to matching, parasitic minimization, and design rules</li>
                <li>Verified schematic vs. post-layout simulation results</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">Differential Amplifier – Schematic & Layout</div>
            <div className="cv-card-date">2026</div>
            <div className="cv-card-desc">
              <p><b>Tool:</b> Cadence Virtuoso, Pyxis</p>
              <ul>
                <li>Designed a fully differential amplifier in schematic with current mirror load</li>
                <li>Analyzed differential gain, common-mode rejection ratio (CMRR), and offset</li>
                <li>Implemented layout with symmetrical routing, common-centroid technique, and dummy devices</li>
                <li>Compared pre-layout and post-layout simulation to evaluate parasitic effects</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">Two-Stage CMOS Op-Amp Design</div>
            <div className="cv-card-date">Jan 2026 - Mar 2026</div>
            <div className="cv-card-desc">
              <p><b>Tool:</b> Cadence Virtuoso</p>
              <ul>
                <li>Applied differential pair for input stage, current mirror as active load</li>
                <li>Designed two-stage CMOS operational amplifier achieving open-loop gain of <b>50dB</b></li>
                <li>Performed schematic design, AC/DC analysis, transient simulation</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">9-Stage Ring Oscillator</div>
            <div className="cv-card-date">Nov 2025 - Dec 2025</div>
            <div className="cv-card-desc">
              <p><b>Tool:</b> Cadence Virtuoso</p>
              <ul>
                <li>Applied CMOS inverter as delay stage, negative feedback loop for oscillation</li>
                <li>Designed CMOS ring oscillator with 9 inverter stages achieving <b>20MHz</b> oscillation frequency</li>
                <li>Analyzed duty cycle stability and transient response</li>
              </ul>
            </div>
          </div>

          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">50W OCL Audio Power Amplifier</div>
            <div className="cv-card-date">Sep 2024 - Dec 2024</div>
            <div className="cv-card-desc">
              <p><b>Tool:</b> Proteus (Schematic & PCB Layout) | <b>Topology:</b> OCL, differential input stage</p>
              <ul>
                <li>Designed 50W/8Ω amplifier with bandwidth <b>200Hz - 15kHz</b></li>
                <li>Performed hand calculations for biasing, gain, and power dissipation</li>
                <li>Designed single-sided PCB layout, assembled prototype, and verified performance</li>
              </ul>
            </div>
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-graduation-cap"></i> Education
          </h2>
          <div className="cv-card" data-aos="fade-up">
            <div className="cv-card-title">B.E. in Computer Engineering</div>
            <div className="cv-card-subtitle">University of Science and Technology, Da Nang</div>
            <div className="cv-card-date">Expected May 2027 • GPA: 3.4/4.0</div>
            <div className="cv-card-desc">
              <p>
                <b>Relevant Coursework:</b> Circuit Theory, Electronic Circuit Techniques,
                HDL & Programmable Logic, IC Design, PBL4 – IC Design
              </p>
            </div>
          </div>

          <h2 className="cv-section-title" data-aos="fade-right">
            <i className="fa-solid fa-code"></i> Skills
          </h2>
          <div className="skills-grid">
            <div className="skill-item" data-aos="fade-up">
              <h4><i className="fa-solid fa-microchip"></i> Analog Design Tools</h4>
              <p>Cadence Virtuoso, Pyxis, LTspice, Proteus</p>
            </div>
            <div className="skill-item" data-aos="fade-up" data-aos-delay="100">
              <h4><i className="fa-solid fa-code"></i> Programming</h4>
              <p>C++, Verilog</p>
            </div>
            <div className="skill-item" data-aos="fade-up" data-aos-delay="200">
              <h4><i className="fa-solid fa-layer-group"></i> PCB Design</h4>
              <p>Proteus PCB Layout</p>
            </div>
            <div className="skill-item" data-aos="fade-up" data-aos-delay="300">
              <h4><i className="fa-solid fa-users"></i> Soft Skills</h4>
              <p>Team leadership (Scrum Master), Task management, Cross-functional communication, Problem solving, Presentation & reporting, Technical documentation</p>
            </div>
            <div className="skill-item" data-aos="fade-up" data-aos-delay="400">
              <h4><i className="fa-solid fa-language"></i> Languages</h4>
              <p>Vietnamese (native), English (conversational & technical reading)</p>
            </div>
          </div>

        </div>
      </section>

      {/* ============ MODALS ============ */}
      {modal === 'about' && (
        <Modal title="About Me" onClose={closeModal}>
          <p>
            Hi, I'm <b>Erwin Dinh</b>, a fifth-year Computer Engineering student at the University of Science and
            Technology – The University of Danang (DUT), currently working as an <b>Analog IC Design Intern at
            Mixel</b>. I'm passionate about analog semiconductor circuit design, driven by my love for physics and
            my curiosity about how circuits work at the transistor level.
            <br /><br />
            My focus is on <b>schematic design and layout</b> using <b>Cadence Virtuoso</b> and
            <b> Pyxis</b>. My goal is to become a professional Analog IC Design Engineer, capable of
            building complete analog systems from concept to silicon.
            <br /><br />
            I'm always eager to learn, explore new technologies, and solve challenging problems in the
            semiconductor field.
          </p>
        </Modal>
      )}

      {modal === 'skills' && (
        <Modal title="Skills" onClose={closeModal}>
          <p>
            <b>Analog Design Tools:</b> Cadence Virtuoso, Pyxis, LTspice, Proteus<br /><br />
            <b>Programming:</b> C++, Verilog<br /><br />
            <b>PCB Design:</b> Proteus PCB Layout<br /><br />
            <b>Soft Skills:</b> Team leadership (Scrum Master), Task management & progress tracking, Cross-functional
            communication, Team coordination, Problem solving, Time management, Presentation & reporting, Technical
            documentation<br /><br />
            <b>Languages:</b> Vietnamese (native), English (conversational & technical reading)
          </p>
        </Modal>
      )}

      {modal === 'services' && (
        <Modal title="Services" onClose={closeModal}>
          <p>
            I am capable of designing analog IC schematics & layouts using Cadence Virtuoso and Pyxis,
            simulating circuits with LTspice, designing PCBs with Proteus, and building web applications.
          </p>
        </Modal>
      )}

      {modal === 'blogs' && (
        <Modal title="My Blogs" onClose={closeModal}>
          <div className="blog-container">
            <div className="blog-post">
              <h3>1: Why I Chose Computer Engineering as My Career Path</h3>
              <p>
                <b>Introduction:</b><br />
                I'm Erwin Dinh, a Computer Engineering student at the University of Science and Technology –
                The University of Danang (DUT). Since high school, I've been passionate about understanding how
                both software and hardware work together.
                <br /><br />
                <b>My Journey:</b><br />
                I started with basic programming in C++ and web development, then moved into analog circuit design
                using Proteus and LTspice. Recently, I've been working with Cadence Virtuoso and Pyxis
                on analog IC design projects.
                <br /><br />
                <b>The Future:</b><br />
                My goal is to become an Analog IC Design Engineer, contributing to fields like chip design and
                embedded systems.
              </p>
            </div>

            <div className="blog-post">
              <h3>2: My Journey into Analog IC Design</h3>
              <p>
                Analog IC design is a beautiful mix of physics and engineering. In this blog, I'll share my
                experience learning Cadence Virtuoso and Pyxis, from basic schematic entry to complex
                simulations and layout design.
                <br /><br />
                <b>Key takeaways:</b><br />
                • Master the fundamentals: small-signal models, biasing, frequency response<br />
                • Practice with real projects: Op-Amp, Ring Oscillator, Current Mirrors<br />
                • Learn the tools deeply: Cadence Virtuoso, Pyxis<br />
                • Never stop learning.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}