import React, { useState } from "react";
import Post from "./components/Post";
import TagBar from "./components/TagBar";
import SelectedTag from "./components/SelectedTag";
import styled from "styled-components";
import { TagProvider } from "./contexts/TagContext";

const App = () => {
  return (
    <TagProvider>
      <Body>
        <h1>Tag Selector</h1>

        {/* 현재 선택된 태그의 이름을 보여주는 곳 (A, B, C..) */}
        <SelectedTag />

        {/* 현재 선택된 태그에 해당하는 posts만 보여주는 곳 (선택되지 않았다면 전체 posts를 보여줌) */}
        <Box>
          {posts.map((post) => (
            <Post key={post.id} name={post.name} content={post.content} />
          ))}
        </Box>

        {/* 해시태그를 선택하는 하단바 */}
        <TagBar />
      </Body>
    </TagProvider>
  );
};

export default App;

const posts = [
  { id: 1, content: "Apple", name: "A" },
  { id: 2, content: "Banana", name: "B" },
  { id: 3, content: "Cherry", name: "C" },
  { id: 4, content: "Date", name: "D" },
  { id: 5, content: "Elderberry", name: "E" },
  { id: 6, content: "Fig", name: "F" },
  { id: 7, content: "Grapes", name: "G" },
  { id: 8, content: "Honeydew", name: "H" },
  { id: 9, content: "Iceberg Lettuce", name: "I" },
  { id: 10, content: "Jackfruit", name: "J" },
  { id: 11, content: "Kiwi", name: "K" },
  { id: 12, content: "Lemon", name: "L" },
  { id: 13, content: "Mango", name: "M" },
  { id: 14, content: "Nectarine", name: "N" },
  { id: 15, content: "Orange", name: "O" },
  { id: 16, content: "Papaya", name: "P" },
  { id: 17, content: "Quince", name: "Q" },
  { id: 18, content: "Raspberry", name: "R" },
  { id: 19, content: "Strawberry", name: "S" },
  { id: 20, content: "Tomato", name: "T" },
  { id: 21, content: "Ugli fruit", name: "U" },
  { id: 22, content: "Vanilla", name: "V" },
  { id: 23, content: "Watermelon", name: "W" },
  { id: 24, content: "Xigua", name: "X" },
  { id: 25, content: "Yam", name: "Y" },
  { id: 26, content: "Zucchini", name: "Z" },
  { id: 27, content: "Avocado", name: "A" },
  { id: 28, content: "Blueberry", name: "B" },
  { id: 29, content: "Coconut", name: "C" },
  { id: 30, content: "Durians", name: "D" },
  { id: 31, content: "Eggplant", name: "E" },
  { id: 32, content: "Ginger", name: "F" },
  { id: 33, content: "Grapefruit", name: "G" },
  { id: 34, content: "Hazelnut", name: "H" },
  { id: 35, content: "Indian Fig", name: "I" },
  { id: 36, content: "Jujube", name: "J" },
  { id: 37, content: "Kumquat", name: "K" },
  { id: 38, content: "Mushroom", name: "L" },
  { id: 39, content: "Noni", name: "N" },
  { id: 40, content: "Olive", name: "O" },
  { id: 41, content: "Pineapple", name: "P" },
  { id: 42, content: "Quinoa", name: "Q" },
  { id: 43, content: "Rhubarb", name: "R" },
  { id: 44, content: "Spinach", name: "S" },
  { id: 45, content: "Tangerine", name: "T" },
  { id: 46, content: "Umbrella Fruit", name: "U" },
  { id: 47, content: "Vegetable", name: "V" },
  { id: 49, content: "Ximenia", name: "X" },
  { id: 50, content: "Yarrow", name: "Y" },
  { id: 51, content: "Zinnia", name: "Z" },
  { id: 52, content: "Zest", name: "Z" },
];

const Body = styled.div`
  padding-left: 30px;
`;

const Box = styled.div`
  display: flex;
`;
