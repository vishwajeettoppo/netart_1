import leftimg from "../assets/1.png";
import rightimg from "../assets/2.png";

function Hero() {
  return (
    <div className="flex flex-col items-center pt-8 md:flex-row">
      <div>
        <img src={leftimg} alt="" width={300} className="md:w-[1000px]" />
      </div>
      <div className="text-lg text-gray-800">
        <h3 className=" font-bold py-4">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <li>
          C.R.I.&apos;s energy efficient products are well recognized by various
          Government Institutions, as trustworthy products for various projects
          across the globe to save energy.
        </li>
        <li>
          C.R.I. is the highest contributor in the country for the projects of
          EESL (Energy Efficiency Services Limited) to replace the old
          inefficient pumps with 5 Star rated energy efficient smart pumps with
          IoT enabled control panel.
        </li>
        <img src={rightimg} alt="" className="py-8" />
        <p>
          Government of India has awarded the{" "}
          <b>&quot;National Energy Conservation Award 2018&quot;</b>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
}

export default Hero;
