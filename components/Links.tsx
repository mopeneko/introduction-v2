import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from './Link';

const Links = () => (
  <Box mt={3}>
    <Heading>Links</Heading>
    <Box p={3}>
      <UnorderedList>
        <ListItem>
          <Link>
            <a href="https://mope-blog.com" target="_blank" rel="noreferrer">
              Blog
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link>
            <a
              href="https://twitter.com/n1gg3rrs"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link>
            <a
              href="https://misskey.backspace.fm/@mopeneko"
              target="_blank"
              rel="noreferrer"
            >
              Misskey
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link>
            <a
              href="https://github.com/mopeneko"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Box>
);

export default Links;
