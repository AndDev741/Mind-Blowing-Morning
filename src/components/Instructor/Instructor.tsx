
import Profile from './Profile'

const Instructor = () => {
  return ( 
    <div className="instructor w-screen justify-center items-center flex flex-col gap-10">
        <div className=" w-full  py-5 flex flex-col gap-2 mt-12 ">
            <h2 className=' m-auto font-mainFont font-bold text-3xl text-primaryOrange'>Our Instructor</h2>
            <p className=' m-auto font-mainFont '>Experienced professionals in the field who can change your life!</p>
        </div>
        <div className="container mx-auto">
            <div className="i1 flex justify-start">
            <Profile iname='Meenakshi' side='left'></Profile>
            <p className=' max-w-[35rem] grid place-items-center text-primaryOrange '>Meenakshi is a passionate yoga instructor with over 10 years of experience in the field. She specializes in Hatha, Vinyasa, and Restorative yoga, and has a strong background in anatomy and meditation.</p>
            </div>

            <div className="i1 flex mt-[-4rem] justify-end">
            <p className=' max-w-[35rem] grid place-items-center'>Meenakshi is a passionate yoga instructor with over 10 years of experience in the field. She specializes in Hatha, Vinyasa, and Restorative yoga, and has a strong background in anatomy and meditation.</p>
            <Profile iname='Divya' side='right'></Profile>
            </div>
            <div className="i1 flex  mt-[-4rem] justify-start">
            <Profile iname='Swetha' side='left'></Profile>
            <p className=' max-w-[35rem] grid place-items-center text-primaryOrange'>Meenakshi is a passionate yoga instructor with over 10 years of experience in the field. She specializes in Hatha, Vinyasa, and Restorative yoga, and has a strong background in anatomy and meditation.</p>
            </div>

        </div>
    </div>
  )
}

export default Instructor