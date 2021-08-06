import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text> Geraldo Boueres </Text>
                    <Text color="gray.300" fontSize="small">  geraldoboueres@gmail.com </Text>

                </Box>

            )}


            <Avatar site="md" name="Geraldo Boueres" src="https://github.com/diego3g.png" />

        </Flex>

    );
}