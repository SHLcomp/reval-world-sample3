import Navbar from "../../componets/navbar/Navbar"
import Hero from "../../componets/hero/Hero";
import Features from "../../componets/features/Features";
import Banner from "../../componets/banner/Banner";
import Collection from "../../componets/collection/Collection";
// import Latest from "../../componets/latest/Latest";
// import NewestProduct from "../../componets/newestProduct/NewestProduct";
// import OtherProduct from "../../componets/otherProduct/OtherProduct";
// import BeautyCare from "../../componets/beautyCare/BeautyCare";
import Footer from "../../componets/footer/Footer";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Navbar />
      <div>
        <Hero />
        <Features />
        <Collection />
        {/* <Latest /> */}
        {/* <NewestProduct /> */}
        {/* <OtherProduct /> */}
        {/* <BeautyCare /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
