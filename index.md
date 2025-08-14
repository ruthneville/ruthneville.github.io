<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Your Name — Academic Homepage</title>
  <meta name="description" content="Academic homepage of Your Name: research, publications, teaching, talks, and contact." />
  <meta property="og:title" content="Your Name — Academic Homepage" />
  <meta property="og:description" content="Research, publications, teaching, talks, and contact." />
  <meta property="og:type" content="website" />
  <meta name="theme-color" content="#0f172a" />
  <link rel="icon" href="assets/favicon.png" />
  <style>
    /* Base */
    :root {
      --bg: #0b1020;
      --muted: #94a3b8;
      --text: #e2e8f0;
      --card: #11172a;
      --accent: #38bdf8;
      --accent-2: #a78bfa;
      --link: #7dd3fc;
      --shadow: rgba(2,8,23,.4);
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f8fafc;
        --muted: #475569;
        --text: #0f172a;
        --card: #ffffff;
        --accent: #0ea5e9;
        --accent-2: #7c3aed;
        --link: #0284c7;
        --shadow: rgba(2,8,23,.10);
      }
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
      line-height: 1.6;
      color: var(--text);
      background: radial-gradient(1200px 700px at 20% -10%, rgba(56,189,248,.15), transparent 50%),
                  radial-gradient(1000px 500px at 120% 10%, rgba(167,139,250,.15), transparent 50%),
                  var(--bg);
    }
    a { color: var(--link); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .container { max-width: 980px; margin: 0 auto; padding: 2rem 1.25rem; }

    /* Header */
    header { position: sticky; top: 0; backdrop-filter: saturate(180%) blur(10px); background: color-mix(in oklab, var(--bg) 80%, transparent); border-bottom: 1px solid rgba(148,163,184,.15); z-index: 50; }
    .nav { display: flex; gap: 1rem; align-items: center; justify-content: space-between; }
    .brand { font-weight: 700; letter-spacing: .2px; font-size: 1.05rem; }
    .menu { display: flex; gap: .9rem; flex-wrap: wrap; }
    .menu a { padding: .35rem .6rem; border-radius: .6rem; }
    .menu a:hover { background: rgba(148,163,184,.15); text-decoration: none; }

    /* Hero */
    .hero { display: grid; grid-template-columns: 120px 1fr; gap: 1.25rem; align-items: center; padding-top: 1.5rem; }
    .avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 10px 25px var(--shadow); border: 3px solid rgba(148,163,184,.25); background: var(--card); }
    .title { font-size: clamp(1.6rem, 3.2vw, 2.2rem); margin: 0 0 .25rem; }
    .subtitle { margin: 0; color: var(--muted); }

    /* Cards */
    section { margin-top: 2rem; }
    .card { background: color-mix(in oklab, var(--card) 92%, transparent); border: 1px solid rgba(148,163,184,.18); box-shadow: 0 10px 30px var(--shadow); border-radius: 1.25rem; padding: 1.25rem; }
    .card h2 { margin-top: 0; font-size: 1.25rem; }

    /* Lists */
    .grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    @media (min-width: 800px) { .grid-2 { grid-template-columns: 1fr 1fr; } }
    .pub { margin: 0; }
    .pub li { margin-bottom: .9rem; }
    .tags { display: inline-flex; gap: .35rem; flex-wrap: wrap; }
    .tag { font-size: .75rem; background: rgba(56,189,248,.15); border: 1px solid rgba(56,189,248,.35); color: var(--text); padding: .1rem .45rem; border-radius: .5rem; }

    /* Footer */
    footer { margin: 3rem 0 2rem; color: var(--muted); font-size: .95rem; display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }

    /* Utilities */
    .pill { display: inline-flex; align-items: center; gap: .5rem; border: 1px solid rgba(148,163,184,.25); padding: .35rem .6rem; border-radius: 999px; background: rgba(148,163,184,.10); }
    .btn { display: inline-block; padding: .55rem .9rem; border-radius: .9rem; border: 1px solid rgba(148,163,184,.25); background: linear-gradient(180deg, color-mix(in oklab, var(--card) 95%, transparent), color-mix(in oklab, var(--card) 75%, transparent)); box-shadow: 0 8px 20px var(--shadow); }
    .btn:hover { filter: brightness(1.05); text-decoration: none; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
  </style>
</head>
<body>
  <header>
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="#top" class="brand">Your Name</a>
      <nav class="menu" aria-label="Sections">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#talks">Talks</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top" class="container">
    <!-- HERO -->
    <section class="hero" aria-labelledby="home-title">
      <img src="assets/avatar.jpg" alt="Portrait of Your Name" class="avatar" />
      <div>
        <h1 id="home-title" class="title">Your Name</h1>
        <p class="subtitle">Your position · Your department · Your institution</p>
        <p class="subtitle">Research areas: migration, forecasting, spatial analysis (example)</p>
        <div class="tags" aria-label="Research keywords">
          <span class="tag">International Student Mobility</span>
          <span class="tag">Migration</span>
          <span class="tag">Forecasting</span>
          <span class="tag">GIS</span>
        </div>
        <p style="margin-top: .9rem;">
          <a class="btn" href="#contact">Get in touch</a>
          <a class="btn" href="cv.pdf" download>Download CV</a>
        </p>
      </div>
    </section>

    <!-- ABOUT & RESEARCH GRID -->
    <section class="grid grid-2">
      <article id="about" class="card" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>Write a short bio (3–5 sentences). Mention your current role, broad research questions you explore, and notable outputs or collaborations. Keep it readable for non-specialists.</p>
        <ul>
          <li class="pill">Currently: <strong>Postdoctoral Researcher</strong> at <em>University/Institute</em></li>
          <li class="pill">Affiliations: <em>Dept / Centre / Lab</em></li>
          <li class="pill">Location: City, Country</li>
        </ul>
      </article>

      <article id="research" class="card" aria-labelledby="research-title">
        <h2 id="research-title">Research</h2>
        <p>State your themes and methods, e.g. “I study X using Y to answer Z.” Optionally add a few featured projects.</p>
        <ul>
          <li><strong>Theme 1.</strong> One-liner on the questions you ask and why they matter.</li>
          <li><strong>Theme 2.</strong> Methods/approaches (e.g., ARIMA, XGBoost, causal inference, qualitative interviews).</li>
          <li><strong>Theme 3.</strong> Collaborations, grants, datasets, open science.</li>
        </ul>
      </article>
    </section>

    <!-- PUBLICATIONS -->
    <section id="publications" class="card" aria-labelledby="pubs-title">
      <h2 id="pubs-title">Publications</h2>
      <p>List selected publications (newest first). Include links to DOI, preprint, code, and data when possible.</p>
      <ol class="pub" reversed>
        <li>
          <strong>Article Title</strong> (2025). <em>Journal Name</em>. <br/>
          Authors: Your Name, Co-author A, Co-author B. <br/>
          <a href="#">DOI</a> · <a href="#">Preprint PDF</a> · <a href="#">Code</a> · <a href="#">Data</a>
        </li>
        <li>
          <strong>Article Title</strong> (2024). <em>Journal Name</em>.
          <br/>Authors: Your Name et al. · <a href="#">DOI</a>
        </li>
      </ol>

      <details>
        <summary>Show BibTeX</summary>
<pre>@article{your2025paper,
  title={Article Title},
  author={Your Name and Co-author A and Co-author B},
  journal={Journal Name},
  year={2025},
  doi={10.xxxx/xxxxx}
}</pre>
      </details>
    </section>

    <!-- TEACHING & TALKS -->
    <section class="grid grid-2">
      <article id="teaching" class="card" aria-labelledby="teaching-title">
        <h2 id="teaching-title">Teaching</h2>
        <ul>
          <li><strong>Module ABC123:</strong> Course title (UG/PG). Role, term, year. Link to syllabus/notes.</li>
          <li><strong>Workshops:</strong> “Intro to GIS with R”, “Forecasting with ARIMA/XGBoost”.</li>
          <li><strong>Supervision:</strong> MSc/PhD supervision areas; sample dissertations.</li>
        </ul>
      </article>

      <article id="talks" class="card" aria-labelledby="talks-title">
        <h2 id="talks-title">Talks & Media</h2>
        <ul>
          <li>“Talk title”, Conference name, City, <time datetime="2025-08-28">28 Aug 2025</time>.</li>
          <li>Panel/Podcast/Media appearance with link.</li>
          <li>Awards, service (reviewing, committees), outreach.</li>
        </ul>
      </article>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="card" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p class="pill" aria-label="Email"><span aria-hidden>📧</span> <a href="mailto:you@university.ac.uk">you@university.ac.uk</a></p>
      <p class="pill"><span aria-hidden>🧑‍🏫</span> Office/Group: Dept · Institution</p>
      <p class="pill"><span aria-hidden>📍</span> City, Country</p>
      <p>Profiles: 
        <a href="#" aria-label="ORCID">ORCID</a> · 
        <a href="#" aria-label="Google Scholar">Scholar</a> · 
        <a href="#" aria-label="GitHub">GitHub</a> · 
        <a href="#" aria-label="X / Twitter">X</a> · 
        <a href="#" aria-label="Bluesky">Bluesky</a> · 
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
      </p>
    </section>

    <footer>
      <span>© <span id="year"></span> Your Name</span>
      <span>
        <a href="/atom.xml">RSS</a> ·
        <a href="/privacy.html">Privacy</a> ·
        <a href="#top">Back to top ↑</a>
      </span>
    </footer>
  </main>

  <script>
    // Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
