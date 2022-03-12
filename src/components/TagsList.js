import React from 'react';
import { Link } from 'gatsby';
import setupTags from "../utils/setupTags"

const TagsList = ({recipes = []}) => {
  const sortedTags = setupTags(recipes);
  const tagslist = sortedTags.map((tag, index) => {
    const [text, value] = tag;
    return (
      <Link to={`/${text}`}>
      <li key={index}>{text} ({value})</li>
    </Link>
    )
  });

  return (
    <div className={'tags-container'}>
      <h4>Tags</h4>
      <div className="tags-list">
        <ul>{tagslist}</ul>
      </div>

    </div>
  )
}

export default TagsList;