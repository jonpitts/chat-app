import { useAppSelector, useAppDispatch } from "../hooks";
import { sendMessage } from "../slices/messageSlice";
import { Container, FormControl, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  const message = useAppSelector((state) => {
    return state.messageReducer.value;
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    dispatch(sendMessage(e.target.value));
  };

  return (
    <VStack>
      <Container>
        <FormControl>
          {/* <Input onChange={handleChange} /> */}
          <Link to="/firebase">Firebase Chat</Link>
        </FormControl>
        <p>{message}</p>
      </Container>
    </VStack>
  );
}

export default Home;
