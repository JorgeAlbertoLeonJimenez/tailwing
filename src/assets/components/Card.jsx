
export default function Card({nombrePerro,fotoP}) {

  return (
    <div className="bg-red-500 w-[280px] h-[378px] flex flex-col justify-center items-center rounded-xl justify-around">
      <img src={fotoP} alt="" className="w-[264px] h-[264px] rounded-xl" />
      <div className="w-[248px] h-[70px] flex flex-col justify-between">
        <h5 className="font-bold">{nombrePerro}</h5>
        <div className="flex text-Neutral">
          <p>
            Gene: <strong>Male</strong>
          </p>
          <p className="ml-[10px]">
            Age: <strong>2 months</strong>
          </p>
        </div>
        <h5 className="font-bold text-[14px]">6.900.000 VND</h5>
      </div>
    </div>
  );
}
