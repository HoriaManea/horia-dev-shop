import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";

const SortTtemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

function SortItems() {
  return (
    <SortTtemContainer>
      <Icon icon={faArrowUpWideShort} />
      <p>FILTER & SORT</p>
    </SortTtemContainer>
  );
}

export default SortItems;
