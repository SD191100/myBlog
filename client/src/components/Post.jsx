/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const Post = ({ post }) => {
    return <div >
        <div className='divide-neutral-500 divide-y'>
            <Link to={`/guide/${post.slug}`} className='hover:text-white cursor-pointer w-full flex flex-col group items-start justify-between py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors '>
                <span className='text-white' >{post.title}</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</span>
            </Link>
        </div>
        <div className='border-b border-gray-500 my-3 mx-1'></div>
    </div>
}

export default Post