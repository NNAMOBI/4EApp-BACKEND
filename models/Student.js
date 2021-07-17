const mongoose = require('mongoose');



const StudentSchema = mongoose.Schema({
    
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true,
        min: 8,
        max: 15
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    role: {
          type: String,
          enum: ['user', 'admin'],
          required: true
    },
    
    timestamps: true
   
});
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("User", StudentSchema);