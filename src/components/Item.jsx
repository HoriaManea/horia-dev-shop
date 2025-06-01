import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ name, path }) {
  return <Link to={path}>{name}</Link>;
}

export default Item;
