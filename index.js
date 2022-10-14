  const express =require("express")
  const {   connection, MongooseModel}=require("./db")

  const app = express();
  app.use(express.json())
  app.get("/",(req,res)=>{
    res.send("welcome to home")
  })

  app.post("/addDetails",async(req,res)=>{
    const data=req.body;
    const details= new MongooseModel(data)
    await details.save()
    res.send(details)
  })

  app.listen(8020,async ()=>{
    try{
        await connection
        console.log("connect successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log("listening to 8020")
  })