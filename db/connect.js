const mongoose=require('mongoose')

let url='mongodb://Nipurn:nipurn@ac-cbs74wc-shard-00-00.anapxdh.mongodb.net:27017,ac-cbs74wc-shard-00-01.anapxdh.mongodb.net:27017,ac-cbs74wc-shard-00-02.anapxdh.mongodb.net:27017/mfd?ssl=true&replicaSet=atlas-pslzmo-shard-0&authSource=admin&retryWrites=true&w=majority'

console.log('hello')

const connectDB=()=>{
    mongoose.connect(url)
    .then(()=>(console.log('Connected to DB...')))
    .catch((err)=>console.log(err))
}
console.log('kay')

module.exports={connectDB}