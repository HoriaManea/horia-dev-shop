import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import Spinner from "./Spinner";

const FeaturedProductsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  list-style: none;
`;

const Product = styled.li`
  list-style: none;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 20rem;
  border-radius: 0.5rem;
`;

const ProductTitle = styled.h3`
  padding-top: 6px;
  font-size: 16px;
  margin: 0.5rem 0;
  font-weight: 300;
  letter-spacing: 2px;
  color: #555;
  text-transform: uppercase;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const ShopButton = styled.button`
  background: none;
  border: none;
  color: #555;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  padding: 0;

  &:after {
    content: " →";
    transition: transform 0.2s ease;
  }

  &:hover:after {
    transform: translateX(4px);
  }

  &:hover {
    color: #000;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
`;

const PageButton = styled.button`
  background: #eee;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  &.active {
    font-weight: bold;
    background: #ccc;
  }
`;

function Items() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    fetch("/data/best-sellers-mock-data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  useEffect(() => {
    setCurrentPage(1); // reset when data is loaded
  }, [data]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [data, currentPage]);

  if (data.length === 0) return <Spinner />;

  return (
    <>
      <FeaturedProductsStyle>
        {currentItems.map((el, index) => (
          <Product key={`${el.id}-${index}`}>
            <ProductImage src={el.images[0]} alt={el.title} />
            <ProductTitle>{el.title}</ProductTitle>
            <ShopButton>{el.price}</ShopButton>
          </Product>
        ))}
      </FeaturedProductsStyle>

      <PaginationControls>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={`page-${i + 1}`}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </PageButton>
        ))}
      </PaginationControls>
    </>
  );
}

export default Items;
