import { usePrivy } from '@privy-io/react-auth'
import './ConnectButton.css'

const ConnectButton = () => {
  const { 
    login, 
    logout, 
    authenticated, 
    user,
    ready,
    connectWallet 
  } = usePrivy()

  if (!ready) {
    return <button className="connect-button">Loading...</button>
  }

  const handleConnect = async () => {
    if (authenticated) {
      await logout()
    } else {
      await login()
    }
  }

  return (
    <div className="wallet-container">
      <button 
        onClick={handleConnect}
        className="connect-button"
      >
        {authenticated 
          ? `Disconnect (${user?.wallet?.address?.slice(0, 6)}...)` 
          : 'Connect Wallet'
        }
      </button>
      {authenticated && (
        <div className="wallet-info">
          {/* Can add additional wallet info here */}
        </div>
      )}
    </div>
  )
}

export default ConnectButton 