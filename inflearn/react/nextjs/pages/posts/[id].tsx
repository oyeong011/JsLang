import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import  Head from 'next/head';
import homeStyles  from '@/styles/Home.module.css';
import postStyle from '@/styles/Post.module.css';


const post = ({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}) => {
    return (
        <div className={postStyle.container}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={homeStyles.headingXl}>{postData.title}</h1>
                <div>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
            </article>
        </div>
    )
};

export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    console.log("paths: ", paths);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    if (!params) {
        return {
            props: {},
            notFound: true,
        };
    }

    const postData = await getPostData(params.id as string);

    return {
        props: {
            postData,
        },
    };
};
