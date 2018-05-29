class Section{
  constructor(json) {
    this.id = json.id
    this.title = json.title
    // this.articles = []
    this.articles = json.stories.map(story => {
      return new Article(story)
    })
    Section.all.push(this)
  }
  static renderAll() {
    
    let array = Section.all.map(section => {
      return section.render()

    })
    getSection().innerHTML = array.join("")
  }

  render() {
    let articleArray = this.articles.map(article => {
      return article.render()
    })
    let joined = articleArray.join("")
    return `<div>${this.title}
      ${joined}
    </div>`
  }
}

Section.all = []