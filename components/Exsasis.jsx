import Image from "next/image";

function Exsasis() {
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
    </>
  )
}

export default Exsasis