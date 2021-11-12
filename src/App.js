import { useDisclosure } from '@chakra-ui/react'
import { SideDrawer } from './Components/Drawer'
import { Navbar } from './Components/Navbar'
import routes from './Router/routerConfig'
import { Footer } from 'Components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from 'util/ScrollTop'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Router basename="/">
        <ScrollToTop />
        <Navbar onHamburgerClick={onOpen} />
        <SideDrawer onDrawerOpen={isOpen} onDrawerClose={onClose} />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
