import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import SelectSortMethod from "./SelectSortMethod";

const SortTtemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 22px;
`;

function SortItems({ handleSortItems, showSortDropdown, handleSortOption }) {
  return (
    <>
      <SortTtemContainer onClick={handleSortItems}>
        <Icon icon={faArrowUpWideShort} />
        <p>FILTER & SORT</p>
      </SortTtemContainer>
      {showSortDropdown && (
        <SelectSortMethod handleSortOption={handleSortOption} />
      )}
    </>
  );
}

export default SortItems;
