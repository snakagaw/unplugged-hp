const { fileMap } = require('../summary.json')

// カテゴリー一覧を取得.

function markdownFileToURL(filename) {
  const regex = /^(\d{4}-\d+-\d+)-(.+).md$/u
  return filename
    .toString()
    .replace(regex, '$1/$2')
    .toString()
}

var categories = {}
var posts = Object.entries(fileMap)
posts.forEach(function(item) {
  if (!categories[item[1].category]) {
    categories[item[1].category] = []
  }
  categories[item[1].category].push({
    url: '/posts/' + markdownFileToURL(item[1].sourceBase),
    title: item[1].title

  })
})

export default ({}, inject) => {
  inject('categories', categories)
}
