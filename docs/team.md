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
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/akhil-ramchand' }
    ]
  }
]

const partners = [
  {
    avatar: 'https://github.com/Keona-Liz-C',
    name: 'Keona Liz Croning',
    title: 'Content writer',
    links: [
      { icon: 'github', link: 'https://github.com/alexj' }
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