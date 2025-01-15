import { createConfig, configureChains } from 'wagmi'
import { mainnet, baseGoerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { createWeb3Modal } from '@web3modal/react'

const { chains, publicClient } = configureChains(
  [mainnet, baseGoerli],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient
})

export const web3modal = createWeb3Modal({
  wagmiConfig: config,
  projectId: 'YOUR_PROJECT_ID', // We can get this from WalletConnect
  chains
}) 