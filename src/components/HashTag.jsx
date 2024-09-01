import React from "react";
import styled from "styled-components";
import { useTag } from "../contexts/TagContext";

const Tag = styled.button`
  margin: 10px;
`;

const HashTag = ({ tag }) => {
  const { setTagId } = useTag();

  return <Tag onClick={() => setTagId(tag.id)}>#{tag.name}</Tag>;
};

export default HashTag;
