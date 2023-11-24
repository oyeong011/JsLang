import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {

    if(요청.method === 'POST'){
        console.log('요청.method: ', 요청.method)
        return 응답.status(200).json({ text: 'Hello' });
    }
    if(요청.method === 'GET'){
        console.log('요청.method: ', 요청.method)
        let db = (await connectDB).db('forum');
        let result = await db.collection('post').find().toArray();
        return 응답.status(200).json(result);
    }
    return 응답.status(200).json({ text: 'Hello' });
        
}