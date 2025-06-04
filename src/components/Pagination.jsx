import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const PageButton = styled.button`
  background: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#555")};
  border: 1px solid #ccc;
  margin: 0 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton
          key={i}
          active={currentPage === i + 1}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
}
