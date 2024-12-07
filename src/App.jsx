import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";






const StyledApp = styled.div`
  background-color: orange;
  padding: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Row type='vertical'>
        <StyledApp>
          <Row type='horizontal'>
            <Heading as='h1'>Hello</Heading>
            <div>
              <Heading as='h6'>Hello</Heading>
              <Button variation='primary' size='medium'>Check in</Button>
              <Button variation='secondary' size='large'>Check out</Button>
            </div>
          </Row>
          <Row type='vertical'>
            <Heading>Form</Heading>
            <form action="">
              <Input placeholder="Enter your name" />
              <Input placeholder="Enter your name" />
            </form>
          </Row>
        </StyledApp>
      </Row>
    </>
  );
}

export default App;
