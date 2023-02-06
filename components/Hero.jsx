import Image from "next/image";
import Gradiant from "./Gradiant";
function Hero() {
  return (
    <>
      <div className=" sm:flex items-center justify-between sm:px-[200px] sm:py-[55px] left-[81px] ">
        {/* overlay */}
        <div className="z-10  mt-20 w-[90%]  m-auto">
          <h2 className=" sm:text-[56px]  text-[35px] text-[#262524] font-bold ">
            Healthy in side <br />{" "}
            <span className=" text-indigo-600">fresh</span> out side
          </h2>
          <p className="py-5 sm:text-[16px] text-[14px] w-[95%] text-justify text-gray-500 sm:w-[492px] sm:h-[84px]">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className="flex items-center   mt-[50px]">
            <div className="flex justify-center shadow-2xl cursor-pointer sm:mr-10 mr-5 bg-[#264373] sm:py-4 py-3 sm:px-3 px-7  text-[13px] sm:text-[16px] text-white rounded-md">
              <p className="sm:pr-10  pr-3  ">Get started</p>
              <i className="fa-solid sm:ml-12 fa-circle-arrow-right mr-0 text-xl sm:mr-3"></i>
            </div>

            <div className="flex justify-center items-center cursor-pointer shadow-2xl bg-white sm:py-4 py-3 sm:px-3 px-2 text-[13px] sm:text-[16px] text-[#264373] rounded-md">
              <i className="fa-solid fa-circle-play text-xl text-[#264373] mr-3 mb-0"></i>
              <p className="sm:pr-10 pr-5 ">Learn more</p>
            </div>
          </div>
          {/* brands logos */}
          <div className=" mt-10 mb-10 w-[90%]">
            <p className="mb-5 text-[16px]">Brands:</p>
            <div className=" flex items-center ">
              <div className="w-[100px] h-[70px] cursor-pointer">
                <Image src="/nike.png" alt="" width="60" height="60" />
              </div>
              <div className="w-[100px] h-[70px] cursor-pointer">
                <Image src="/adidas.png" alt="" width="60" height="60" />
              </div>
              <div className="w-[100px] h-[70px] cursor-pointer">
                <Image src="/puma.png" alt="" width="60" height="60" />
              </div>
              <div className="w-[100px] h-[70px] cursor-pointer">
                <Image src="/reebok.png" alt="" width="100" height="100" />
              </div>
            </div>
          </div>
        </div>

        {/* gym photo-1 */}

        <div className=" z-10  m-auto sm:w-[100%]">
          <Image src="/gym-1.png" alt="photo" height="700" width="700" />
        </div>
      </div>

      {/* Healthy in side fresh out side */}
      <div className="md:flex w-[80%]  sm:my-10 mt-[70px]  m-auto sm:w-[100%] items-center justify-between sm:px-[200px] sm:py-[55px]">
        <div className="sm:w-[558px] sm:h-[146px] font-medium  sm:text-[66px] w-[100%] text-[35px] ml-0">
          <h2>Healthy in side fresh out side</h2>
        </div>
        <div className=" sm:w-[674px] w-[95%] mt-3  h-[112px] sm:text-[16px] text-[14px] text-justify opacity-[50%]">
          <p className="sm:leading-8 leading-1 ">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home. Healthy life makes you
            more excited to live the day
          </p>
        </div>
      </div>

      <div className=" z-10  rounded-3xl mt-[100px] mb-[150px] justify-between sm:flex sm:py-15 py-10 pt-20  sm:px-[50px] px-2  text-white  w-[80%] items-center m-auto bg-gradient-to-r  from-[#6462F0] to-[#9190E9] ">
        <div className=" flex justify-center items-center mb-10 ">
          <div className="bg-indigo-300 sm:py-5 py-3 rounded-2xl sm:px-7 px-5 mr-10">
            <Image src="/man-1.png" alt="man-1" width="50" height="50" />
          </div>
          <div>
            <p className=" sm:text-[25px] text-[16px] sm:font-bold font-medium">
              Get that 11 line <br /> in 30 days
            </p>
            <p className=" mt-5 text-indigo-200 font-light">
              Learn more{" "}
              <i className=" fa-solid fa-arrow-right-long ml-3 text-white" />
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center mb-10 ">
          <div className="bg-indigo-300 sm:py-5 py-3 rounded-2xl sm:px-7 px-5 mr-10 ">
            <Image src="/man-2.png" alt="man" width="50" height="50" />
          </div>
          <div>
            <p className=" sm:text-[25px] text-[16px] sm:font-bold font-medium ">
              14 Days <br /> sherd challenge
            </p>
            <p className=" mt-5 text-indigo-200 font-light">
              Learn more{" "}
              <i className=" fa-solid fa-arrow-right-long ml-3 text-white" />
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center mb-10 ">
          <div className="bg-indigo-300 sm:py-5 py-3 rounded-2xl sm:px-7 px-5 mr-10">
            <Image src="/man-3.png" alt="man-3" width="50" height="50" />
          </div>
          <div>
            <p className=" sm:text-[25px] text-[16px] sm:font-bold font-medium">
            Get flat belly <br/> in 30 days
            </p>
            <p className=" mt-5 text-indigo-200 font-light">
              Learn more{" "}
              <i className=" fa-solid fa-arrow-right-long ml-3 text-gray-600" />
            </p>
          </div>
        </div>
      </div>

      <div className=" sm:flex justify-between my-10 items-center w-[85%] m-auto">
        <div className=" sm:hidden mt-10 block">
          <div>
            <h2 className=" sm:text-[40px] w-[85%] text-[40px] text-[#262524] font-medium ">
              Best full body <br /> workout to lose fat
            </h2>
            <div className="sm:w-[674px] w-[95%] mt-2 mb-10   h-[112px] sm:text-[16px] text-[14px] text-justify opacity-[50%]">
              <p>
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine. Even at home we still have to be diligent in
                exercising, either alone or with your friends at home.
              </p>
            </div>

            <div className="flex sm:mt-[80px] mb-20 w-[50%] items-center justify-center cursor-pointer shadow-2xl bg-[#264373] sm:py-4 py-3 sm:px-3 px-3 text-[13px] sm:text-[16px] text-[white] rounded-md">
              <p className="sm:pr-10">Get started</p>
              <i className=" fa-solid fa-circle-play sm:ml-20 ml-10 text-white" />
            </div>
          </div>
        </div>

        <div className=" hidden sm:block">
          <Image src="/gym-2.png" alt="gym-2" height="700" width="700" />
        </div>
        <div className="sm:block hidden">
          <div>
            <h2 className=" sm:text-[40px] w-[90%] text-[37px] text-[#262524] font-bold ">
              Best full body <br /> workout to lose fat
            </h2>
            <p className="py-5 sm:text-[16px] text-[14px] w-[80%] text-justify text-gray-500 sm:w-[492px] sm:h-[84px]">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.
            </p>

            <div className="flex sm:mt-[80px] w-[50%] items-center cursor-pointer shadow-2xl bg-[#264373] sm:py-4 py-3 sm:px-3 px-3 text-[13px] sm:text-[16px] text-[white] rounded-md">
              <p className="sm:pr-10">Get started</p>
              <i className=" fa-solid fa-arrow-right-long ml-10 text-white" />
            </div>
          </div>
        </div>
        <div className=" sm:hidden block w-[95%]">
          <Image src="/gym-2.png" alt="gym-2" height="700" width="700" />
        </div>
      </div>
      <Gradiant />
    </>
  );
}

export default Hero;
