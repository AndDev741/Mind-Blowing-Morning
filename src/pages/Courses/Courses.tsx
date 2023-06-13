import { useState } from "react";
import {IoIosArrowDown} from "react-icons/io"
import {ccDetails,faqDetails} from "./Details";
import {FaChalkboardTeacher  } from "react-icons/fa" ;
import {GrMultimedia} from "react-icons/gr" ;
import {BsCalendar2Week , BsFillCameraVideoFill} from "react-icons/bs" ;
import {BiDownload,BiTimeFive} from "react-icons/bi" ;
import Navbar from "../../components/navbar/Navbar";    
import StarIcon from '../../assets/Star 1.png'
import PeopleIcon from '../../assets/PeopleIcon.png'
import './Courses.css'
import Footer from "../../components/footer/Footer";

export default function Courses() {
  return (
    <>
    <Navbar/>
      <div className="w-[100%] flex justify-center items-center" id='DivMain'>
        <div className="w-[90%] min-h-screen md:w-[70%]">
          <div className="Hero-Section mt-6 ">
            <h1 className="max-w-[70%] text-xl text-black lg:text-2xl" id='H1Courses'>
              Mind-blowing mornings: Wellness program
            </h1>
            
            <span id='InstructorP'>By Radhika Rao, Yoga Instructor</span>
            <div className="flex gap-3 mt-2">
            <div id='mainItem'>
               <img id='item' src={StarIcon}/>
                <span id='itemP'> 4.5 ratings</span>
            </div>
            <div id='mainItem'>
            <img id='item' src={PeopleIcon}/>
              <span id='itemP'> 33145 students</span>
              </div>
            </div>
            <div className="w-[100%] aspect-[2] bg-red-400 mt-2"></div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="cc bg-gray-50 justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course content
                </h4>
                <div>
                  <div className="flex w-full gap-4" id='itemSections'><p className="flex items-center gap-2"><FaChalkboardTeacher />9 Sessions</p> <p className="flex items-center gap-2"><BiDownload />12 Downloads</p></div>
                  <div className="flex w-full gap-4" id='itemSections'><p className="flex items-center gap-2"><GrMultimedia/> 9 Exercises </p><p className="flex items-center gap-2"><BsFillCameraVideoFill/>Zoom meeting (100% online)</p></div>
                </div>
              </div>
              <div className="cb justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course batches
                </h4>
                <div>
                <div className="flex w-full gap-4" id='itemSections'><p className="flex items-center gap-2"><BiTimeFive />5am to 6am</p> <p className="flex items-center gap-2"><BiTimeFive />7am to 8am</p></div>
                  <div className="flex w-full gap-4" id='itemSections'><p className="flex items-center gap-2"><BiTimeFive />5pm to 9pm</p> <p className="flex items-center gap-2"><BiTimeFive />7pm to 8pm</p></div>
                </div>
              </div>
              <div className="cd justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course duration
                </h4>
                <div>
                <p className="flex items-center gap-2" id='itemSections2'><BsCalendar2Week />35 day course</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-details w-full" id='hiddenText'>
          {ccDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
          
          </div>
          <div className=" mb-6"  id='hiddenText'>
            <h4 className=" text-lg my-4 font-bold mx-2">
              FAQs
            </h4>
            {faqDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
          </div>
          <div className='divMain'></div>
            <div className='divMain'>
                <h5>Course fee details</h5>
                <p className='sub'>Choose a plan talored to your needs </p>
                <div className='main2'>
                <div className='align'>
                  <div className='containers'>
                    <div className='container'>
                      <h6>Individual</h6>
                      <h6>Perfect to get started</h6>
                      <div className='costContainer'>
                        <span className='cost'>$11</span><span>/per month</span>
                      </div>
                      <div className='payment'>
                        <button>Payment details</button>
                      </div>
                    </div>
                
                </div>

                  <div className='containers'>
                    <div className='container'>
                      <h6>International</h6>
                      <h6>Perfect to get started</h6>
                      <div className='costContainer'>
                        <span className='cost'>$19</span><span>/per month</span>
                      </div>
                      <div className='payment'>
                        <button>Payment details</button>
                      </div>
                    </div>
                </div>
                  <div className='containers2'>
                    <div className='container2'>
                      <h6>Corporates</h6>
                      <h6>Perfect for professionals</h6>
                      <div className='costContainer'>
                        <span className='cost'>$32</span><span>/per month</span>
                      </div>
                      <div className='payment2'>
                        <button>Payment details</button>
                      </div>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>

  );

}

type Togal = {
  heading :String ,
  paragraph : String,
  id : Number
}
const Togal = ({heading, paragraph , id}: Togal) =>{
  
function handleTogal(){
  setheight(!height)
}

const [height,setheight] =useState(false)
  return(

   <div id={`${id}`}className=" py-2 px-3 cursor-pointer w-full" onClick={() =>{handleTogal()}}><div className=" grid grid-cols-[1fr_minmax(3px,_10px)] w-full border-b-2 align-middle">
     <h3 className=" text-lg my-2 py-1">{heading}</h3>
     <div className=" justify-self-end"><IoIosArrowDown/></div>
   </div><p 
    className={`togal overflow-hidden text-primaryOrange text-base ${!height? 'h-0' : 'h-max'}`} >{paragraph}</p></div>
  )
}

