<template>
  <div class="home">
    <h1 class="subheading grey--text mt-3">Contact</h1>
     <v-container class="my-5" >
      <v-layout row wrap >
        <v-flex xs12 sm6 md4 lg3 v-for="person in persons" :key="person.name">
         <v-card class="ma-3" color="indigo">
           <v-responsive class="text-xs-center pt-4">
             <v-avatar size="100">
               <img :src="person.avatar">
             </v-avatar>
           </v-responsive>
           <v-card-text class="text-xs-center">
             <div class="subheading">{{person.name}}</div>
             <div class="grey--text mt-2 mb-3">{{person.role}}</div>
             <v-divider></v-divider>
             <div class="mt-2">
               <v-chip color="green" text-color="white">
                 <v-avatar>
                   <v-icon>phone</v-icon>
                 </v-avatar>
                 +91-9673720736
               </v-chip>
             </div>
             <div>
               <v-chip color="green" text-color="white">
                 <v-avatar>
                   <v-icon>email</v-icon>
                 </v-avatar>
                 lalit.garghate@...
               </v-chip>
             </div>
           </v-card-text>
       </v-card>
      </v-flex>
      
      

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
   return{
   persons:[{name:'Lalit Garghate',role:'Full Stack Developer',avatar:'/lalit-profile.gif'}],
  contacts:[
     {icon:'phone',text:'+91-9673720736'},
     {icon:'mail',text:'lalit.garghate@gmail.com'}
     ]
 }
 }
  }
</script>
