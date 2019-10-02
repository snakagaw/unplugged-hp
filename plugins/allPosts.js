import moment from 'moment'
const { fileMap } = require('../summary.json')

function markdownFileToURL(filename) {
  const regex = /^(\d{4}-\d+-\d+)-(.+).md$/u
  return filename
    .toString()
    .replace(regex, '$1/$2')
    .toString()
}

function extractDate(name) {
  const regex = /\d{4}-\d+-\d+/u
  return moment(name.match(regex)[0])
}

let allPosts = Object.entries(fileMap).map(([key, post]) => ({
  title: post.title,
  url: '/posts/' + markdownFileToURL(post.sourceBase),
  date: extractDate(post.sourceBase),
  category: post.category,
  summary:
    require('../output/' + post.base)
      .bodyHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      .replace(/\n/g, ' ')
      .slice(0, 100) + '···',
  text: require('../output/' + post.base).bodyHtml
}))
allPosts.sort(function(a, b) {
  return a.date.isBefore(b.date)
})

export default allPosts
