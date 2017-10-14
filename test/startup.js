const chai = require('chai'),
  mockery = require('mockery'),
  expect = chai.expect,
  path = require('path')

describe('Electron', () => {
  it('should create an electron object', () => {
    expect(global.electron).to.be.an('object')
  })

  it('should start', () => {
    expect(global.electron.started).to.equal(true)
  })
})