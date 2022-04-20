import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';

const About = () => (
  <Box mt={3}>
    <Heading>About</Heading>
    <Box p={3}>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>名前</Td>
              <Td>平出 晃規</Td>
            </Tr>

            <Tr>
              <Td>年齢</Td>
              <Td>20</Td>
            </Tr>

            <Tr>
              <Td>趣味</Td>
              <Td>プログラミング、音ゲー、ノベルゲーム</Td>
            </Tr>

            <Tr>
              <Td>好きなプログラミング言語</Td>
              <Td>Go、Python、Rust、TypeScript</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);

export default About;
