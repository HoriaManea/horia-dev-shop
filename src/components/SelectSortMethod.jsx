import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  min-width: 140px;
`;

const Select = styled.select`
  appearance: none;
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #b0b0b0;
  }

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.12);
  }
`;

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

function SelectSortMethod({ handleSortOption }) {
  return (
    <SelectWrapper>
      <Select name="filter" onChange={handleSortOption}>
        <option value="">Sortează...</option>
        <option value="price">Sortează după preț</option>
        <option value="title">Sortează după titlu</option>
      </Select>
    </SelectWrapper>
  );
}

export default SelectSortMethod;
