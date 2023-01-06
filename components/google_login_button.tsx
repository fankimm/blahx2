import { Box, Button } from '@chakra-ui/react';

const GoogleLoginButton = function () {
  return (
    <Box>
      <Button
        size="lg"
        width="full"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        leftIcon={<img src="/google.svg" alt="google logo" />}
      >
        구글 계정으로 시작하기
      </Button>
    </Box>
  );
};

export default GoogleLoginButton;