import './App.css'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Cards from './components/Cards'
import PopularBooks from './components/PopularBooks'
import CustomerReview from './components/CustomerReview'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Search/>
      <Cards/>
      <PopularBooks/>
      <CustomerReview/>
      <Footer/>
    </>
  )
}

export default App
