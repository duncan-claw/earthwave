import React from 'react';
import { ArrowRight, Sparkles, Waves, HeartHandshake, Compass, Package, Users } from 'lucide-react';
import earthWaveLogo from './assets/EarthWave-smooth.svg';

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Community wellbeing',
    body: 'Local gatherings, shared movement, and inclusive activities for people who want healthier lifestyle choices without the pressure of gym culture.'
  },
  {
    icon: Package,
    title: 'Member-led marketplace',
    body: 'Wellbeing products, practical tools, and trusted recommendations gathered into one place as the Earthwave ecosystem grows.'
  },
  {
    icon: Compass,
    title: 'A bigger movement',
    body: 'What begins in one local community is intended to become a repeatable Earth Wave model that can grow into new locations over time.'
  }
];

const steps = [
  'Start local with meetups, shared activities, and a healthier rhythm of life.',
  'Build a member space with resources, support, and premium community benefits.',
  'Grow into ecommerce, distribution, and the wider Earth Wave system.'
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="site-header">
        <div className="brand-chip">
          <Waves size={16} />
          <span>Earthwave</span>
        </div>
        <div className="coming-soon-pill">Coming soon</div>
      </header>

      <main>
        <section className="hero section-frame">
          <div className="hero-copy">
            <p className="eyebrow">A new wave of community wellbeing</p>
            <h1>Built from one real health journey into a shared movement for better living.</h1>
            <p className="lead">
              Earthwave is an emerging community-led wellbeing brand inspired by Brian’s transformation — a new space for healthier choices, inclusion, activity, connection, and long-term momentum.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#vision">
                Explore the vision <ArrowRight size={18} />
              </a>
              <div className="soft-note">
                <Sparkles size={16} />
                <span>Foundations first. Community before noise.</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-glow" />
            <img src={earthWaveLogo} alt="Earthwave logo" className="hero-logo" />
            <div className="hero-card-copy">
              <span>Guiding idea</span>
              <strong>Health, wellbeing, and belonging should feel human, local, and possible.</strong>
            </div>
          </div>
        </section>

        <section className="story-grid">
          <article className="story-panel section-frame">
            <p className="eyebrow">The back story</p>
            <h2>Brian’s personal change is the root of the brand.</h2>
            <p>
              Earthwave begins with lived experience. After a major health and wellbeing transformation, Brian found himself drawn toward a simpler truth: meaningful change sticks better when it is shared, grounded, and part of everyday life.
            </p>
            <p>
              Not extreme fitness. Not clinical support. Not another loud “wellness” promise. Just a better environment for healthier decisions, stronger habits, and more connected lives.
            </p>
          </article>

          <article className="quote-panel section-frame">
            <div className="quote-mark">~</div>
            <p>
              Earthwave is being shaped as a calm but ambitious brand — one that starts with local community and grows into a broader platform for products, knowledge, and shared momentum.
            </p>
          </article>
        </section>

        <section id="vision" className="vision section-frame">
          <div className="section-heading">
            <p className="eyebrow">What Earthwave is becoming</p>
            <h2>A wellbeing community first. Then a wider platform.</h2>
          </div>

          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, body }) => (
              <article key={title} className="pillar-card">
                <div className="pillar-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap section-frame">
          <div className="section-heading narrow">
            <p className="eyebrow">Near term to long term</p>
            <h2>The first wave starts small on purpose.</h2>
          </div>

          <div className="roadmap-list">
            {steps.map((step, index) => (
              <div key={step} className="roadmap-item">
                <div className="roadmap-index">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="membership-grid">
          <article className="membership-card section-frame">
            <Users size={22} />
            <h3>Membership with meaning</h3>
            <p>
              The long-term plan includes a subscription-based member experience with access to knowledge, premium benefits, and a stronger sense of belonging to the Earthwave community.
            </p>
          </article>

          <article className="membership-card section-frame">
            <Compass size={22} />
            <h3>Designed to travel</h3>
            <p>
              The future vision reaches beyond one neighbourhood: an Earth Wave model that can be adapted into new communities, partnerships, and franchise opportunities.
            </p>
          </article>
        </section>

        <section className="closing section-frame">
          <p className="eyebrow">Coming soon</p>
          <h2>Earthwave is in its first chapter — calm, deliberate, and building with purpose.</h2>
          <p>
            This site is an early marker for what’s ahead: a healthier, more inclusive community model that begins with people, local momentum, and real life change.
          </p>
        </section>
      </main>
    </div>
  );
}
