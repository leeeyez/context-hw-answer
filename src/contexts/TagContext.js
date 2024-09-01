import { createContext, useContext, useState } from "react";
import hashtags from "../hashtag/hashtags";

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [tagId, setTagId] = useState(null);
  const tagName =
    hashtags.find((tag) => tag.id === tagId) &&
    hashtags.find((tag) => tag.id === tagId).name;
  console.log("tagId:", tagId);
  console.log("tangNam:", tagName);

  return (
    <TagContext.Provider value={{ tagId, setTagId, tagName }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);
