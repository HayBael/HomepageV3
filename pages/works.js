import { Container, Heading, SimpleGrid, Badge, Stack, Box, Text } from '@chakra-ui/react'
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
              <Stack direction="row" align="center" spacing={1}>
                <Box bg="blue.700" color="white" px={1} py={1} borderRadius="xs" display="flex" alignItems="center" fontWeight="bold" fontSize="xs">
                  <HiStar style={{ marginRight: 3 }} /> NEW
                </Box>
                <Text fontSize="lg" fontWeight="bold">Melodify</Text>
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
