import React from "react";
import { useTag } from "../contexts/TagContext";

const SelectedTag = () => {
  const { tagId, tagName } = useTag();

  return (
    <div>
      {tagId ? <h3>Selected Tag: #{tagName}</h3> : <h3>No Tag Selected</h3>}
    </div>
  );
};

export default SelectedTag;
