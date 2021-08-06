import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'


export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg='gray.800'
        p="8"
        borderRadius={8}
        flexDirection="column"


      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>




      </Flex>


    </Flex >

  )
}
