import Image from "next/image";
import Link from "next/link";

export default function StartPage() {
  return (
    <div className="w-screen h-screen bg-white text-black">
      <div className="flex  flex-row justify-center items-center h-full">
        <div className=" w-[600px] h-[650px] justify-center flex-col flex ">
          <div className="flex flex-col items-center  gap-3">
            <h2 className="text-black	"> WelCome</h2>
            <p>
              The faster you fill up,the faster you will member of the community
            </p>
          </div>

          <div className="flex flex-col  mt-6 gap-3 pl-20">
            <label>Phone Number</label>
            <input className="pl-1 appearance-none w-3/4 md:w-3/4 h-12 border order-gray-500 rounded-md"></input>
          </div>
          <div className="flex flex-col  items-start mt-6 gap-3 pl-20">
            <label>Password</label>
            <input className="pl-1 appearance-none w-3/4 md:w-3/4 h-12 border order-gray-500 rounded-md"></input>
          </div>
          <div className="flex flex-row justify-start items-center mt-6 gap-x-32 pl-20">
            <div className="flex flex-row gap-3 items-center">
              <input
                disabled
                id="disabled-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="text-right">Remember Me</label>
            </div>
            <Link href="/">Forgot Password?</Link>
          </div>
          <div className="flex flex-col items-center justify-start mt-4 pr-10">
            <button className="bg-black w-3/4 md:w-[400px] h-12 text-white rounded-sm ">Login </button>
          </div>
        </div>
        <div className="relative w-[600px] h-[650px]">
          <Image
            src="/r.jpg"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
