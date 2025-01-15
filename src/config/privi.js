import { PriviClient } from '@privi-sdk/client'

export const priviClient = new PriviClient({
  network: 'testnet',
  apiKey: 'cm5yff70s00hirprpvt03u4af',
  apiSecret: '3BrYsC6gM2goCWvFfN7xq4CW5uVJMX5NHvxRrPBQAGQ93j1peR4YLVqrcjKof6XbibRBCweNqj5ovct4i5EXS8Sh',
  supportedChains: ['ethereum', 'base'],
  defaultChain: 'ethereum'
}) 