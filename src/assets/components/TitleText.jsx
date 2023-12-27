import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";

export default function TitleText(props) {
  return ( 
    <div className={` ml-10 xl:w-[480px] md:w-[50%] xl:mr-0 md:mr-10  flex flex-col justify-center ${props.position} `}>
      <h1 className="xl:text-[60px] md:text-[50px] font-bold text-Primary">One More Friend</h1>
      <p className="xl:text-[46px] md:text-[36px] font-bold">Thousands More Fun!</p>
      <p className={`xl:text-[16px]  ${props.position} mt-2`}>
        Having a pet means you have more joy, a new friend, a happy person who
        will always be whit you to have fun. we have 200+ different pets that
        can meet your needs!
      </p>
      <div
        className={`w-[320px] flex justify-between mt-10  ${props.BtnPosition}`}
      >
        <BtnSecondary txt="Explore Now" />
        <BtnPrimary txt="Explore Now" />
      </div>
    </div>
  );
}
