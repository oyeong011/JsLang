import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), 'posts')


export function getSortedPostsData() {

    const fileNames = fs.readdirSync(postsDirectory)
    console.log('fileNames: ', fileNames);

    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const fullpath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullpath, 'utf-8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data as { date: string, title: string }
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        else {
            return -1;
        }
    })
}
