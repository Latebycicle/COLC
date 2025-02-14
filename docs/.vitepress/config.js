import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CAPS Online Learning Center",
  description: "A repo of information",
  base: '/repo/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/fianlCOLC.png',
    siteTitle: "CAPS Online Learning Center",
    nav: [
      { text: "About", link: "/about" },
      { text: "Team", link: "/team" }
    ],
    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/caps.kengeri/" }
    ],
    sidebar: [
        {
          text: "Engineering and Technology",
          collapsible: true,
          items: [
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
            { text: "From your Professors", link: "/Psychology/professors"},
          ]
        },
        {
          text: "Architecture",
          collapsible: false,
          items: [
            { text: "Material", link: "/Architecture/Material" },
            { text: "Architecture Firm Websites", link: "/Architecture/Websites.md" },
          ],
        },
        {
          text: "Open Resources",
          collapsible: true,
          items: [
            { text: "Textbooks/Papers", link: "/OpenResources/Material.md" },
            { text: "Ai Tools", link: "/OpenResources/AiTools.md" },
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
        message: `
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              height: 40px;
              margin: 0;
              padding: 0;
            "
          >
            <em style="margin: 0;">Optimising Learning and Harnessing Expertise</em>
            <img
              src="/fivecircles.svg"
              alt="Footer Image"
              style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); max-width: 100px;"
            />
          </div>
        `,
      },
  },
});
