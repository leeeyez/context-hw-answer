import React, { useState } from "react";
import styled from "styled-components";
import "../style/TagBar.css";
import HashTag from "./HashTag";
import hashtags from "../hashtag/hashtags";

const Bar = styled.div`
  background-color: #dedede;
`;

const TagBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Bar className={`tag-bar ${isOpen ? "open" : "closed"}`}>
      <div className="handle" onClick={toggleBar}>
        {isOpen ? "▼" : "▲"}
      </div>
      {isOpen && (
        <div>
          <h2>Hash Tags</h2>
          {hashtags.map((tag) => (
            <HashTag key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </Bar>
  );
};

export default TagBar;
