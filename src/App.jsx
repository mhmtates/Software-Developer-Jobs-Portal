import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero title='Yazılım Geliştirici Ol' subtitle='Yazılım İş İlanları Burada'/>
      <HomeCards/>
    </>
  )
}

export default App