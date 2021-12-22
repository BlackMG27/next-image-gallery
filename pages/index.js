import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import {Box, Container, Text, Wrap, WrapItem, Input, IconButton, InputRightElement, InputGroup} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getCuratedPhotos, getQueryPhotos } from '../lib/api';

export default function Home({data}) {
  const [photos, setPhotos] = useState(data);
  const [query, setQuery] = useState('');
  const handleSubmit = async (e) => {
    await e.preventDefault();
    const res = await getQueryPhotos(query);
    await setPhotos(res)
    await setQuery("");
  }

  return (
    <div>
      <Head>
        <title>Next.js Image Gallery</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Box overflow="hidden" bg="gray.200" minH="100vh" >
        <Container minW="100%" maxW="100vw" pt="2rem">
          <Text
            color="purple.800"
            fontWeight="bold"
            mb="1.5rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "4.5xl", "5xl" ]}
          >
            Next.Js Image Gallery
          </Text>
          <form onSubmit={handleSubmit}>
            <InputGroup pb="2rem" width="90%" maxW="70ch" margin="0 auto">
              <Input 
                placeholder="Search for Books" 
                variant="ghost"
                value={query}
                onChange={e => setQuery(e.target.value)}
                />
              <InputRightElement
              children={
                <IconButton
                  aria-label="Search"
                  onClick={handleSubmit}
                  px="30px"
                  icon={<SearchIcon/>}
                  bg="purple.800"
                  color="gray.100"
                  _hover={{backgroundColor: "green.400"}}
                  _active={{backgroundColor: "green.700"}}
                />
                }
              />
            </InputGroup>
          </form>
          <Wrap px=".5rem" spacing={4} justify="center">
          {
            photos.map((photo) => (
              <WrapItem
                key={photo.id}
                boxShadow="base"
                rounded="15px"
                cursor="pointer"
                overflow="hidden"
                bg="white"
                lineHeight="0"
                _hover={{
                  boxShadow: "dark-lg",
                }}
              >
                <Image src={photo.src.portrait} height={600} width={400} alt={photo.alt}/>
              </WrapItem>
            ))
          }
          </Wrap>
        </Container>
      </Box>
    </div>
  )
}

export async function getServerSideProps(){
  const data = await getCuratedPhotos()
  return {
    props : {
      data,
    }
  }
}
