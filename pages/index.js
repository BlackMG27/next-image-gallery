import Head from 'next/head'
import {Box, Container, Text} from '@chakra-ui/react';
import { getCuratedPhotos } from '../../src/lib/api';

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Next.js Image Gallery</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Box overflow="hidden" bg="gray.50" minH="100vh">
        <Container>
          <Text
            color="purple.800"
            fontWeight="bold"
            mb="1.5rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "4.5xl", "5xl" ]}
          >
            Next.Js Image Gallery
          </Text>
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
