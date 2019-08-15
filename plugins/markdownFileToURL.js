function markdownFileToURL(filename) {
  const regex = /^(\d{4}-\d+-\d+)-(.+).md$/u
  return filename.toString().replace(regex, "$1/$2").toString()
}

export default ({}, inject) => {
  inject('markdownFileToURL', markdownFileToURL);
}
