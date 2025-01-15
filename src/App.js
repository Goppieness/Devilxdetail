'use client';

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArtistSection from './components/ArtistSection'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { PrivyProvider } from '@privy-io/react-auth'

function App() {
  return (
    <PrivyProvider
      appId="cm5yff70s00hirprpvt03u4af"
      config={{
        loginMethods: ['wallet', 'email', 'sms'],
        appearance: {
          theme: 'dark',
          accentColor: '#6d0000',
          showWalletLoginFirst: true,
          defaultLoginMethod: 'wallet',
          showLoginMethodSwitcher: true,
        },
        walletConnectProjectId: "24f079a780733bf61e947a84209be56f",
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
          noPromptOnSignature: false
        },
        smsLogin: {
          enabled: true,
          phoneNumberCountries: ['US', 'CA']
        }
      }}
    >
      <div className="App">
        <Navbar />
        <Hero />
        <ArtistSection />
        <Gallery />
        <Footer />
      </div>
    </PrivyProvider>
  )
}

export default App
