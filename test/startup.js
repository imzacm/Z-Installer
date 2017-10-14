const chai = require('chai'),
  mockery = require('mockery'),
  expect = chai.expect,
  path = require('path')

let electronApp

before(() => {
  electronApp = require('../main.js')
})

describe('Electron', () => {
  describe('should export an object', () => {
    it('that contains a started property', () => {
      expect(electronApp).to.have.property('started')
    })

    it('that contains a closed property', () => {
      expect(electronApp).to.have.property('closed')
    })
  })

  it('should start', () => {
    return electronApp.started.then((started) => {
      expect(started).to.equal(true)
    })
  })

  it('should close', () => {
    app.exit()
    return electronApp.closed.then((closed) => {
      expect(closed).to.equal(true)
    })
  })
})