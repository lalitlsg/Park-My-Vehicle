<template>
      <v-dialog max-width="600px" v-model="dialog">
      <v-btn color="teal" flat slot="activator">
        <span>Remove</span>
        <v-icon>delete</v-icon>
      </v-btn>
       <v-card >
            <v-card-title><h2 class="mx-3">Remove Your Vehicle</h2></v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                     
                     <v-text-field label="Enter Vehicle Number" v-model="number" prepend-icon="directions_car" :rules="inputRules"></v-text-field>
                     <div class="text-xs-center">
                        
                      <v-btn flat class="warning mx-0 mt-3" @click="remove" :loading="loading">Remove</v-btn>
                        
                      <div v-for="doc in document" :key="doc.name">
                        
                          <h3>Charges {{Math.ceil((removedTime - doc.parkedTime )/60000)}}Rs</h3>
                      </div>
                        
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
           document:[], 
           number:'',
        
           removedTime:'',
           charges:'',
             inputRules:[
                v => v.length >= 3 || 'Minimum 3 characters required'
            ],
            dialog:false,
            loading:false,
            
        }
    },
 methods:{
     remove(){
            var date = new Date();
            this.removedTime=date.getTime();
           // console.log('removedTime '+this.removedTime);
            var milliseconds= this.removedTime - this.parkedTime;
            this.charges = Math.ceil(milliseconds/60000);
           // console.log('charges '+this.charges);
            
            
           
            //console.log(document.shift());
            
            

         if(this.$refs.form.validate()){
             this.loading = true;
         }
        db.collection('parking').where('vehicleNo','==',this.number).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
            this.document.push({
                ...doc.data()
            })    
            
            doc.ref.delete();
            //this.dialog = false;
            this.loading = false;
            this.$emit('removeVehicle');
            
            
            
            
        })
        })
     }
 }
   
}
</script>

