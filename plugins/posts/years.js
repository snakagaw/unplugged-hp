import allPosts from './allPosts.js'

async function years() {
  // カテゴリー一覧を作成
  var years = {
    years: [],
    posts: {}
  }
  var posts = allPosts()
  posts.forEach(function (post) {
    var postYear = post.date.format('Y')

    if (
      !years.years.find(function (element) {
        return element === postYear
      })
    ) {
      years.years.push(post.date.format('Y'))
    }

    if (!years.posts[postYear]) {
      years.posts[postYear] = []
    }
    years.posts[postYear].push(post)
  })
}

export default years
