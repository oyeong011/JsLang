import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';


export default async function Edit(props) {
    console.log('props: ', props);
    const db = (await connectDB).db("forum");

    let result = await db.collection("post").findOne({ _id: 
        new ObjectId(props.params.id) });
        
    console.log('result: ', result);
    
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/reWrite" method="POST">
                <input type="text" name="title" placeholder="제목" defaultValue={result.title}/>
                <input type="text" name="content" placeholder="내용" defaultValue={result.content}/>
                <input style={{display : "none"}} type="text" name="_id" placeholder="내용" defaultValue={result._id.toString()}/>
                <button type="submit">글작성</button>
            </form>
        </div>
    )
}