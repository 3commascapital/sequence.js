
import { expect } from 'chai';

import * as arcadeum from '../src'

describe('Arcadeum wallet', function() {
  describe('wallet creation', () => {
    it('Should return wallet address', () => {
      const walletConfig = {
        threshold: 1,
        signers: [{
          weight: 1,
          address: '0xd63A09C47FDc03e2Cff620446b37f205A7D0679D'
        }],
        context: {
          factory: '0x7c2C195CD6D34B8F845992d380aADB2730bB9C6F',
          mainModule: '0x8858eeB3DfffA017D4BCE9801D340D36Cf895CCf'
        }
      }

      const pk = '0x87306d4b9fe56c2af23c7cc3bc69914eba8f7c8fc1d35b4c9a7dd7ea198a428b'
      const wallet = new arcadeum.Wallet(walletConfig, pk)

      const expected = '0xF0BA65550F2d1DCCf4B131B774844DC3d801D886'
      expect(wallet.address).to.be.equal(expected)
    })

    it('Should throw if signers is not part of the configuration', () => {
      const walletConfig = {
        threshold: 1,
        signers: [{
          weight: 1,
          address: '0xd63A09C47FDc03e2Cff620446b37f205A7D0679D'
        }],
        context: {
          factory: '0x7c2C195CD6D34B8F845992d380aADB2730bB9C6F',
          mainModule: '0x8858eeB3DfffA017D4BCE9801D340D36Cf895CCf'
        }
      }

      const pk = '0x10b1e03fb6f898f99733daca5829139dee87812b1f0eaf72dd4e6148f85e706f'
      expect(() => new arcadeum.Wallet(walletConfig, pk)).to.throw('Signer not found in configuration')
    })
  })
  describe('signing', () => {
    it('Should sign a message', async () => {
      const message = '0x1901f0ba65550f2d1dccf4b131b774844dc3d801d886bbd4edcf660f395f21fe94792f7c1da94638270a049646e541004312b3ec1ac5'

      const walletConfig = {
        threshold: 1,
        signers: [{
          weight: 1,
          address: '0xd63A09C47FDc03e2Cff620446b37f205A7D0679D'
        }],
        context: {
          factory: '0x7c2C195CD6D34B8F845992d380aADB2730bB9C6F',
          mainModule: '0x8858eeB3DfffA017D4BCE9801D340D36Cf895CCf'
        }
      }

      const pk = '0x87306d4b9fe56c2af23c7cc3bc69914eba8f7c8fc1d35b4c9a7dd7ea198a428b'
      const wallet = new arcadeum.Wallet(walletConfig, pk)

      const expected = '0x0001000173cb0485449f375942c864e14ebd3b21ae2f3b40a8a6aee4c1e54f026f9a02c27f648bc6304d85745836ee1a7569ae1c83caa600030b91762da1fe5330b394981b02'
      expect(await wallet.signMessage(message)).to.equal(expected)
    })
  })
})