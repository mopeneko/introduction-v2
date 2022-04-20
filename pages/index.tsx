import type { NextPage } from 'next';
import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Works from '../components/Works';
import Links from '../components/Links';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />

      <Container maxW="container.md">
        <About />
        <Works />
        <Links />
      </Container>
    </>
  );
};

export default Home;
