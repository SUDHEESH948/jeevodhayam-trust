import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ArrowDown, ArrowUpRight, ArrowRight, Heart } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ParallaxFrame, Reveal, VisionReveal } from "@/components/effects";

const images = { hero: "/images/hero-community-care.png", story: "/images/about-community-listening.png", impact: "/images/community-meal-support.png", learning: "/manus-storage/async-images/01Ee38kiAe1g3UhV6vcAqz/image-4.webp", wellbeing: "/manus-storage/async-images/01Ee38kiAe1g3UhV6vcAqz/image-5.webp", garden: "/manus-storage/async-images/uuWqNLWDiSvwB2vDaRjEpz/image-1.webp" };
const work = [
  ["01", "Healthcare Support", "Medical assistance to deserving individuals.", "Health awareness initiatives.", "Support for treatment and healthcare needs."],
  ["02", "Education Support", "Scholarships and educational assistance.", "Career guidance and training support.", "Encouragement for deserving students."],
  ["03", "Elderly Welfare", "Assistance and support for senior citizens.", "Welfare initiatives aimed at improving their quality of life."],
  ["04", "Sports Support", "Encouraging young talents.", "Providing assistance and opportunities for sports development."],
  ["05", "Community Welfare", "Supporting individuals and families in need.", "Promoting a compassionate and self-reliant society."],
];
const services = [
  { title: "Education Support", copy: "Scholarships, guidance, training, and encouragement for deserving students.", image: "/images/education-support.png" },
  { title: "Healthcare Support", copy: "Medical assistance, health awareness, and treatment support.", image: "/images/healthcare-support.png" },
  { title: "Elderly Welfare", copy: "Assistance and care that improve quality of life for senior citizens.", image: "/images/elderly-welfare-service.png" },
  { title: "Sports Support", copy: "Opportunities that encourage young talents to grow.", image: "/images/sports-support.png" },
  { title: "Community Welfare", copy: "Support for individuals and families in need.", image: "/images/community-welfare.png" },
];

export default function Home() { return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main">
  <section className="hero" aria-labelledby="hero-title"><div className="hero-image" aria-hidden="true"><Image src={images.hero} alt="" fill priority unoptimized sizes="100vw" className="cover-image" /></div><div className="hero-shade" /><div className="hero-content page-gutter"><p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> JEEVODHAYAM CHARITABLE TRUST</p><h1 id="hero-title">Serving society<br />with <em>compassion.</em></h1><div className="hero-bottom"><p className="hero-copy">Serving society through healthcare, education, elderly welfare and support for aspiring talents.</p></div></div><a className="scroll-cue" href="#about" aria-label="Scroll to about us"><ArrowDown size={17} /></a></section>
  <section id="about" className="story-section section-pad" aria-labelledby="about-title">
    <div className="story-grid page-gutter">
      <Reveal className="story-visual">
        <ParallaxFrame src={images.story} alt="People sharing a community conversation" className="story-photo" />
        <span className="photo-index">A shared moment <i>—</i> community care</span>
      </Reveal>
      <Reveal className="story-copy" delay={0.12}>
        <p className="eyebrow"><span className="eyebrow-dot" /> About Us — Our Story</p>
        <h2 id="about-title">Serving society with enduring <em>compassion.</em></h2>
        <p className="body-large"><strong>JEEVODHAYAM CHARITABLE TRUST</strong> was established as the social commitment initiative of <strong>We Five Developer Pvt. Ltd.</strong></p>
        <p className="body-muted">For decades, the family and members behind the organization have been quietly extending support to people in need. With the desire to carry forward these efforts in a structured and sustainable manner, JEEVODHAYAM CHARITABLE TRUST was formally established.</p>
        <p className="body-muted">The Trust reflects the belief that growth and success carry with them a responsibility to contribute positively to society and improve the lives of others.</p>
        <a className="text-link" href="#wefive">About We Five Developer Pvt. Ltd. <ArrowUpRight size={16} /></a>
      </Reveal>
    </div>
  </section>
  <section id="wefive" className="wefive-section section-pad" aria-labelledby="wefive-title">
    <div className="wefive-intro page-gutter">
      <div>
        <p className="eyebrow"><span className="eyebrow-dot" /> About We Five Developer Pvt. Ltd.</p>
        <h2 id="wefive-title">A legacy of craftsmanship, growth, and <em>responsibility.</em></h2>
      </div>
      <p>The legacy of We Five Developer Pvt. Ltd. traces its roots back to 1942, when Valiyaparambath Appukutty Aachari began a journey built on craftsmanship, dedication, and a commitment to quality. His vision and values laid the foundation for a family legacy that would continue through generations.</p>
    </div>
    <div className="wefive-timeline page-gutter">
      <Reveal className="wefive-milestone">
        <span>1942</span>
        <div>
          <h3>1st Generation — The Foundation</h3>
          <p><strong>Valiyaparambath Appukutty Aachari</strong> began a journey built on craftsmanship, dedication, and a commitment to quality. His vision and values laid the foundation for a family legacy that would continue through generations.</p>
        </div>
      </Reveal>
      <Reveal className="wefive-milestone" delay={0.08}>
        <span>1972</span>
        <div>
          <h3>2nd Generation — Upholding Values</h3>
          <p>This legacy was carried forward by the second generation, <strong>Damodaran Aachari</strong>, who upheld the family&apos;s traditions, values, and commitment to excellence.</p>
        </div>
      </Reveal>
      <Reveal className="wefive-milestone" delay={0.16}>
        <span>2021</span>
        <div>
          <h3>3rd Generation — Entrepreneurial Vision</h3>
          <p>Building upon this strong heritage, the third generation, led by founder and CEO <strong>Mr. Vipul Das</strong>, brought a new entrepreneurial vision to the family&apos;s journey. As the founder of <strong>We Five Associates</strong>, he established a formal business identity and guided its growth and transformation into <strong>V-Five Developers</strong>, eventually leading to the incorporation of <strong>We Five Developer Pvt. Ltd.</strong> in 2021—expanding and diversifying into construction and infrastructure, building materials, real estate, entertainment, and various other ventures.</p>
        </div>
      </Reveal>
    </div>
    <div className="wefive-closing">
      <div className="wefive-closing-inner page-gutter">
        <Reveal>
          <p>Alongside its business growth, the spirit of serving society has always remained an integral part of the organization&apos;s values. For many years, charitable activities and community support initiatives were carried out quietly, without seeking recognition or operating under any formal identity.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>To continue these efforts in a more organized and sustainable manner, these long-standing initiatives were formally brought together under the name <strong>JEEVODHAYAM CHARITABLE TRUST</strong>.</p>
          <p>Today, <strong>JEEVODHAYAM CHARITABLE TRUST</strong> represents the social commitment of We Five Developer Pvt. Ltd., focusing on healthcare support, educational assistance, elderly welfare, sports encouragement, and community well-being, with the vision of creating a more compassionate and empowered society.</p>
        </Reveal>
      </div>
    </div>
  </section>
  <section className="old-services initiatives-section section-pad" aria-hidden="true"><div className="initiative-panels page-gutter"><div /></div></section>
  <section id="initiatives" className="services-section section-pad" aria-labelledby="initiatives-title"><div className="section-heading page-gutter"><div><p className="eyebrow"><span className="eyebrow-dot" /> Areas of work</p><h2 id="initiatives-title">Care, wherever it is <em>needed.</em></h2></div><p className="section-aside">Focused support that helps individuals and communities live with dignity and hope.</p></div><div className="services-grid page-gutter">{services.map((service, index) => <Reveal className="service-card" key={service.title} delay={index * 0.05}><Image src={service.image} alt={service.title} fill unoptimized sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw" className="cover-image" /><div className="service-shade" /><div className="service-copy"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p></div><span className="service-arrow"><ArrowUpRight size={18} /></span></Reveal>)}</div></section>
  <section id="vision" className="statement-section" aria-labelledby="vision-title"><div className="statement-top page-gutter"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Vision & mission</span><span className="statement-star">✦</span></div><VisionReveal /><div className="statement-bottom page-gutter"><span>Mission</span><span>Improving lives through healthcare, education, elderly welfare, sports encouragement, and community support.</span></div></section>
  <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title"><div className="contact-heading page-gutter"><p className="eyebrow"><span className="eyebrow-dot" /> Contact us</p><h2 id="contact-title">Let&apos;s begin a conversation that <em>matters.</em></h2></div><div className="contact-layout page-gutter"><Reveal className="contact-info"><div className="contact-mark"><Heart size={25} /><span>JEEVODHAYAM<br />CHARITABLE TRUST</span></div><div className="contact-address"><span>Visit us</span><p>Pazhayashupathri,<br />Aaram Mile, Mayyil,<br />Kannur, Kerala – 670602</p></div><div className="contact-links"><a href="tel:+917592823555"><small>Phone</small><strong>+91 75928 23555</strong><ArrowRight size={17} /></a><a href="mailto:jeevodayam@gmail.com"><small>Email</small><strong>jeevodayam@gmail.com</strong><ArrowUpRight size={17} /></a></div></Reveal><Reveal className="contact-card" delay={0.12}><div className="contact-card-top"><span>Write to us</span><p>Tell us how we can support you or work together.</p></div><ContactForm /></Reveal></div></section>
 </main><footer className="site-footer"><div className="footer-top page-gutter"><div className="footer-brand-block"><a className="brand footer-brand" href="#top"><img className="brand-logo footer-logo" src="/images/jeevodhayam-logo.png" alt="Jeevodhayam logo" width={54} height={54} /><span className="brand-name">Jeevodhayam<small>Charitable Trust</small></span></a><p className="footer-mission">Serving society through healthcare, education, elderly welfare and support for aspiring talents.</p></div><div className="footer-nav-block"><p className="footer-label">Explore</p><a href="#about">About us</a><a href="#initiatives">Areas of work</a><a href="#vision">Vision & mission</a></div><div className="footer-contact-block"><p className="footer-label">Connect</p><p className="footer-placeholder">Pazhayashupathri, Aaram Mile, Mayyil, Kannur, Kerala – 670602</p><div className="social-links"><a href="tel:+917592823555"><span>+91 75928 23555</span></a></div></div></div><div className="footer-bottom page-gutter"><p>© {new Date().getFullYear()} Jeevodhayam Charitable Trust</p><p className="footer-wordmark">JEEVODHAYAM</p><a className="back-top" href="#top">Back to top <ArrowUpRight size={14} /></a></div><div className="developer-credit page-gutter">Developed by <a href="https://winshineinfotech.com" target="_blank" rel="noopener noreferrer">Winshine Infotech <ArrowUpRight size={13} aria-hidden="true" /></a></div></footer></> }
