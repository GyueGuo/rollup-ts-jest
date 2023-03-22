const { userAgent } = window.navigator
const isApp = (/jdjch/).test(userAgent)

export default {
  isApp,
}
