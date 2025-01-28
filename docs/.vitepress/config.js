export default {
  title: "CAPS Online Learning Center",
  description: "A repo of information",
  themeConfig: {
    logo: '/fivecircles.svg',
    siteTitle: "CAPS Online Learning Center",
    nav: [
      { text: "About", link: "/about" }
    ],
    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/caps.kengeri/" }
    ],
    sidebar: [
        {
          text: "Engineering and Technology",
          collapsible: true,
          items: [
            
            { text: "Introduction", link: "/Engineering/introduction.md" },
            { text: "Certification", link: "/Engineering/Certification.md" },
            { text: "Courses", link: "/Engineering/Courses.md" },
            {
              text: "Tools",
              collapsible: true,
              items: [
                { text: "🎓 Github Education", link: "/Engineering/tools/GitHub.md" },
              ],
            },
          ],
        },
        {
          text: "Psychology",
          collapsible: false,
          items: [
            { text: "Physical Psychology", link: "/Psychology/PhysicalPsychology" },
          ],
        },
        {
          text: "Open Resources",
          collapsible: true,
          items: [
            { text: "Textbooks/Papers", link: "/OpenResources/Material.md" },
            {
              text: "Tools",
              collapsible: true,
              items: [
                { text: "Grammarly Premium", link: "/OpenResources/Tools/grammarly.md" },
                { text: "Figma", link: "/OpenResources/Tools/Figma.md" },
                { text: "Notion", link: "/OpenResources/Tools/Notion.md" },
                { text: "NotebookLM", link: "/OpenResources/Tools/NotebookLM.md" },
              ],
            }
          ],
        },
      ],
      outline: {
        level: [2, 3, 4]
      },
      footer: {
        message: `<em>Optimising Learning and Harnessing Experties</em> <img src="/fivecircles.svg" alt="Footer Image" style="max-width: 100px; vertical-align: middle; float: right;" />`,
      },
  },
  
};
