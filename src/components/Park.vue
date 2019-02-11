<template>
     <v-dialog max-width="600px" v-model="dialog">
      <v-btn color="teal" flat slot="activator">
        <span>Park</span>
        <v-icon>add_location</v-icon>
      </v-btn>
      <v-card >
            <v-card-title><h2 class="mx-3">Park Your Vehicle</h2></v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                     <v-text-field label="Enter Your Name" v-model="name" prepend-icon="person" :rules="inputRules"></v-text-field>
                     <v-text-field label="Enter Vehicle Number" v-model="number" prepend-icon="directions_car" :rules="inputRules"></v-text-field>
                     <div class="text-xs-center">
                     <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Park</v-btn>
                     </div>
                </v-form>
            </v-card-text>
        </v-card>
        </v-dialog>
</template>

<script>
import db from '@/fb'

export default {
     data(){
     return{
            name:'',
            number:'',
            parkedTime:'',
            inputRules:[
                v => v.length >= 3 || 'Minimum 3 characters required'
            ],
            loading:false,
            dialog:false,
      
    
}
 },
methods:{
        submit(){
            var date = new Date()
            this.parkedTime=date.getTime();
            //console.log(this.time);
            
            
          if(this.$refs.form.validate()){
              this.loading = true;
              const park = {
                  name : this.name,
                  vehicleNo : this.number,
                  parkedTime : this.parkedTime
              }
              db.collection('parking').add(park).then(() => {
                  this.loading = false;
                  this.dialog = false;
                  this.$emit('vehicleParked');
                  
                  
              })
          }
}
}
}
</script>

