import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from './Link';

const Links = () => (
  <Box mb={3}>
    <Heading>Links</Heading>
    <UnorderedList>
      <ListItem>
        <Link>
          <a href="https://blog.lem0n.cc" target="_blank" rel="noreferrer">
            Blog
          </a>
        </Link>
      </ListItem>

      <ListItem>
        <Link>
          <a href="https://twitter.com/_m_vt" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </Link>
      </ListItem>

      <ListItem>
        <Link>
          <a
            href="https://mstdn.maud.io/@o10ng"
            target="_blank"
            rel="noreferrer"
          >
            Mastodon
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
);

export default Links;
