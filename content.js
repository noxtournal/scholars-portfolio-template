/* ==================================================================
   YOUR PORTFOLIO CONTENT
   This is the ONLY file you need to edit. index.html reads it and
   builds your page automatically.

   THREE RULES
   1. Only change the text inside "quotes".
   2. Keep the comma at the end of each line and after each } block.
   3. Don't need something? Set it to "" (empty quotes) and it
      disappears from your page. An empty list [] hides the whole section.

   TO ADD A NEW PROJECT / JOB / SKILL GROUP
   Copy an entire block, from its opening {  to its closing },
   paste it right below, and change the text.
   ================================================================== */

const PORTFOLIO = {

  // ---------- HEADER ----------
  name: "Jordan Lee",
  title: "Software Engineering",          // your focus area, shown under your name
  accentColor: "#1f3fe0",                 // link color; any hex color works

  contact: {
    email: "jl12345n@pace.edu",
    location: "Manhattan, NY",
    degree: "BS in Computer Science, Minor in Mathematics",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-name",
    resume: "resume.pdf",                 // upload your resume PDF to the repo with this exact file name
  },

  // ---------- ABOUT (2–3 sentences) ----------
  about: "Computer Science student at Pace University and member of the Seidenberg Scholars cohort. I like building practical tools with Python and JavaScript, and I'm looking for summer 2027 internships in software engineering.",

  // ---------- PROJECTS ----------
  // Each project is one block. Copy a block to add another.
  projects: [
    {
      title: "Campus Shuttle Tracker",
      link: "https://github.com/your-username/shuttle-tracker",   // live demo or repo; "" for no link
      date: "Spring 2026",
      tools: "React, Firebase, Google Maps API",
      description: [
        "Web app that shows where Pace's campus shuttles are in real time, built for a class final project.",
        "Second paragraph is optional. Delete this line if you only need one.",
      ],
    },
    {
      title: "Budget Buddy",
      link: "",
      date: "Fall 2025",
      tools: "Python, Pandas, Matplotlib",
      description: [
        "Command-line tool that reads bank CSV exports and charts monthly spending by category.",
      ],
    },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Peer Tutor",
      org: "Pace University Learning Commons",
      location: "New York, NY",
      dates: "Sep 2025 – Present",
      bullets: [
        "Tutor intro programming students in Java and Python, 6 hours per week.",
        "Wrote practice problem sets used across three course sections.",
      ],
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      school: "Pace University, Seidenberg School of CSIS",
      degree: "B.S. in Computer Science, Minor in Mathematics",
      dates: "Expected May 2029",
      details: "Seidenberg Scholar",
    },
  ],

  // ---------- SKILLS ----------
  skills: [
    { group: "Languages", items: "Python, Java, JavaScript, HTML/CSS, SQL" },
    { group: "Tools",     items: "Git, GitHub, VS Code, Jupyter, Figma" },
  ],

  // ---------- FOOTER ----------
  footer: "Seidenberg Scholars Portfolio",
};
