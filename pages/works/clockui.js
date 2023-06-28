import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Clock Ui">
    <Container>
      <Title>Clock Website</Title>
      <P>A Simple Website With Clock</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://clock.brutalmc.ml"
            target="_blank"
          >
            clock.brutalmc.ml <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/Clock.png" alt="Clock Image" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
