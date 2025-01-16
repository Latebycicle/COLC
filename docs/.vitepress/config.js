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
            {
              text: "Tools",
              collapsible: true,
              items: [
                { text: "🎓 Github Education", link: "/Engineering/GitHub.md" },
                { text: "Grammarly Premium", link: "/Engineering/grammarly.md" },
                { text: "Tool 1", link: "/Engineering/tools/page1.md" },
                { text: "Tool 2", link: "/Engineering/tools/page2.md" },
              ],
            },
          ],
        },
        {
          text: "Psychology",
          collapsible: false,
          items: [
            { text: "Introduction", link: "/introduction" },
          ],
        },
        {
          text: "Management",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
          ],
        },
      ],
      footer: {
        message: `<em>Optimising Learning and Harnessing Experties</em> <img src="/fivecircles.svg" alt="Footer Image" style="max-width: 100px; vertical-align: middle; float: right;" />`,
      },
  },
  
};
