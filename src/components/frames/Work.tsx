// import "./App.css";
import Eclipse1 from "../../assets/Eclipse1.jpeg";
import Eclipse2 from "../../assets/Eclipse2.jpeg";
import Eclipse3 from "../../assets/Eclipse3.jpeg";
const ContentPage = () => {
  const data = [
    {
      id: 1,
      title: "We are invested in your success!",
      desc: [
        "To make it easier and more interactive our sessions are designed in such a way that you can opt how you want to wake up.",
      ],
      avatar: Eclipse1
      // "https://hips.hearstapps.com/hmg-prod/images/sports-guy-riding-bicycle-royalty-free-image-1576268922.jpg",
    },
    {
      id: 2,
      title: "Engage all aspects of the human body in 1 hour!",
      desc: [
        "Body alignment movements",
        "Physical exercise involve",
        "Dynamic warm ups",
        "Asanas",
      ],
      avatar: Eclipse2
      // "https://i.insider.com/5bfc51850591f222db5cc8e5?width=1136&format=jpeg",
    },
    {
      id: 3,
      title: "The secret to mind blowing mornings!",
      desc: [
        "Start the day with engaging your body physically, mentally and spiritually.",
      ],
      avatar: Eclipse3
      // "https://images.pexels.com/photos/6039243/pexels-photo-6039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
<>
    <div className="flex-col justify-center items-center w-[80%] bg-white mx-auto my-16 font-mainFont">
      {data.map((element, index) => (
        <div
          key={index}
          className={`flex items-center ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} mt-4`}
        >
          <div className="flex items-center justify-center rounded-full w-[300px] h-[300px] max-sm:h-[75px] max-sm:w-[75px] max-md:h-[125px] max-md:w-[125px]  max-lg:h-[200px] max-lg:w-[200px]">

            <img src={element.avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover rounded-full " />
          </div>
          <div className="ml-8 w-[80%]">
            <h3 className=" text-orange-500 font-bold mb-2 text-3xl leading-none max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px] xl:text-[32px]">{element.title}</h3>
            {element.desc.map((d, index) => {
              return element.desc.length === 1 ? (
                <p className=" text-gray-600 font-medium text-base max-sm:text-[12px] max-md:text-[14px] max-lg:text-[16px] xl:text-[20px]" key={index}>
                  {d}
                </p>
              ) : (
                <ul key={index} className="list-disc ml-5">
                  <li className="text-gray-600 font-medium text-base max-sm:text-[12px] max-md:text-[14px] max-lg:text-[16px] xl:text-[20px]">{d}</li>
                </ul>
              );
            })}
          </div>
        </div>
      ))}
     
    </div>
    {/* <div className="flex-row text-white font-bold justify-center items-center bg-white w-[70%] font-mainFont">
      <button className="bg-primaryOrange">Contact Us</button>
      </div> */}
    </>
  );
};

export default ContentPage;