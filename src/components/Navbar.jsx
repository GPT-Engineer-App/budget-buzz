import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ bg: "gray.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: "gray.700" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ bg: "gray.700" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;