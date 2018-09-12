<template>
    <div>
        <!--Parte superior-->
        <TopNarbar></TopNarbar>

        <!--Parte superior-->
        <Content></Content>

        <!--Footer-->
        <Footer></Footer>
    </div>
</template>

<script>
import TopNarbar from '@/components/layout/TopNavbar'
import Content from '@/components/layout/Content'
import Footer from '@/components/layout/Footer'

export default {
    name: 'Dashboard',
    components: {
        TopNarbar,
        Content,
        Footer
    }
}
</script>

