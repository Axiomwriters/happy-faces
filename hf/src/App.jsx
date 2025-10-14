import { IoPeopleOutline } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { FiScissors } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import homeBg from './assets/home-bg.png';
import homeBg1 from './assets/home-bg.png';
import abt2 from './assets/abt-2.png';
import abt3 from './assets/abt-3.png';
import './index.css'

function App() {

  return (
    <>
    {/* Navbar */}
    
{/* Home Page code */}
    <div 
    className="home flex flex-col justify-center items-center bg-cover bg-center min-h-screen text-white"
    style={{ backgroundImage: `url(${homeBg})` }}
    >
      <h1
      className="text-5xl font-bold text-center"
      >Empowering Kenya's Youth, Women and Communities for a Sustainable Future</h1>
      <p
      className="text-center text-gray-200 text-2xl mb-5"
      >Happy Faces Empowerment Network is a community-based organization working in Nakuru, Nairobi, and Kisumu. We equip teenage mothers, youth school leavers, and marginalized communities with the skills, resources, and opportunities they need to build better lives.</p>
      <div className="home-btn flex gap-5 font-bold">
        <button 
        className="border-1 border-green-400 p-3 bg-green-400 rounded-lg text-medium"
        >Apply for Training</button>
        <button
        className="border-1 border-green-400 p-3 bg-green-400 rounded-lg txt-medium"
        >Donate Now</button>
        <button
        className="border-1 border-gray-900/50 p-3 bg-gray-900/50 rounded-lg txt-medium"
        >Sponsor a program</button>
        <button
        className="border-1 border-gray-900/50 p-3 bg-gray-900/50 rounded-lg txt-medium"
        >Partner with us</button>
      </div>
    </div>

    {/* Impact Page Code */}
    <div className="impact text-white bg-green-400 min-h-90">
      <h1 className="text-5xl  font-bold text-center p-6">Our Impact at a Glance</h1>
      <h2 className=" text-center mt-5 mb-5 text-xl text-gray-200 ">Creating lasting change across Kenya's communities</h2>
      <div className="impact-cards flex flex-wrap justify-center  m-3 gap-3 p-5 text-center">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><IoPeopleOutline className="text-4xl m-2" /></p>
          <p className="text-3xl font-bold m-1">50+</p>
          <p className="text-lg font-bold">Youth Trained</p>
          <p className="text-medium text-gray-200">In vocational and leadership skills</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><LuUtensils className="text-4xl m-2 text-center" /></p>
          <p className="text-3xl font-bold m-1">2,000+</p>
          <p className="text-lg font-bold">Children Fed</p>
          <p className="text-medium text-gray-200">Through school and community programs</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><FaRegHeart className="text-4xl m-2" /></p>
          <p className="text-3xl font-bold m-1">3,000</p>
          <p className="text-lg font-bold">Sanitary Pads</p>
          <p className="text-medium text-gray-200">Distributed to girls in schools</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><IoWaterOutline className="text-4xl m-2" /></p>
          <p className="text-3xl font-bold m-1">10+</p>
          <p className="text-lg font-bold">Water & Trees</p>
          <p className="text-medium text-gray-200">Clean water tanks + 1,000 trees planted</p>
        </div>
      </div>
    </div>

    {/* About Page */}
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="font-bold text-4xl mt-6 mb-3">About Us</h1>
      <h2 className="text-gray-500 text-xl text-center mb-4">Building a sustainable future for Kenya's communities through empowerment and opportunity</h2>
      <div 
      className="flex justify-center items-center p-3 gap-3 m-4 border-1 border-gray-200 rounded-lg"
      >
        <div className="border-0 bg-gray-300/50 p-3 rounded-lg">
          <MdOutlineDescription className="text-2xl text-green-400" />
        </div>
        <div>
          <p className="text-xl font-bold">Who We Are</p>
          <p className="text-lg text-gray-400 mt-3 w-lg">Founded in 2022, Happy Faces Empowerment Network supports vulnerable communities in Kenya by creating opportunities for education, employment, and resilience.</p>
        </div>
      </div>
       <div
       className="flex justify-center items-center p-3 gap-3 m-4 border-1 border-gray-200 rounded-lg"
       >
        <div className="border-0 bg-gray-300/50 p-3 rounded-lg">
        <FiTarget className="text-2xl text-green-400" />
        </div>
        <div>
          <p className="text-xl font-bold">Our Mission</p>
          <p className="text-lg text-gray-400 mt-3 w-lg">To empower vulnerable and marginalized persons in Kenya with the skills, tools, and networks to achieve sustainable livelihoods.</p>
        </div>
      </div>
       <div
       className="flex justify-center items-center p-3 gap-3 m-4 border-1 border-gray-200 rounded-lg"
       >
        <div className="border-0 bg-gray-300/50 p-3 rounded-lg">
          <FaRegEye className="text-2xl text-green-400" />
        </div>
        <div>
          <p className="text-xl font-bold">Our Vision</p>
           <p className="text-lg text-gray-400 mt-3 w-lg">A future where every vulnerable and marginalized person in Kenya has access to quality education, clean water, and decent work opportunities.</p>
        </div>
      </div>
    </div>
  
  {/* Projects Page */}
    <div className="min-h-screen bg-gray-100/50">
      <h1 className="font-bold text-4xl p-3 mb-3 text-center">Programs & Projects</h1>
      <h2 className="text-gray-500 text-xl text-center mb-4">Comprehensive empowerment initiatives addressing community needs through multiple pathways</h2>
      <div className="project-cards flex flex-wrap justify-center gap-6 p-8">
        <div className="border-1 border-gray-300 p-4 rounded-lg bg-white">
        <div 
        className="w-full h-40 bg-white rounded-xl shadow-md overflow-hidden mb-4"
        >
          <img 
            src={homeBg1}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <>
          <div><FiScissors className="mb-3 text-2xl text-green-400" /></div>
          <div>
            <p className="text-lg font-bold mb-2">Empowerment Stitches</p>
            <p className="text-medium text-gray-400 mb-3">
              Vocational training in fashion design, tailoring, and artisan bag production with mentorship, entrepreneurship training, and counseling for sustainable livelihoods.
            </p>
             <ul className="flex flex-col gap-3 text-gray-400 mb-3">
              <li>Market-relevant skills: sewing, tailoring, pattern-making</li>
              <li>Business incubation & entrepreneurship</li>
              <li>Sustainable fashion using recycled materials</li>
            </ul>
          </div>
          <button
          className="border-1 w-full border-gray-300 text-center p-1 rounded-lg"
          >Learn More</button>
        </>
      </div>
      <div className="border-1 border-gray-300 p-4 rounded-lg bg-white">
        <div
        className="w-full h-40 bg-white rounded-xl shadow-md overflow-hidden mb-4"
        >
          <img 
            src={abt2}
            className="w-full h-full object-cover"
            />
        </div>
        <>
          <div><IoWaterOutline className="mb-3 text-2xl text-green-400" /></div>
          <div>
            <p className="text-lg font-bold mb-2">Clean Water & Food Security</p>
            <p className="text-medium text-gray-400 mb-3">
              Providing household water filters, community tanks, and training in climate-smart farming for health and sustainable food security.
            </p>
             <ul className="flex flex-col gap-3 text-gray-400 mb-3">
              <li>Household water filters for safe drinking</li>
              <li>Community storage tanks</li>
              <li>Drip irrigation & climate-smart farming</li>
            </ul>
          </div>
          <button
          className="border-1 w-full border-gray-300 text-center p-1 rounded-lg"
          >Learn More</button>
        </>
      </div>
      <div className="border-1 border-gray-300 p-4 rounded-lg bg-white">
        <div
        className="w-full h-40 bg-white rounded-xl shadow-md overflow-hidden mb-4"
        >
          <img src={abt3}/>
        </div>
        <>
          <div><IoPeopleOutline className="mb-3 text-2xl text-green-400" /></div>
          <div>
            <p className="text-lg font-bold mb-2">Child & Youth Leadership Hub</p>
            <p className="text-medium text-gray-400 mb-3">
              Nurturing young leaders through public speaking, financial literacy, mentorship programs, and youth forums on critical social issues.
            </p>
            <ul className="flex flex-col gap-3 text-gray-400 mb-3">
              <li>Public speaking & financial literacy</li>
              <li>Mentorship with role models</li>
              <li>Forums on climate action & equality</li>
            </ul>
          </div>
          <button
          className="border-1 w-full border-gray-300 text-center p-1 rounded-lg"
          >Learn More</button>
        </>
      </div>
      </div>
    </div>

    {/* Apply Page */}
    <div className="apply bg-green-400 text-center text-white">
      <h1 className="font-bold text-4xl p-6">Join Us in Creating Change</h1>
        <p className="text-xl text-gray-300 p-3 mb-6">
          Whether through donations, partnerships, or volunteering, your support helps us empower more communities across Kenya.
        </p>
        <div className="apply-btn flex flex-wrap justify-center items-center m-10 max-w-full gap-3">
          <button className="border-0 p-2 rounded-lg bg-gray-100 text-black">Make a Donation</button>
          <button className="border-0 p-2 rounded-lg bg-gray-300">Sponsor a Program</button>
          <button className="border-0 p-2 rounded-lg bg-gray-300">Apply for Training</button>
        </div>
    </div>

    {/* Contact Page */}
    <div className="min-h-screen bg-gray-100/50">
      <h1 className="text-center font-bold text-4xl pt-8 m-4">Contact Us</h1>
      <h2 className="text-center text-lg text-gray-400">Get in touch to learn more about our programs or how you can help</h2>
      <div className="contact-cards flex flex-wrap m-8"> 
        <div className="flex flex-col justify-center items-center border-1 border-gray-200 bg-white rounded-lg p-5">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><CiLocationOn className="text-2xl text-green-400" /></p>
          <p className="m-3 text-gray-400 font-medium">Location</p>
          <p className="font-bold">Nakuru (Head Office), Kenya</p>
        </div>
        <div className="flex flex-col justify-center items-center border-1 border-gray-200 bg-white rounded-lg p-5">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><IoCallOutline className="text-2xl text-green-400" /></p>
          <p className="m-3 text-gray-400 font-medium">Phone</p>
          <p className="font-bold">0724436338</p>
        </div>
        <div className="flex flex-col justify-center items-center border-1 border-gray-200 bg-white rounded-lg p-5">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><CiMail className="text-2xl text-green-400" /></p>
          <p className="m-3 text-gray-400 font-medium">Email</p>
          <p className="font-bold">info@happyfaces.org</p>
        </div>
        <div className="flex flex-col justify-center items-center border-1 border-gray-200 bg-white rounded-lg p-5">
          <p className="border-0 rounded-full p-2 bg-gray-300/50"><CiGlobe className="text-2xl text-green-400" /></p>
          <p className="m-3 text-gray-400 font-medium">Location</p>
          <p className="font-bold">Nakuru (Head Office), Kenya</p>
        </div>
      </div>
      <p 
      className="text-center text-gray-400 text-lg"
      >We serve communities in <span className="font-bold text-black">Nakuru, Nairobi, and Kisumu</span></p>
    </div>
    </>
  )
}

export default App
