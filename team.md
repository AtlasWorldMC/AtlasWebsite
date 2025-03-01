---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
    avatar: 'https://www.github.com/Sgod06.png',
    name: 'Sgod',
    title: 'Administrator',
    links: [
      { icon: 'youtube', link: 'https://youtube.com/channel/UC9wjfA-HnSQ-a9c_xHcYh1Q' },
    ]
  },
  {
    avatar: 'https://www.github.com/BelgianDev.png',
    name: 'RaftDev',
    title: 'Administrator & Main Dev',
    links: [
      { icon: 'github', link: 'https://github.com/BeglianDev' },
      { icon: 'instagram', link: 'https://www.instagram.com/raft.dev/' }
    ]
  },
  {
    avatar: 'https://www.github.com/Artex154.png',
    name: 'Artex',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Artex154' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      AtlasWorld Team
    </template>
    <template #lead>
      Those people are behind AtlasWorld
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>