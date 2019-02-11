<template>
  <div class="home">
    <h1 class="subheading grey--text mt-3">AboutUs</h1>
    <v-container class="my-3">
      <v-carousel height="350">
        <v-carousel-item v-for="item in items" :key="item" :src="item.src">
          <h1 class="headline ma-3 white--text">{{item.heading}}</h1>
          <p class="title white--text ma-3">{{item.text}}</p>
        </v-carousel-item>
        
     </v-carousel>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {src: 'parking-1.jpg',color:"grey",text:'Our goal is to make parking cheap,easy and systematic so that no company should spend more money and employees to make the parking system for their company.',heading:'Goal'},
          {src: 'parking-7.jpg',color:"grey",text:'We provide parking with nominal charges of 1Rs per minute.Hence any person can use this facility.',heading:'Services'},
          {src: 'parking-3.jpg',color:"grey",text:'The Comapny is established in 1998 at Silicon Valley.By using Technology,We reduce the cost.We think of customer satisfaction rather than making money.',heading:'Company'},
          
        ]
      }
    }
  }
</script>

