import "./index.css";
import Navbar from "./assets/components/Navbar";
import TitleText from "./assets/components/TitleText";
import principal from "./assets/image/principal.png";
import TitleP from "./assets/components/TitleP";
import BtnSecondary from "./assets/components/BtnSecondary";
import Card from "./assets/components/Card";
import fondoA from "./assets/image/BannerA.png";
import Banner from "./assets/components/Banner";
import TitleS from "./assets/components/TitleS";
import NavbarIcons from "./assets/components/NavbarIcons";
import FooterSubscribe from "./assets/components/FooterSubscribe";
import FooterS from "./assets/components/FooterS";
import Dogsl from "./assets/perros/Dogs.js"





function App() {
  
  
  const listDogs = Dogsl.map(dog => {
    return <Card nombrePerro={dog.nombre} fotoP={dog.Image} key={dog.nombre} />;
  });
  

  
  return (
    <>
      <main
        className="img overflow-hidden"
        style={{
          backgroundImage: `url(${fondoA})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="flex justify-center items-center justify-around ">
          <TitleText position="text-left" BtnPosition="float-left" />
          <img
            src={principal}
            alt=""
            className="w-[50%] h-[10%] top-0 right-0  object-contain"
          />
        </div>
      </main>
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center xl:w-[70%] justify-between mb-[50px] w-[100%] mx-[100px] mt-[40px] md:w-[95%]">
          <TitleP />
          <BtnSecondary txt="view more >" />
        </div>
        <div className="flex justify-center gap-10  md:w-[90%]  xl:w-[70%] xl:gap-10 flex-wrap">
          {listDogs}
        </div>
        <Banner />
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center xl:w-[70%] md:w-[95%] justify-between md:w-[95%] mb-[50px]  mx-[100px] mt-[40px]">
          <TitleP />
          <BtnSecondary txt="view more >" />
        </div>
        <div className="flex justify-center gap-10 xl:w-[70%] md:w-[90%] flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center items-center md:w-[95%] xl:w-[70%] justify-between mb-[50px] w-[100%] mx-[100px] mt-[40px]">
          <TitleS />
          <BtnSecondary txt="view all our selller >" />
        </div>
        <div className="">
          
        </div>
      </section>
      <footer className="flex flex-col justify-center  items-center h-[440px] bg-Linear">
        <FooterSubscribe />
        <FooterS/>
      </footer>
    </>
  );
}

export default App;
