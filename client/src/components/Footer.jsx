// import React from 'react'

import { Link } from "react-router-dom"

const Footer = () => {
  return <div className="text-neutral-400 sm:text-xl mt-5 space-y-2 pt-5 sm:mt-16 text-base text-center">
    <p>made with -`♡´- by <Link to={'https://github.com/SD191100'} ><span className="text-white" >dev.sh</span>ivam</Link></p>
    <p>© 2024 All rights reserved.</p>
  </div>
}

export default Footer