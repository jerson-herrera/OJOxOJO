import { Navbar } from "./Layouts/Header.jsx"
import { AboutPage } from "./pages/about/AboutPage.jsx"
import { ContactPage } from "./pages/contact/ContactPage.jsx"
import { HomePage } from "./pages/home/HomePage.jsx"
import { ProjectsPage } from "./pages/projects/ProjectsPage.jsx"

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <AboutPage/>
    <ProjectsPage/>
    <ContactPage/>
    
    </>
  )
}

export default App
