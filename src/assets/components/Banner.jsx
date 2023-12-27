import TitleText from "./TitleText";
import fondoB from "../image/Banner.png";
import PersonaB from "../image/Persona3.png";

export default function Banner() {
  return (
    <div
      className="w-[1100px] h-[378px] rounded-xl flex justify-around mt-[50px]"
      style={{
        backgroundImage: `url(${fondoB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={PersonaB} alt="" className="w-[550px] h-[100%]"/>
      <TitleText position="text-right" BtnPosition="float-right" />
    </div>
  );
}
