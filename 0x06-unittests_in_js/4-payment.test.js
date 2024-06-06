const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')
const { expect } = require('chai')
const sinon = require('sinon')

describe('test suites', function(){
    it('Spy thecalculateNumber method', function(){
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(100, 20)
    
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true
        calculateNumberSpy.restore()
    })

    it('Stub the calculateNumber method', function(){
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
        calculateNumberStub.withArgs('SUM', 100, 20).returns(10)

        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleSpy.restore();
    })
})
