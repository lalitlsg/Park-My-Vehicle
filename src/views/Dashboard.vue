<template>
  <div class="home">
    <h1 class="subheading grey--text mt-3">Dashboard</h1>
     
      <v-container fluid  grid-list-md class="my-5">
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md4>
             <v-card color="purple" dark height="120"> 
               <div class="text-xs-center headline mt-1">Total Slots</div>
               <div class="text-xs-center my-2">
                 <v-chip class="grey lighten-1">50</v-chip>
               </div>
             </v-card>
         </v-flex>
         
          <v-flex d-flex xs12 sm6 md4>
             <v-card color="green" dark height="120"> 
               <div class="text-xs-center headline mt-1">Available Slots</div>
               <div class="text-xs-center my-2">
                 <v-chip class="grey lighten-1">{{50-accomodatedSlots}}</v-chip>
               </div>
             </v-card>
         </v-flex>

          <v-flex d-flex xs12 sm6 md4>
             <v-card color="orange" dark height="120"> 
               <div class="text-xs-center headline mt-1">Accomodated Slots</div>
               <div class="text-xs-center my-2">
                 <v-chip class="grey lighten-1">{{accomodatedSlots}}</v-chip>
               </div>
             </v-card>
         </v-flex>
        </v-layout>
     </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
 data(){
   return{
   
     accomodatedSlots:null,
    
       
       
   }
 },
 created(){
   db.collection('parking').onSnapshot(res =>{
     
     this.accomodatedSlots = res.size;
  
   })
 }
 
 
 
  }
</script>
<style>

</style>
