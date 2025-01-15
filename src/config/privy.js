export const privyConfig = {
  appId: 'cm5yff70s00hirprpvt03u4af',
  config: {
    loginMethods: ['wallet'],
    appearance: {
      theme: 'dark',
      accentColor: '#6d0000',
      showWalletLoginFirst: true,
    },
    defaultChain: {
      id: 1,
      name: 'Ethereum',
    },
    supportedChains: [
      {
        id: 1,
        name: 'Ethereum',
      },
      {
        id: 8453,
        name: 'Base',
      },
      {
        id: 84531,
        name: 'Base Goerli',
      }
    ],
    embeddedWallets: {
      noPromptOnSignature: false,
      requireUserPasswordOnCreate: false,
    }
  }
} 