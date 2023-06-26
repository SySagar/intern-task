import Aside from "@/components/aside/Aside";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import moment from "moment";

export default function Home() {
  return (
      <div className="home min-h-screen w-full bg-slate-700 font-Interphase">
        <div className="aside-container flex flex-row absolute right-0 min-w-[23rem] h-full z-10">
          <p
            style={{ fontSize: "20px" }}
            className="font-Interphase w-fit p-8 underline underline-offset-8 text-slate-300"
          >
            {moment().format("LLL")}
          </p>
          <div className="border-l-2 border-[rgb(108,135,133,0.4)]">
            <Aside />
          </div>
        </div>


        <div className="backgorund-cover w-full h-full">

        <div  style={{zIndex:5}}>
        <button type="button" class="text-gray-900 z-20 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
        </div>

          <Image
            fill={true}
            loading="lazy"
            src="/assets/jpg/rain.jpg"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              backgroundImage: "url('/assets/jpg/rain-small.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            alt="background"
            background-size="cover"
          />
        </div>
      </div>
    
  );
}
