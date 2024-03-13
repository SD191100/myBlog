/* eslint-disable react/prop-types */
// import React from 'react'

import Axios from "axios";
import { useState, useEffect } from "react"
import Tag from "../components/Tag";
import Loader from "../components/Loader";
import { Helmet } from 'react-helmet'

const Explore = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const fetchTags = async () => {
            try {
                const res = await Axios.get('https://api-blog-devsh-shivams-projects-1021053b.vercel.app/api/tags');
                setTags(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTags();
    }, [])

    return <div className="container text-white mx-auto max-w-3xl px-4 ">
        <Helmet>
            <title> Explore </title>
            <meta name="title" content="dev.sh" data-react-helmet="true"></meta>
            <meta name="description" content="dev.sh is a blog all about tech and computer engineering, with easy to follow tutorials and cheatsheets" />
            <link rel="canonical" href="https://blog.devsh.tech/explore" />
        </Helmet>
        <div className="mt-2 mb-2 sm:mb-5 sm:mt-7">
            <h1 className="text-white font-extrabold mb-2 sm:mb-5 sm:text-6xl text-3xl">
                Explore
            </h1>
            <p className="text-neutral-400 text-md sm:text-xl">
                Navigate your way through the guides and tutorials.
            </p>
        </div>
        <Loader isLoading={isLoading} />
        <div className="flex flex-col flex-wrap relative mb-80">
            <h2 className="mb-4 mt-7 text-xs tracking-wide uppercase text-neutral-500">
                Guides by Tag
            </h2>
            <div className="flex flex-wrap" >
                {tags.map((tag) => (
                    <Tag key={tag._id} title={tag.title} count={tag.count} />
                ))}
            </div>
        </div>
    </div>
}

export default Explore