import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Melodify">
    <Container>
      <Title>Melodify</Title>
      <P>Feel the Rhythm, Control the Sound.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://melodify.example.com"
            target="_blank"
          >
            melodify.example.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/Melodify.png" alt="Melodify Image" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
