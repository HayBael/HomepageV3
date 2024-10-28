import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 Not Found :)</Heading>
      <Text>Masih Dibuat Hehehehe 😁.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="purple">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
