import Image from "next/image";
function ShiredChalange() {
  return (
    <>
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
    </>
  )
}

export default ShiredChalange