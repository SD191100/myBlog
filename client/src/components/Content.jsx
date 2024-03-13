/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { default as atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
import rehypeRaw from 'rehype-raw'

const customStyle = {

    lineHeight: '1.5',

    fontSize: '1rem',

    borderRadius: '5px',

    backgroundColor: '#282C34',

    'padding': '20px',
    color: 'rgb(212 212 212)',
    'text-shadow': 'none',

};

const Content = ({ content }) => {
    return <div className='max-w-3xl mx-auto text-text-primary text-xl'>
        <ReactMarkdown
            children={content}
            className='markdown'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // pre: Pre,
                code(props) {
                    const { children, className } = props
                    const match = /language-(\w+)/.exec(className || '')
                    // console.log(match)
                    return match ? (
                        <SyntaxHighlighter
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={atelierCaveDark}
                            customStyle={customStyle}
                        />
                    ) : (
                        <code className=' '>
                            {children}
                        </code>
                    )
                }
            }}
        />
    </div>
}

export default Content