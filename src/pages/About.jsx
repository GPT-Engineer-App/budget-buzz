import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text fontSize="lg">
        Welcome to the Financial Times. We provide the latest financial news and analysis.
      </Text>
    </Box>
  );
};

export default About;