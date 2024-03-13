import Axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Post from "../components/Post";
import { Helmet } from 'react-helmet'
import Loader from "../components/Loader";

const TagList = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const { tagTitle } = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = async () => {
            try {
                const res = await Axios.get(`https://api-blog-devsh-shivams-projects-1021053b.vercel.app/api/tags/${tagTitle}`);
                setPosts(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPosts();
    }, [tagTitle])
    return <div className="container text-white mx-auto max-w-3xl px-4 ">
        <Helmet>
            <title>d.sh | Explore</title>
            <meta name="description" content="A collection of guides and tutorials on web development and devops." />
        </Helmet>
        <div className="mt-2 mb-2 sm:mb-5 sm:mt-7">
            <h1 className="text-white font-extrabold mb-2 sm:mb-5 sm:text-6xl text-3xl [text-transform: capitalize]">
                {tagTitle}
            </h1>
            <p className="text-neutral-400 text-md sm:text-xl">
                Explore guides and tutorials on {tagTitle}.
            </p>
        </div>
        <Loader isLoading={isLoading} />
        {posts.map((post) => (
            <Post key={post._id}  post={post} />
        ))}
    </div>
}
export default TagList