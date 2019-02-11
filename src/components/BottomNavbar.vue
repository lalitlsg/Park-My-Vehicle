<template>
    
    
    <v-bottom-nav :value="true" absolute color="transparent" app>
        
        <v-snackbar auto-height v-model="snackbar" :timeout="4000" color="teal" left >
           Vehicle Parked Successfully!
        </v-snackbar>
        <v-snackbar auto-height v-model="snackbar1" :timeout="4000" color="black" left >
           Vehicle Removed Successfully!
        </v-snackbar>
        <div class="text-xs-center" >
        <Park @vehicleParked="snackbar = true"/>
        <Remove @removeVehicle="snackbar1 = true"/>
        </div> 
    </v-bottom-nav>
 
</template>

<script>
import Park from './Park'
import Remove from './Remove'
export default {
  components:{
      Park,
      Remove
  },
  data(){
      return{
          snackbar:false,
          snackbar1:false
          
      }
  }
}
</script>
