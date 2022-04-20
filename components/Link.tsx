import { Link } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const MyLink: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Link color="teal.500">{children}</Link>
);

export default MyLink;
