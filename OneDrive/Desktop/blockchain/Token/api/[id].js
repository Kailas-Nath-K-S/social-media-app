const Metadata=require("../Metadata.json");
module.exports=(req,res)=>{
    const{id}=req.query;
    res.json(JSON.parse(JSON.stringify(Metadata[id])));
}
