<template>
<div>
   <!-- Navigation-->
  <Navbar/>
<!-- Pages -->
      <slot />
      
  <!-- Footer-->
  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/webUI/Navbar.vue';
import Footer from '@/components/webUI/Footer.vue'

export default {
    components: {
        Navbar,
        Footer,
    }
}
</script>