<template>
  <div class="row">
      <Sidebar></Sidebar>
      <BodyUser></BodyUser>
  </div>
</template>

<script>
import axios from 'axios';

import BodyUser from '@/components/BodyUser'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Users',
  components: {
    BodyUser,
    Sidebar
  }
}
</script>
