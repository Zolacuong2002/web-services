const mongoose = require('mongoose');
const connectMongoose = () =>{
    // connect to database cloud
    const url = 'mongodb+srv://Zolacuong1:Zolacuong1@todo.id2zoiv.mongodb.net/'

    async function connect(){
        try{
            await mongoose.connect(url)
            console.log('connected to MongoDB')
        }catch(error){
            console.error(error)
        }
    }
    connect()
}
mongoose.set("strictQuery", false);
module.exports = connectMongoose;