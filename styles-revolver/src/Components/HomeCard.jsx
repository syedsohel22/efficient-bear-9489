import React from "react";
import { Box, SimpleGrid, Img, Text, Heading } from "@chakra-ui/react";
const HomeCard = () => {
  return (
    <div>
      {/* card-1 */}

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" marginTop={10}>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12979/rtru_main_webp.webp?1673937576"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12980/dfg_main_webp.webp?1673937552"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12981/sdfs_%282%29_main_webp.webp?1673937513"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12982/yrt_main_webp.webp?1673937529"
            alt="img-1"
          />
        </Box>
      </SimpleGrid>

      {/* card-2 */}

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" marginTop={10}>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12983/dfdsf_main_webp.webp?1673937489"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12984/dfsdfsdf_main_webp.webp?1673937460"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12985/sdfs_main_webp.webp?1673937446"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12986/dewe_main_webp.webp?1673937429"
            alt="img-1"
          />
        </Box>
      </SimpleGrid>

      {/* card-3 */}

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" marginTop={10}>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12987/dew_main_webp.webp?1673937417"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12988/fds_main_webp.webp?1673937399"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12989/se_main_webp.webp?1673937343"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12990/df_main_webp.webp?1673937329"
            alt="img-1"
          />
        </Box>
      </SimpleGrid>

      {/* card-4 */}

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" marginTop={10}>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12991/rte_main_webp.webp?1673937313"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12992/tr_main_webp.webp?1673937287"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12993/ds_main_webp.webp?1673937270"
            alt="img-1"
          />
        </Box>
        <Box bg="tomato">
          <Img
            src="https://assets0.mirraw.com/frontpages/12994/fd_main_webp.webp?1673937242"
            alt="img-1"
          />
        </Box>
      </SimpleGrid>
      <Box
        marginTop={10}
        textAlign="left"
        w="80%"
        m="auto"
        border="1px solid grey"
        padding={10}
        gap={8}
        mb={10}
      >
        <Heading as="h4" size="md">
          Indian Clothing Online Shopping for Women & Men
        </Heading>
        <Text padding={8}>
          During 2500 BC, India became one of the first places to grow and use
          cotton for making clothes. Human art forms in Indian temples and
          monuments are perhaps the main source of information on Indian
          clothing. Apart from that the rock-cut sculptures, the cave paintings,
          and remains from the sites of Indus Valley civilization also give a
          detailed bureau of clothing trends in India.
        </Text>

        <Text padding={4}>
          A large majority of Indian clothing for men and women has evolved from
          garments like langota, lungi, sari, gamcha, and dhoti. India is the
          second most populous country in the world and it shows great diversity
          in its population as well. Clothing in India is greatly influenced by
          the religion people follow.
        </Text>
      </Box>
    </div>
  );
};

export default HomeCard;
