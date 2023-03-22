const getCookie = (name: string): string | number => {
  const part = `${name}=`
  const res = document.cookie.split(';').find((item) => {
    if (item.startsWith(part)) {
      return decodeURIComponent(item.split('=')[1])
    }
    return null
  })
  return res
}

const setCookie = (name: string, value: any = '', expires: number, path: string = '/', domain: string): void => {
  const date = new Date()
  date.setTime(date.valueOf() + (expires * 86400 * 1000))
  document.cookie = `${ name }= ${ value}; expires=${ date.toUTCString() }; path=${ path }; domain=${ domain || document.domain }`
}

export default {
  getCookie,  
  setCookie,
}