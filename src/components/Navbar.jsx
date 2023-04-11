import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast= useToast()
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />
    })
  }
  return (

    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1">My Tasks</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Avatar src="/img/mario.png">
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>mario@netninja.dev</Text>
            <Button colorScheme="teal" onClick={showToast}>Log out</Button>
        </HStack>
    </Flex>
  )
}


