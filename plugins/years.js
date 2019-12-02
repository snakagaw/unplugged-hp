import allPosts from './allPosts.js'

// カテゴリー一覧を作成
var years = {
  years: [],
  posts: {}
}
allPosts.forEach(function(post) {
  var postYear = post.date.format('Y')

  if (
    !years.years.find(function(element) {
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

export default years
