import type { NextPage } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import { useState } from 'react'
import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'


const Home: NextPage = () => {
    const [markdown, setMarkDown] = useState("Welcome to Marky !");
    const updateInput = (e: any) => { setMarkDown(e.target.value) };
    const [isLargerThan650] = useMediaQuery('(min-width: 700px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 700px)')
    return (
        <>
            <Head>
                <title>
                    Marky - By Anupam
                </title>
                <link rel="apple-touch-icon" sizes="180x180" href="/marky.png" />
                <link rel="shortcut icon" href="/marky.png" />
            </Head>
            <Container size="container.sm" maxH="100vh" justifyContent="center" alignItems="center" pt="7">
                {isLargerThan650 &&
                    <p>
                        <Flex>
                            <Box display="block" pl="10px" m="auto" pb="10px" pt="14px" mr="5" fontSize={20} width="45vw" height="78vh" as="textarea" borderRadius='15' borderColor="red.500" bg="black" color="tomato" value={markdown} onChange={updateInput} ></Box>
                            <Box display="block" pl="10px" mt="1px" opacity={0.5} pb="10px" overflowY="scroll" fontSize={20} as="div" width="45vw" height="80vh" bg="grey" color="black" borderRadius='15'><ReactMarkdown>{markdown}</ReactMarkdown></Box>
                        </Flex>
                    </p>
                }
                {isLargerThan6502 &&
                    <p>

                        <Box pb="10px" pl="5px" borderRadius='15' pt="20px" fontSize={20} width="90vw" height="80vh" as="textarea" resize="none" bg="black" color="tomato" value={markdown} onChange={updateInput} ></Box>
                        <Box pb="10px" pl="5px" borderRadius='15' overflowY="scroll" fontSize={20} as="div" width="90vw" height="80vh" bg="grey" color="black" border="2px" borderColor="black"><ReactMarkdown>{markdown}</ReactMarkdown></Box>

                    </p>
                }
            </Container>
        </>
    )
}

export default Home
