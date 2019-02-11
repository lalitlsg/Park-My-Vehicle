<template>
    <nav >
       <v-snackbar v-model="snackbar" :timeout="4000" color="teal">
            <span>Vehicle Parked Successfully!</span>
            <v-btn flat color="white" @click="snackbar=false">Close</v-btn>
        </v-snackbar>
        <v-toolbar color="indigo" dark app >
   
            <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">parkmy</span>
                <span>vehicle</span>
                   </v-toolbar-title>
       

        </v-toolbar>
        <v-navigation-drawer app class="white" v-model="drawer" width="200">
            <v-layout column align-start>
              <v-flex>
                  <v-img :aspect-ratio="16/9" src="lg.png" width="200">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
              
            <div class="subheading">Parking App</div>
            
          </v-flex>
        </v-layout>
      </v-img>
              </v-flex>
            </v-layout>
          <v-list>
              <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                  <v-list-tile-action>
                      <v-icon class="grey--text">{{link.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title class="grey--text">{{link.text}}</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </nav>
    
</template>
<script>
export default {
    data(){
        return{
            drawer:false,
            links:[
                {icon:'dashboard',text:"Dashboard",route:'/'},
                {icon:'person',text:"AboutUs",route:'/aboutus'},
                {icon:'message',text:"Contact",route:'/contact'}
                ],
                snackbar:false
              
        
        }
    }
}
</script>
