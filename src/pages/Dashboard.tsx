import { Link } from "react-router-dom";
import illustration from "../assets/Illustration.svg";
import ScheduleCard from "../components/dashboard/ScheduleCard";
import Navbar from "../components/navbar/Navbar";
import scheduleData from "../data/dashboardData";
import calendar from '../assets/DashSchedule.png'
import raiting from '../assets/rating.png'
import ProgressMB from '../assets/ProgressMB.png'


import './Dashboard.css'
import Rating from "../components/Rating_Section/Rating";
import Footer from "../components/footer/Footer";

export default function Dashboard() {
  const allSchedules = scheduleData.map((s, i) => (
    <ScheduleCard key={i} time={s.time} title={s.title} />
  ));

  return (
    <>
    <div className='mainDiv'>
    <Navbar/>
    <div className='w-full flex justify-center'>
     <img src={ProgressMB} alt="illustration" className="hidden  mt-5 w-[450px]" id='showSmall'/>
    </div>
    <section className=" w-4/5 mx-auto max-w-5xl mt-4" id='dashSection' >
      <img src={illustration} alt="illustration" className="hidden  md:block  mb-2 " id='hiddeSmall' />

      <div >
        <div>
          <div  className=' md:mt-6 grid grid-cols-2 grid-rows-2 gap-4 max-h-[150vh]' id='mainDiv'>
            <div className= " sm:font-bold w-[511px] sm:h-[257px] bg-[#FFF5EF]  rounded-2xl/
            flex flex-col items-center justify-center box-border rounded-md font-mainFont mb-3" id='one'>
              <p className="text-[2.5rem] text-[#615E83] mb-6">
                Day - <span className="text-[6rem] text-gray-800">01</span>
                <span className="text-2xl">/26</span>
              </p>
              <p className="text-[#94979C] text-lg">
                Batch 42 - Session starts at 5 am
              </p>
              <Link
                to="/courses"
                className="w-[380px] h-[50px] mb-3 bg-primaryOrange rounded-2xl text-xl text-white flex items-center justify-center
                " id='btnMB'
              >
                Click here to join the session →
              </Link>
            </div>
            <div id='two'>
              <img src={calendar} />
            </div>
            <div id='three'>
          <p className="font-semibold text-[32px] text-[#999999] underline" >
            Schedule
          </p>
          <div>{allSchedules}</div>
          </div>
          <div  id='four' >
              <img src={raiting} />
            </div>  
          </div>
        </div>
            
      </div>
      
    </section>
    <Footer className='footerDash'/>
    </div>
    </>
  );
}
