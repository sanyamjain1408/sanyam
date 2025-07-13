import React from 'react';
import { Link } from 'react-router-dom';
import { useLoginModal } from '../../context/LoginModalContext'; // ✅ add this line

const Home = () => {
  const { setIsLoginOpen } = useLoginModal(); // ✅ access modal control

  const items = [
    { img: '/breastfeeding.png', text: 'Breast Feeding', link: '/breastfeeding' },
    { img: '/cardiologist.png', text: 'Cardiologist' ,link: '/cardiologist' },
    { img: '/child.png', text: 'Pediatrics - Child/Infant issues', link: '/pediatrics' },
    { img: '/dentist.png', text: 'Dentistry', link: '/dentistry' },
    { img: '/dermatologist.png', text: 'Diabetologist', link: '/diabetologist' },
    { img: '/diabetis.png', text: 'Diabeties', link: '/diabeties' },
    { img: '/endocrinology.png', text: 'Endocrinology-Hormone Issues', link: '/endocrinology' },
    { img: '/ent.png', text: 'Ear , Nose & Throat' , link: '/ent' },
    { img: '/gasto.png', text: 'Gustroenterologist - Acidity , Gas..', link: '/gusto' },
    { img: '/gyno.png', text: 'Gynecologist', link: '/gyno' },
    { img: '/infurtility.png', text: 'Infertility Specialist' ,link: '/infertility' },
    { img: '/labreport.png', text: 'Lab Report Analysis' ,link: '/labreport' },
    { img: '/liver.png', text: 'Hepatology - Liver Issues' ,link: '/liver' },
    { img: '/lungs.png', text: 'Pulmonary Disease - Lungs/Breathing issues' ,link: '/lungs' },
    { img: '/nephrology.png', text: 'Nephrology - Kidney Issues' ,link: '/kidney' },
    { img: '/neuro.png', text: 'Neurologist' ,link: '/neuro' },
    { img: '/oncologist.png', text: 'Oncologist' ,link: '/oncologist' },
    { img: '/opto.png', text: 'Ophthalmology' ,link: '/optp' },
    { img: '/ortho.png', text: 'Orthopedics' ,link: '/ortho' },
    { img: '/physician.png', text: 'General Physician' ,link: '/physician' },
    { img: '/pregnancy.png', text: 'Pregneancy Problems' ,link: '/pregnancy' },
    { img: '/psychiatrist.png', text: 'Psychiatrist' ,link: '/psychiarist' },
    { img: '/sexologist.png', text: 'Sexologist' ,link: '/sexo' },
    { img: '/stress.png', text: 'Stress and Mental Health' ,link: '/stress' },
    { img: '/surgery.png', text: 'Surgery Second Opinion' ,link: '/surgery' },
    { img: '/weight.png', text: 'Weight Management' ,link: '/weight' },
  ];

  return (
    <>
      {/* Main Hero Section */}
      <div className=" flex flex-col-reverse md:flex-row items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-10">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="pt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800">
            Consult Specialist Doctors Online
          </h1>
          <h2 className="pt-3 text-xl sm:text-2xl md:text-2xl font-bold text-red-800">
            on Video/Audio Call & Chat
          </h2>
          <h3 className="pt-3 text-base sm:text-lg md:text-xl font-light text-gray-800">
            Consult Doctors from Top Hospitals within 30 minutes
          </h3>
          <div className="pt-5">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium sm:font-semibold px-4  sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition duration-300"
              onClick={() => setIsLoginOpen(true)} // ✅ This opens Header login modal
            >
              Talk to Doctor
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/docpat1.png"
            alt="docpat"
            className="w-3/4 sm:w-2/3 md:max-w-md h-auto"
          />
        </div>
      </div>

      {/* Scrollable Department Section */}
      <div className="px-4 sm:px-10 md:px-20 ">
        <div
          className="overflow-x-auto px-4 sm:px-8 py-6 bg-gray-100 shadow-2xl" 
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="inline-flex space-x-3 sm:space-x-4 md:space-x-6">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-24 sm:w-28 md:w-40 text-center">
                <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-16 sm:h-20 md:h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <Link
                  to={item.link}
                  className="mt-2 block text-xs sm:text-sm md:text-base font-semibold text-gray-700 hover:text-blue-600 transition"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
