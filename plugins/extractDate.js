import moment from 'moment'
/**
 * 2019-10-08-hogehoge-foobar.md のようなファイル名かURLを, 2019-10-08に変換して返す.
 * nuxt.config.js に登録しているので, $markdownFileToURL(2019...)で呼び出せる.
 * @param {string} name
 * @return string
 */
function extractDate(name) {
  const regex = /\d{4}-\d+-\d+/u
  // return name.match(regex)[0]
  return moment(name.match(regex)[0])
}

export default ({}, inject) => {
  inject('extractDate', extractDate);
}
