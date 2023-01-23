const shortid = require('short-id');


const registerUser = (req,res)=>{
    let email = req.body.email
    let idd = shortid.generate()
    if(email){
        db.findOne({email}, (err, doc)=>{
            if(doc){
                res.status(400).json({"status":"Failed", "reason":"Already registered"})
            }else{
                db.insertOne({email})
                res.json({"status":"success","id":idd})
            }
        })
    }else{
        res.status(400).json({"status":"Failed", "reason":"wrong input"})
    }
}