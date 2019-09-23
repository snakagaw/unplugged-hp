import allPosts from './allPosts.js'

// カテゴリー一覧を作成
var categories = {}
allPosts.forEach(function(post) {
  if (!categories[post.category]) {
    categories[post.category] = []
  }
  categories[post.category].push(post)
})

export default categories
