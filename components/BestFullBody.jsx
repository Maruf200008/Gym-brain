import Image from "next/image";
function BestFullBody() {
  return (
    <>
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
    </>
  );
}

export default BestFullBody;
