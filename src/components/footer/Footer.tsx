
import logo from "../../assets/logo.svg";
export default function Footer() {
  return (
    <footer className="flex gap-x-2 text-lightGray text-lg">
      <div>
        <img src={logo} alt="logo" className="w-24 h-16" />
        <p className="font-bold text-2xl">
          Clear your thoughts, Focus your mind, and Reduce stress!
        </p>
        <button className="w-[416px] h-14 bg-primaryOrange rounded-xl text-2xl font-bold capitalize text-white">
          Submit
        </button>
      </div>

      <div>
        <p className="font-bold">Quick Links</p>
        <a href="#">Home</a>
        <a href="#">Community</a>
        <a href="#">Courses</a>
      </div>

      <div>
        <p className="font-bold">Company</p>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </div>

      <div>
        <p className="font-bold">Further information</p>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">Cookies policy</a>
      </div>

      <div>
        <p className="font-bold">Need help?</p>
      </div>
    </footer>
  );
}
