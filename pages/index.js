import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import {Box, Container, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { getCuratedPhotos } from '../../src/lib/api';

export default function Home({data}) {
  const [photos, setPhotos] = useState(data);
  return (
    <div>
      <Head>
        <title>Next.js Image Gallery</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Box overflow="hidden" bg="gray.50" minH="100vh" minW="100%">
        <Container>
          <Text
            color="purple.800"
            maxW="100vw"
            fontWeight="bold"
            mb="1.5rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "4.5xl", "5xl" ]}
          >
            Next.Js Image Gallery
          </Text>
          <Wrap px=".5rem" spacing={4} justify="center">
          {
            photos.map((photo) => (
              <WrapItem
                key={photo.id}
                boxShadow="base"
                rounded="15px"
                overflow="hidden"
                bg="white"
                lineHeight="0"
                _hover={{boxShadow: "dark-lg"}}
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
