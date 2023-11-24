import { connectDB } from "@/util/database";

export default async function Write(req, res) {
    try {
        const db = (await connectDB).db("forum");
        const collection = db.collection("post");

        const result = await collection.insertOne(req.body);

        if (result.insertedCount === 0) {
            res.status(200).json({ text: "글 수정 실패" });
        } else {
            res.status(404).redirect("/list")
        }
    } catch (error) {
        // 데이터베이스 연결이나 쿼리 실행 중 오류 발생
        console.error("Error during database operation", error);
        res.status(500).json({ text: "서버 오류 발생" });
    }
}
