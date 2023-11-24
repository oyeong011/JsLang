import { connectDB } from "@/util/database";
import "../globals.css";
import Link from "next/link";
import DetailLink from './DetailLink';


export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    console.log("result: ", result);
    return (
        <div className='list-bg'>
            {result.map((item, index) => {
                return (
                    <div className='list-item' key={index}>
                        <Link href={`/detail/${item._id.toString()}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <Link href={`/edit/${item._id.toString()}`}>
                            😊
                        </Link>
                        {/* <DetailLink/> */}
                        <p>{item.date}</p>
                    </div>
                );
            })}
        </div>
    );
}
