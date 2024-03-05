import moment from 'moment'


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

async function allPosts() {
  const res = await fetch('../summary.json')
  const fileMap = await res.json()

  var files = Object.keys(fileMap)
  files.sort()
  files.reverse()

  var allPosts = files.map(file => ({
    title: fileMap[file].title,
    url: '/posts/' + markdownFileToURL(fileMap[file].sourceBase),
    date: extractDate(fileMap[file].sourceBase),
    category: fileMap[file].category,
    summary:
      require('../output/' + fileMap[file].base)
        .bodyHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
        .replace(/\n/g, ' ')
        .slice(0, 100) + '···',
    text: require('../output/' + fileMap[file].base).bodyHtml
  }))
  return allPosts
}

export default allPosts
