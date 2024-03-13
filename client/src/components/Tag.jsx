/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Tag = ({ title, count }) => {
    return <Link to={`/explore/${title}`} className="text-neutral-400 w-full bg-neutral-800 px-3 py-1.5 mr-2 mb-2 rounded-md text-sm hover:bg-neutral-300 hover:text-black sm:w-auto" >
        <div className="flex gap-2 justify-between">
            <p>{title}</p>
            <p className="text-neutral-500" >{count}</p>
        </div>
    </Link>
}

export default Tag