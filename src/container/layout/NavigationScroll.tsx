import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

const NavigationScroll = ({ children }: any) => {
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return children || null
}

export default NavigationScroll
