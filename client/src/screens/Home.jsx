import { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post';
import Loader from '../components/Loader';

import { Helmet } from 'react-helmet'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setIsLoading(true);
        const fetch = async () => {
            try {
                const res = await axios.get('https://api-blog-devsh-shivams-projects-1021053b.vercel.app/api/posts')
                setPosts(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        }
        fetch();
    }, []);

    return <div className='max-w-3xl mx-auto px-4 relative ' >
         <Helmet>
            <title>dev.sh | Home </title>
            <meta name="title" content="dev.sh | Home" data-react-helmet="true"></meta>
            <meta name="description" content="dev.sh is a blog all about tech and computer engineering, with easy to follow tutorials and cheatsheets" />
            <link rel="canonical" href="https://blog.devsh.tech/" />
        </Helmet>
        <div className="mt-5 mb-5 sm:mb-12 sm:mt-4 ">
            <h1 className="text-white font-bold mb-2 sm:mb-4 sm:text-9xl text-5xl">
                dev.sh
            </h1>
            <p className="text-neutral-400 text-md sm:text-xl">
                A collection of guides and tutorials on web development and devops.
            </p>
        </div>
        <Loader isLoading={isLoading} />
        {posts.map((post) => (
            <Post key={post._id} post={post} />
        ))}
    </div>
}

export default Home