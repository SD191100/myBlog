import { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post';
// import { Helmet } from 'react-helmet'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/posts')
                setPosts(res.data);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        }
        fetch();
    }, []);

    return <div className='max-w-3xl mx-auto px-4 ' >
        {/* <Helmet>
            <title>d.sh | Home</title>
            <meta name="description" content="A collection of guides and tutorials on web development and devops." />
        </Helmet> */}
        <div className="mt-5 mb-5 sm:mb-12 sm:mt-4">
            <h1 className="text-white font-bold mb-2 sm:mb-4 sm:text-9xl text-5xl">
                dev.sh
            </h1>
            <p className="text-neutral-400 text-md sm:text-xl">
                A collection of guides and tutorials on web development and devops.
            </p>
        </div>
        {posts.map((post) => (
            <Post key={post._id} post={post} />
        ))}
    </div>
}

export default Home