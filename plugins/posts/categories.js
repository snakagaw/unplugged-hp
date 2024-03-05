import allPosts from './allPosts.js'

async function categories() {
// カテゴリー一覧を作成
var categories = {}
var posts = allPosts()
posts.forEach(function (post) {
  if (!categories[post.category]) {
    categories[post.category] = []
  }
  categories[post.category].push(post)
})
}

export default categories