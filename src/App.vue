<template>
  <v-app class="grey lighten-4">
    
   <Navbar/>
    <v-content>
      <router-view class="mx-4 mb-4"></router-view>
    </v-content>
    
    <BottomNavbar/>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import BottomNavbar from '@/components/BottomNavbar'

export default {
  name: 'App',
  components:{
               Navbar,
               BottomNavbar
               },
  data () {
    return {
      //
    }
  }
}
</script>
