import bodyimg from "../assets/3.png";

function Body() {
  return (
    <div className="pt-20 pb-10 text-lg text-center">
      <p className="font-semibold">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={bodyimg} alt="" className="py-10" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <div className="border-2 border-red-500 my-8"></div>
      <p className="font-bold mb-10 mt-20">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="my-4">
        CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA
        | SUGARS & DISTILLERIES PAPER & PULP | MARINE & DEFENCE | METAL & MINING
        | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC
        FIRE FIGHTING AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}

export default Body;
