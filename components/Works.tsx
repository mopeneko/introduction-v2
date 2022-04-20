import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from './Link';

const Works = () => (
  <Box mt={3}>
    <Heading>Works</Heading>
    <UnorderedList>
      <ListItem>
        <p>
          <Link>
            <a
              href="https://donhaialert.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              ドン廃あらーと
            </a>
          </Link>
        </p>
        <p>Mastodonの1日の統計情報を定期トゥートするアプリ</p>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default Works;
