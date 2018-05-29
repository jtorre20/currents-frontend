document.addEventListener("DOMContentLoaded", () => {
  // let articles = [];

  console.log("loaded");
  endPoint = `http://localhost:3000/api/v1/sections`;
  fetch(endPoint)
    .then(res => res.json())
    // .then(json => (articles = json))
    // .then(console.log(articles));
    .then(json => {
      console.log(json)
      json.forEach(s => {
        newS = new Section(s)
      });
      Section.renderAll()

    })

})

function getSection() {
  return document.getElementById("section-list")
}






// json.forEach(section => {
//   section.stories.forEach(story => {
//     newStory = new Article(story)

//     const category = `<div>
//       <h3>${section.title}
//           <h3>
//             ${newStory.render()}
//           </h3>
//       </h3>
//       </div>`;
//       document.querySelector("#section-list").innerHTML += category;
//   })
// new Article(section.stories);



// articles.


// <h2>${section.stories}</h2>
// const articles = ``

// });
