import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import { DiLinux } from "react-icons/di";
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <DiLinux size={24} />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='JetBrains Mono'
          fontWeight="bold"
          ml={3}
        >
          preferlinux
        </Text>
      </LogoBox>
    </Link>
  );
}

export default Logo;
