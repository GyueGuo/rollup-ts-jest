import cookie from '../src/cookie/index'

const { getCookie } = cookie

describe('cookie getCookie', () => {
  document.cookie = 'key=value;'

  test('test getCookie', () => {
    const res = getCookie('key')
    expect(getCookie).toBeCalled()
    expect(res).toBe('value')
  })

})