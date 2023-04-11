import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { tasks } from "../tasks";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="teal.200"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.300" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

