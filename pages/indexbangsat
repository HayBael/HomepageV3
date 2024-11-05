import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
  IoLogoYoutube,
  IoLogoGithub,
  IoFolderOpenOutline,
  IoLogoDiscord,
  IoLogoInstagram
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&#39;m a full-stack student from Indonesia
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Snowy
          </Heading>
          <p>I am a ( Student / Editor )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/frazix.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am an Animator and a full-stack developer. I have experience working
          with web,
          <Link href="https://discord.gg/ynWdPzqhdH" target="_blank">
            Discord
          </Link>{' '}
          bots and some{' '}
          <Link href="https://www.python.org" target="_blank">
            Python
          </Link>{' '}
          scripts.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2011</BioYear>
          Lahir Di Bandung, Indonesia
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Masuk SD 
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Lulus SD Lanjut Ke SMP 
        </BioSection>
        <BioSection>
          <BioYear>2023 Sampe Sekarang</BioYear>
          Sekolah Di SMP Islam Al Azhar 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love 💖
        </Heading>
        <Paragraph>Gaming, Coding, and listening to music</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links 🔗
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/HayBael" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @HayBael
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/wargadarat/profilecard/?igsh=
