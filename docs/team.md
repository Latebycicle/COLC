---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://github.com/Latebycicle.png',
    name: 'Akhil R',
    title: 'Project Lead',
    links: [
      { icon: 'github', link: 'https://github.com/Latebycicle' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/akhil-ramchand' },
      { icon: 'blogger', link: 'https://www.akhilr.tech' }
    ]
  }
]

const partners = [
  {
    avatar: 'Keona.jpeg',
    name: 'Keona Liz Croning',
    title: 'Content writer',
    links: [
      { icon: 'github', link: 'https://github.com/Keona-Liz-Croning' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/keona-liz-croning-4b14112b6/' }
    ]
  },
  {
    avatar: 'https://github.com/bhavyasingh30.png',
    name: 'Bhavya Singh',
    title: 'Content Writer',
    links: [
      { icon: 'github', link: 'https://github.com/bhavyasingh30' },
      { icon: 'gmail', link: 'mailto:bhavya.singh@psyh.christuniversity.in' }
    ]
  }
  
]
</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Content Writers</template>
    <!-- <template #lead>Valued contributors</template> -->
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>