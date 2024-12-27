import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export default async function BlogPost({ params }) {
    const blogSlug = (await params).slug
    const exists = fs.existsSync(`app/blogposts/${blogSlug}.md`)

    // Check if the blog exists
    if (!exists) {
        return notFound()
    }
    // If the blog exists, parse it into html
    const blogPost = fs.readFileSync(`app/blogposts/${blogSlug}.md`).toString()
    const { data, content } = matter(blogPost)
    const processedContent = await remark().use(remarkHtml).process(content)
    const htmlContent = processedContent.toString()

    return (
        <main className='bg-white px-4'>
            <div className='flex gap-3 py-2'>
            <span className='text-black italic text-xl font-bold'>{data.author}</span>
            <span className='text-black py-1'>{data.date}</span>
            </div>
            <div className='prose' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </main>
    )
}