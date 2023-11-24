import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

export default async function reWrite(req, res) {
    let db = (await connectDB).db("forum");
    let {_id, ...Content} = req.body    
    console.log('Content: ', Content);

    await db.collection("post").updateOne(
        { _id: new ObjectId(req.body._id) }, 
        { $set: Content }
    );
    
    
    
    res.status(200).redirect("/list");

}