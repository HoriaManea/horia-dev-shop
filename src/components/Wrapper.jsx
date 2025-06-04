import styled from "styled-components";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem;
`;

function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

export default Wrapper;
