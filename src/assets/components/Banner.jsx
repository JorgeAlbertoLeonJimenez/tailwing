import TitleText from "./TitleText";
import fondoB from "../image/Banner.png";
import PersonaB from "../image/Persona3.png";

export default function Banner() {
  return (
    <div
      className="xl:w-[70%] md:w-[95%] h-[378px] rounded-xl flex justify-around mt-[50px]"
      style={{
        backgroundImage: `url(${fondoB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={PersonaB} alt="" className="xl:w-[550px] md:w-[50%] h-[100%]"/>
      <TitleText position="text-right" BtnPosition="ml-[30%]"  />
    </div>
  );
}
