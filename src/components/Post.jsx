import React from "react";
import styled from "styled-components";
import { useTag } from "../contexts/TagContext";

const Box = styled.div`
  padding: 0px 15px;
  margin: 10px;
  border: black;
  border-radius: 10px;
  background-color: #e1e1e1;
`;

const Post = ({ name, content }) => {
  const { tagName } = useTag(); // 선택된 태그의 이름을 context로 부터 가져옴

  // 선택된 태그 이름이 존재하지 않거나(아직 태그 선택 안 한 경우),
  // prop으로 내려받은 posts의 name과 선택된 태그 이름이 같은 경우만 렌더링(선택한 태그만 렌더링)
  if (!tagName || tagName === name) {
    return (
      <Box>
        <h3>{name}</h3>
        <p>{content}</p>
      </Box>
    );
  }

  return null;
};

export default Post;
