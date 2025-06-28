export function getFeaturedProjects(projects){
    let projectsArray = [];

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].list.length; j++){
            if(projects[i].list[j].featured){
                projectsArray.push({
                    area: projects[i].area,
                    id: j,
                    thumbnail: projects[i].list[j].thumbnail
                });
            }
        }
    }

    // Shuffle array
    if(projectsArray.length > 0){
        projectsArray = shuffleArray(projectsArray);
    }

    return projectsArray;
}

function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}