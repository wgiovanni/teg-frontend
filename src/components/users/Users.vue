<template>
    <div>
        <Header></Header>
        <div>Aqui el cuerpo de administracion de usuarios</div>
    </div>
</template>


<script>
import axios from 'axios';

import Header from '@/components/Header'

export default {
  name: 'Users',
  components: {
    Header
  }
}
</script>