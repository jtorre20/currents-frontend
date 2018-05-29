class Article {
  constructor(story) {
    this.title = story.title;
    this.description = story.description
    this.url = story.url
    this.image = story.url_to_image
    this.comments = story.comments.map(comment => {
      // debugger
      return new Comment(comment)
    })
    Article.all.push(this)
  }

  static renderAll () {
    let array = Article.all.map (article => {
      return article.render()
    })
    
  }

  render() {
    // debugger
    return `<div>
    <div>Title: ${this.title}</div> 
    <div>${this.description}</div>
    <div> Link: ${this.url} </div>
    <div><img src = ${this.image}></div>
    <div>${this.comments.map (comment => {
      return comment.render()
  }).join("")}</div>
    </div>`
  }

}
Article.all = []