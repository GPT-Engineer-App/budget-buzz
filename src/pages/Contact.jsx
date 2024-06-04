import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Contact Us</Heading>
      <Text fontSize="lg">
        For inquiries, please email us at contact@financialtimes.com.
      </Text>
    </Box>
  );
};

export default Contact;