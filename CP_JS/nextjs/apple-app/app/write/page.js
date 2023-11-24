export default function Write(){
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <input type="text" name="title" placeholder="제목"/>
                <input type="text" name="content" placeholder="내용"/>
                <button type="submit">글작성</button>
            </form>


            <form action="/api/test" method="POST">
                <button type="submit">글발행</button>
            </form>
            <form action="/api/list" method="GET">
                <button type="submit">글가져와</button>
            </form>
            <form action="/api/time" method="GET">
                <button type="submit">시간</button>
            </form>
        </div>
    )
}