import { useEffect } from 'react'

const Title = (title) => {
    useEffect(() => {
        document.title = `d.sh | ${title}`
    }, [title])
}

export default Title