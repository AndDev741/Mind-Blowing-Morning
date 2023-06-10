import Profile from "./Profile";
import './Instructor.css'

import instructor1 from '../../assets/instructor1.png'
import instructor2 from '../../assets/instructor2.png'
import instructor3 from '../../assets/instructor3.png'

const Instructor = () => {
  return (
    <div className="instructor w-screen justify-center items-center flex flex-col gap-10" id='allDiv'>
      <div className="text-center px-6 sm:px-0 w-full  py-5 flex flex-col gap-2 mt-12" id='allDiv2'>
        <h2 className=" m-auto font-mainFont font-bold text-3xl text-primaryOrange" id='h2Small'>
          Our Instructor
        </h2>
        <p className=" m-auto font-mainFont" id='pHidde'>
          Experienced professionals in the field who can change your life!
        </p>
      </div>
      <div className="px-6 sm:px-0 sm:container mx-auto" id='instructor1'>
        <div className="i1 flex justify-start mb-20 sm:mb-0">
          <Profile src={instructor1} iname="Meenakshi" side="left"></Profile>
          <p className="text-xs sm:text-base max-w-[35rem] grid place-items-center text-primaryOrange " id='instructorP'>
            Meenakshi is a passionate yoga instructor with over 10 years of
            experience in the field. She specializes in Hatha, Vinyasa, and
            Restorative yoga, and has a strong background in anatomy and
            meditation.
          </p>
        </div>

        <div className="i1 flex mt-[-4rem] justify-end">
          <p className=" max-w-[35rem] grid place-items-center text-xs sm:text-base" id='instructorP'>
            Meenakshi is a passionate yoga instructor with over 10 years of
            experience in the field. She specializes in Hatha, Vinyasa, and
            Restorative yoga, and has a strong background in anatomy and
            meditation.
          </p>
          <Profile src={instructor2} iname="Divya" side="right"></Profile>
        </div>
        <div className="i1 flex sm:mt-[-4rem] justify-start mt-6">
          <Profile src={instructor3  } iname="Swetha" side="left" id='profile'></Profile>
          <p className=" max-w-[35rem] grid place-items-center text-primaryOrange text-xs sm:text-base" id='instructorP'>
            Meenakshi is a passionate yoga instructor with over 10 years of
            experience in the field. She specializes in Hatha, Vinyasa, and
            Restorative yoga, and has a strong background in anatomy and
            meditation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
