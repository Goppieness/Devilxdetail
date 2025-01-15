import React, { createContext, useState, useContext, useEffect } from 'react'
import { priviClient } from '../config/privi'

const PriviContext = createContext()

export const PriviProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const connect = async () => {
    try {
      const response = await priviClient.connect()
      setUser(response.user)
    } catch (error) {
      console.error('Failed to connect to Privi:', error)
    }
  }

  const disconnect = async () => {
    await priviClient.disconnect()
    setUser(null)
  }

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        const session = await priviClient.getSession()
        if (session) {
          setUser(session.user)
        }
      } catch (error) {
        console.error('Session check failed:', error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  return (
    <PriviContext.Provider value={{ user, loading, connect, disconnect }}>
      {children}
    </PriviContext.Provider>
  )
}

export const usePrivi = () => useContext(PriviContext) 