import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3" bg="white" p={4} rounded="md" shadow="md">
          <Heading as="h1" mb={4}>Financial Times</Heading>
          <Text fontSize="lg">
            Welcome to the Financial Times. Stay updated with the latest financial news and analysis.
          </Text>
        </Box>
        <Box flex="1" bg="gray.100" p={4} rounded="md" shadow="md">
          <Heading as="h2" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4}>
            <Text>Latest Articles</Text>
            <Text>Market Trends</Text>
            <Text>Investment Tips</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;