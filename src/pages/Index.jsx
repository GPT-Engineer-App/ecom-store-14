import { Box, Flex, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, Button, Text, Stack, Image, IconButton, useColorModeValue, Container, Badge, Divider, useToast } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUserCircle, FaStar } from "react-icons/fa";

const productCategories = ["Electronics", "Books", "Clothing", "Home & Kitchen", "Toys & Games", "Sports & Outdoors"];

const fakeProducts = [
  { id: 1, name: "Headphones", price: "59.99", image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcwNjM0MDY5NXww&ixlib=rb-4.0.3&q=80&w=1080', rating: 4 },
  { id: 2, name: "Smartwatch", price: "199.99", image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNofGVufDB8fHx8MTcwNjM0MDY5NXww&ixlib=rb-4.0.3&q=80&w=1080', rating: 5 },
  { id: 3, name: "Wireless Mouse", price: "24.99", image: 'https://images.unsplash.com/photo-1656946184681-d876ddb938ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMG1vdXNlfGVufDB8fHx8MTcwNjM0MDY5NXww&ixlib=rb-4.0.3&q=80&w=1080', rating: 3 },
  // Add more fake products here
];

const Index = () => {
  const toast = useToast();

  const handleAddToCart = (product) => {
    toast({
      title: `${product.name} added to cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={5}>
      <Flex justifyContent="space-between" mb={5}>
        <Heading as="h1" size="xl">
          E-Shop
        </Heading>
        <Stack direction="row" spacing={4} align="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input type="text" placeholder="Search products" />
          </InputGroup>
          <IconButton aria-label="Go to shopping cart" icon={<FaShoppingCart />} variant="outline" isRound />
          <IconButton aria-label="User account" icon={<FaUserCircle />} variant="outline" isRound />
        </Stack>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {productCategories.map((category, index) => (
          <GridItem key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
            <Heading as="h3" size="md" mb={3}>
              {category}
            </Heading>
            <Text fontSize="sm">Shop the latest {category} products.</Text>
          </GridItem>
        ))}
      </Grid>
      <Heading as="h2" size="lg" mt={10} mb={5}>
        Featured Products
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {fakeProducts.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
            <Image src={product.image} alt={product.name} borderRadius="md" mb={3} />
            <Heading as="h4" size="md">
              {product.name}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="teal.500">
              ${product.price}
            </Text>
            <Flex align="center" mt={1} mb={3}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <FaStar key={i} color={i < product.rating ? "gold" : "gray.300"} />
                ))}
            </Flex>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
