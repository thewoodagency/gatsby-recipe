const setupTags = recipes => {
  //console.log('setupTags', recipes);
  const allTags = {};
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag]++;
      } else {
        allTags[tag] = 1
      }
    })
  })

  const sortedTags = Object.entries(allTags).sort((a,b) => {
    return a[0].localeCompare(b[0])
  })
  console.log('sorted', sortedTags);
  return sortedTags;
}

export default setupTags;
