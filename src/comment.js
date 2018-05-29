class Comment {
  constructor(comment) {

    this.id = comment.id
    this.content = comment.content
    // debugger
    Comment.all.push(this)
  }

  // static renderAll () {
  //   comments = Comment.all.map(comment => comment.render())
  // }
  render () {
    return `<div>Comments: ${this.content}</div>`
  }
}

Comment.all = []