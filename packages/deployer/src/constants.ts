import { BigNumber } from 'ethers'

export const EOA_UNIVERSAL_DEPLOYER_ADDRESS: string = '0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB'
export const UNIVERSAL_DEPLOYER_ADDRESS: string = '0x1b926fbb24a9f78dcdd3272f2d86f5d0660e59c0'
export const UNIVERSAL_DEPLOYER_2_ADDRESS: string = '0x8a5bc19e22d6ad55a2c763b93a75d09f321fe764'
export const UNIVERSAL_DEPLOYER_FUNDING: BigNumber = BigNumber.from(300).mul(BigNumber.from(10).pow(14))
export const UNIVERSAL_DEPLOYER_TX: string = "0xf9010880852416b84e01830222e08080b8b66080604052348015600f57600080fd5b50609980601d6000396000f3fe60a06020601f369081018290049091028201604052608081815260009260609284918190838280828437600092018290525084519495509392505060208401905034f5604080516001600160a01b0383168152905191935081900360200190a0505000fea26469706673582212205a310755225e3c740b2f013fb6343f4c205e7141fcdf15947f5f0e0e818727fb64736f6c634300060a00331ca01820182018201820182018201820182018201820182018201820182018201820a01820182018201820182018201820182018201820182018201820182018201820"

// expected bytecode for the universal deployer 2. If this changes for whatever reason then the universal
// deployer's addresses of contracts it's deployed will change, and so will UNIVERSAL_DEPLOYER_2_ADDRESS.
//
// do not change this value. it is here to integrity check within the UniversalDeployer. if you do change
// it however, then make sure to also update UNIVERSAL_DEPLOYER_2_ADDRESS.
//
// this value was originally copied from typings/contracts/factories/UniversalDeployer2__factory.ts
export const UNIVERSAL_DEPLOYER_2_BYTECODE = '0x608060405234801561001057600080fd5b5061013d806100206000396000f3fe60806040526004361061001e5760003560e01c80639c4ae2d014610023575b600080fd5b6100cb6004803603604081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506100cd915050565b005b60008183516020850134f56040805173ffffffffffffffffffffffffffffffffffffffff83168152905191925081900360200190a050505056fea264697066735822122033609f614f03931b92d88c309d698449bb77efcd517328d341fa4f923c5d8c7964736f6c63430007060033'