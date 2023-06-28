import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Patrick Giveaway">
    <Container>
      <Title>Patrick Giveaway</Title>
      <P>A Cool Giveaway Discord Bot.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link
            href="https://discord.com/api/oauth2/authorize?client_id=908217619281227788&permissions=8&scope=bot%20applications.commands"
            target="_blank"
          >
            discord.com/api/oauth2/authorize?client_id=908217619281227788&permissions=8&scope=bot%20applications.commands <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/Phone_ui.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
