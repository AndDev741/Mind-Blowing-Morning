import Profile from "./Profile";
import './Instructor.css'

import instructor1 from '../../assets/instructor1.png'
import instructor2 from '../../assets/instructor2.png'
import instructor3 from '../../assets/instructor3.png'

const Instructor = () => {
  return (
    <div className="instructor w-screen justify-center items-center flex flex-col gap-10" id='allDiv'>
      <div className="text-center px-6 sm:px-0 w-full  py-5 flex flex-col gap-2 mt-12" id='allDiv2'>
        <h2 className=" m-auto font-mainFont font-bold text-[1.6em] ms:text-3xl text-primaryOrange" id='h2Small'>
          Our Instructor
        </h2>
        <p className=" hidden ms:block mt-5 text-lightGray m-auto font-mainFont" >
          Experienced professionals in the field who can change your life!
        </p>
      </div>
      <div className=" px-2 ms:pl-8 sm:container mx-auto" id='instructor1'>
        <div className="i1 ms:pl-10 flex justify-start mb-20 sm:mb-0 ">
          <Profile src={instructor1} iname="Meenakshi" side="left"></Profile>
          <p className="text-xs sm:text-base w-[90vw] sm:w-[100vw] ms:text-[16px] ms:ml-[32px] grid place-items-center text-primaryOrange " id='instructorP'>
            Meenakshi is a passionate yoga instructor with over 10 years of
            experience in the field. She specializes in Hatha, Vinyasa, and
            Restorative yoga, and has a strong background in anatomy and
            meditation.
          </p>
        </div>

        <div className="i1 ml-2 ms:pl-[26vw] flex flex-row ">
          <p className="py-[5vh] w-[45vw] place-items-center text-xs sm:text-base" id='instructorP'>
          Divya completed her 500-hour yoga teacher training program at a Yoga 
          Alliance accredited school. She is also a certified Ayurvedic practitioner 
          and has completed several workshops and courses on holistic health and wellness.
          </p>
          <Profile src={instructor2} className='imageI' iname="Divya" side="right"></Profile>
        </div>
        <div className="i1 ms:pl-10 flex sm:mt-[-4rem] justify-start mt-6">
          <Profile src={instructor3  } iname="Swetha" side="left" id='profile'></Profile>
          <p className=" sm:w-[100vw] w-[90vw] ms:text-[15px] ms:ml-[32px] grid place-items-center text-primaryOrange text-xs sm:text-base " id='instructorP'>
          Swetha completed his 200-hour yoga teacher training program at a Yoga Alliance 
          accredited school, where she learned the fundamentals 
          of yoga philosophy, anatomy, and teaching methodology. She is also a certified personal trainer.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
