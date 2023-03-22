jest.spyOn(global.navigator, 'userAgent', 'jdjch')

import device from '../src/device/index'

describe('test device', () => {
  test('test isApp', () => {
    expect(device.isApp).toBe(true)
  })
})