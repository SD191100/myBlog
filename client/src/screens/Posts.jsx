import Axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Content from '../components/Content'

const Posts = () => {
    const { slug } = useParams();
    const [post, setPost] = useState({ title: '', content: '', tags: [], slug: '', date: '' })
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await Axios.get(`https://api-blog-devsh-shivams-projects-1021053b.vercel.app/api/posts/${slug}`)
                setPost(res.data.post)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchPost()
    }, [slug])
    return (
        <div className='container max-w-3xl mx-auto px-4 text-white' >
            <div className=' mt-5 mb-5 sm:mb-10 sm:mt-7'>
                <p className='space-x-2 sm:text-base'>
                    {post.tags.map((tag, index) => {
                        return (
                            <Link key={index} to={`/explore/${tag}`} className='py-1 bg-neutral-700 text-neutral-300 px-3.5 rounded-full text-base' >{tag}</Link>
                        )
                    })
                    }
                </p>
                <p className='text-neutral-100 line-height-[25px] my-4 text-3xl sm:text-6xl sm:my-5  font-extrabold sm:leading-[70px]' >{post.title}</p>
                <p className='text-text-secondary sm:text-xl text-sm' >{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</p>
            </div>
            <Content content={post.content} />
        </div>
    )
}

export default Posts