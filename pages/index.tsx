import AdsSlider from '../component/main/AdsSlider/Slider';
import Footer from '../component/main/Footer/Footer'
import Category from '../component/main/CategorySlide/Category/Category';
import SearchBar from '../component/main/SearchBar/SearchBar'
import StoreCards from '../component/main/StoreCards-B/StoreCards';
export default function Home() {
  return (
    <div>
      <SearchBar/>
        <AdsSlider />
        <Category />
        <StoreCards/>
        <Footer />
    </div>
  )
}


