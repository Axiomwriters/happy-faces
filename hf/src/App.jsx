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

function App() {

  return (
    <>
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
      <div className="flex gap-5 font-bold">
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
    <div className="impact">
      <h1>Our Impact at a Glance</h1>
      <h2>Creating lasting change across Kenya's communities</h2>
      <div>
        <div>
          <IoPeopleOutline />
          <p>50+</p>
          <p>Youth Trained</p>
          <p>In vocational and leadership skills</p>
        </div>
        <div>
          <LuUtensils />
          <p>2,000+</p>
          <p>Children Fed</p>
          <p>Through school and community programs</p>
        </div>
        <div>
          <FaRegHeart />
          <p>3,000</p>
          <p>Sanitary Pads</p>
          <p>Distributed to girls in schools</p>
        </div>
        <div>
          <IoWaterOutline />
          <p>10+</p>
          <p>Water & Trees</p>
          <p>Clean water tanks + 1,000 trees planted</p>
        </div>
      </div>
    </div>

    {/* About Page */}
    <div>
      <h1>About Us</h1>
      <h2>Building a sustainable future for Kenya's communities through empowerment and opportunity</h2>
      <>
        <div>
          <MdOutlineDescription />
        </div>
        <div>
          <p>Who We Are</p>
          <p>Founded in 2022, Happy Faces Empowerment Network supports vulnerable communities in Kenya by creating opportunities for education, employment, and resilience.</p>
        </div>
      </>
       <>
        <div><FiTarget /></div>
        <div>
          <p>Our Mission</p>
          <p>To empower vulnerable and marginalized persons in Kenya with the skills, tools, and networks to achieve sustainable livelihoods.</p>
        </div>
      </>
       <>
        <div>
          <FaRegEye />
        </div>
        <div>
          <p>Our Vision</p>
           <p>A future where every vulnerable and marginalized person in Kenya has access to quality education, clean water, and decent work opportunities.</p>
        </div>
      </>
    </div>
  
  {/* Projects Page */}
    <div>
      <h1>Programs & Projects</h1>
      <h2>Comprehensive empowerment initiatives addressing community needs through multiple pathways</h2>
      <>
        <div></div>
        <>
          <div><FiScissors /></div>
          <div>
            <p>Empowerment Stitches</p>
            <p>
              Vocational training in fashion design, tailoring, and artisan bag production with mentorship, entrepreneurship training, and counseling for sustainable livelihoods.

              •Market-relevant skills: sewing, tailoring, pattern-making
              •Business incubation & entrepreneurship
              •Sustainable fashion using recycled materials
            </p>
          </div>
          <button>Learn More</button>
        </>
      </>
      <>
        <div></div>
        <>
          <div><IoWaterOutline /></div>
          <div>
            <p>Clean Water & Food Security</p>
            <p>
              Providing household water filters, community tanks, and training in climate-smart farming for health and sustainable food security.

              •Household water filters for safe drinking
              •Community storage tanks
              •Drip irrigation & climate-smart farming
            </p>
          </div>
          <button>Learn More</button>
        </>
      </>
      <>
        <div></div>
        <>
          <div><IoPeopleOutline /></div>
          <div>
            <p>Child & Youth Leadership Hub</p>
            <p>
              Nurturing young leaders through public speaking, financial literacy, mentorship programs, and youth forums on critical social issues.

              •Public speaking & financial literacy
              •Mentorship with role models
              •Forums on climate action & equality
            </p>
          </div>
          <button>Learn More</button>
        </>
      </>
    </div>

    {/* Feature Page */}
    <div>
      <h1>Featured: Empowerment Stitches</h1>
      <p>
        A comprehensive vocational training and holistic support initiative targeting young women and men who have completed high school or dropped out due to socioeconomic challenges. Rooted in SDG 4 (Quality Education), SDG 5 (Gender Equality), SDG 6 (Clean Water & Sanitation), and SDG 8 (Decent Work & Economic Growth).

        The program integrates mentorship, psychosocial support, GBV response, and entrepreneurship training to equip participants with tools to build sustainable livelihoods, regain confidence, and thrive.
      </p>
      <div>
        <h2>Join Us in Creating Change</h2>
        <p>
          Whether through donations, partnerships, or volunteering, your support helps us empower more communities across Kenya.
        </p>
        <button>Make a Donation</button>
        <button>Sponsor a Program</button>
        <button>Apply for Training</button>
      </div>
    </div>

    {/* Contact Page */}
    <div>
      <h1>Contact Us</h1>
      <h2>Get in touch to learn more about our programs or how you can help</h2>
      <>
        <div>
          <p><CiLocationOn /></p>
          <p>Location</p>
          <p>Nakuru (Head Office), Kenya</p>
        </div>
        <div>
          <p><IoCallOutline /></p>
          <p>Phone</p>
          <p>0724436338</p>
        </div>
        <div>
          <p><CiMail /></p>
          <p>Email</p>
          <p>info@happyfaces.org</p>
        </div>
        <div>
          <p><CiGlobe /></p>
          <p>Location</p>
          <p>Nakuru (Head Office), Kenya</p>
        </div>
      </>
      <p>We serve communities in Nakuru, Nairobi, and Kisumu</p>
    </div>
    </>
  )
}

export default App
