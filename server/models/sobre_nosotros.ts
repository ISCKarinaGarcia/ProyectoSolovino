import { Schema, model } from 'mongoose'

const sobreNosotrosSchema = new Schema(
    {
       vision:{
         type:String,
         required:true
       },

       mision:{
        type:String,
        required:true
      },

      equipo:{
        type:Array,
        required:true
      }



    });

export default model('SobreNosotros',sobreNosotrosSchema);

