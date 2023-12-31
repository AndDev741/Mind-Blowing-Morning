import './Instructor.css'
import instructor1 from '../../assets/instructor1.png'
import instructor2 from '../../assets/instructor2.png'

type iprops = {
    iname:string,
    side:string,
    src: string
}

const Profile = ({iname,side, src}:iprops) => {
    const text = iname
    const text_length = text.length
  return (
    <div>
    <div className="circle w-[200px] aspect-square flex justify-center items-center rounded-full relative">
        <div className="instructor_image w-[170px] aspect-square flex justify-center items-center rounded-full ">
            <img src={src} alt="trainers" className=' w-full h-full bg-cover'  id='profile' />
        </div>
        <div className="intructor_text absolute w-full h-full text-black ">{text.split('').map((char,i)=>{ return(
            <span style={side === 'left'?{ rotate:`${(365 - (text_length * 15)) +(i*15)}deg`}:{rotate:`${(i*15)}deg`}} className='absolute left-[50%] origin-[0_100px]  text-primaryOrange font-bold'>{char}</span>)
        })}</div>
    </div>
    </div>




  )
}

export default Profile



