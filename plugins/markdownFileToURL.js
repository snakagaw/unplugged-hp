/**
 * 2019-10-08-hogehoge-foobar.md のようなファイル名を, 2019-10-08/hogehoge に変換して返す.
 * nuxt.config.js に登録しているので, $markdownFileToURL(2019...)で呼び出せる.
 * @param {string} filename
 * @return string
 */
function markdownFileToURL(filename) {
  const regex = /^(\d{4}-\d+-\d+)-(.+).md$/u
  return filename.toString().replace(regex, "$1/$2").toString()
}

export default ({}, inject) => {
  inject('markdownFileToURL', markdownFileToURL);
}
