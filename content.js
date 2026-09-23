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
  name: "Lorem Ipsum",
  title: "Dolor Sit Amet",          // your focus area, shown under your name
  accentColor: "#1f3fe0",                 // link color; any hex color works

  contact: {
    email: "lorem@pace.edu",
    location: "Lorem, NY",
    degree: "BS in Lorem Ipsum, Minor in Dolor",
    github: "https://github.com/lorem-ipsum",
    linkedin: "https://www.linkedin.com/in/lorem-ipsum",
    resume: "resume.pdf",                 // upload your resume PDF to the repo with this exact file name
  },

  // ---------- ABOUT (2–3 sentences) ----------
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

  // ---------- PROJECTS ----------
  // Each project is one block. Copy a block to add another.
  projects: [
    {
      title: "Lorem Ipsum Project",
      link: "https://github.com/lorem-ipsum/project",   // live demo or repo; "" for no link
      date: "Season 20XX",
      tools: "Lorem, Ipsum, Dolor",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
    },
    {
      title: "Dolor Sit Project",
      link: "",
      date: "Season 20XX",
      tools: "Lorem, Ipsum, Dolor",
      description: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Lorem Role",
      org: "Ipsum Organization",
      location: "Lorem, NY",
      dates: "Mon 20XX – Present",
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore.",
      ],
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      school: "Lorem Ipsum University",
      degree: "B.S. in Lorem Ipsum, Minor in Dolor",
      dates: "Expected Mon 20XX",
      details: "Lorem ipsum dolor sit amet",
    },
  ],

  // ---------- SKILLS ----------
  skills: [
    { group: "Lorem", items: "Ipsum, Dolor, Sit, Amet, Consectetur" },
    { group: "Ipsum",     items: "Adipiscing, Elit, Sed, Eiusmod" },
  ],

  // ---------- FOOTER ----------
  footer: "Seidenberg Scholars Portfolio",
};
