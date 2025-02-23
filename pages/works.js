import { Container, Heading, SimpleGrid, Badge, Stack } from '@chakra-ui/react'
import { HiStar } from "react-icons/hi"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import clockUi from '../public/images/works/Clock.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="clok"
            title={
              <Stack direction="row" align="center" spacing={2}>
                <Badge variant="solid" colorScheme="blue" fontSize="sm" px={2} py={1} borderRadius="md">
                  <HiStar style={{ marginRight: 4 }} /> New
                </Badge>
                <span>Melodify</span>
              </Stack>
            }
            thumbnail={clockUi}
          >
            Feel the Rhythm, Control the Sound.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
