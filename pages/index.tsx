import type { NextPage } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useMediaQuery } from '@chakra-ui/react'

const Home: NextPage = () => {

  

  const [isLargerThan650] = useMediaQuery('(min-width: 888px)')
  const [isLargerThan6502] = useMediaQuery('(max-width: 888px)')
  const [markdown, setMarkDown] = useState("Visit my [Github](https://github.com/Overlord15/markdown-nextjs) repository and give star ⭐");
  return (
    <>
      <Head>
        <title>
          Marky - By Anupam
        </title>
        <link rel="apple-touch-icon" sizes="180x180" href="/marky.png" />
        <link rel="shortcut icon" href="/marky.png" />
      </Head>
      <div>
        {isLargerThan650 &&
          <div className='center-div'>
            <textarea className='left-side'
              value={markdown}
              onChange={(e) => setMarkDown(e.target.value)}
              placeholder="Write your markdown here ......"
            >
            </textarea>
            <div className='right-side'>
              <ReactMarkdown>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        }
      </div>
      <div>
        {isLargerThan6502 &&
          <p>
            <textarea className='left-side2'
              value={markdown}
              onChange={(e) => setMarkDown(e.target.value)}
              placeholder="Write your markdown here ......"
            >
            </textarea>
            <div className='right-side2'>
              <ReactMarkdown>
                {markdown}
              </ReactMarkdown>
            </div>
          </p>
        }
      </div>
    </>
  )
}

export default Home
