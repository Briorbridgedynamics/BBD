import Image from "next/image";
import im from "@/../../public/UT.png";
import x from "@/../../public/vercel.svg";
import about1 from "@/../../public/newAbout.png";
import bg from "@/../../public/bg.png";
import Link from "next/link";
import { Slider1 } from "@/components/slider1";
import { Slider2 } from "@/components/slider2";
import { Services } from "@/components/services";
import { Promises } from "@/components/promise";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className="h-auto bg-gradient-to-t from-primary via-g3 via-g2 to-g1  pt-16 ">
        <div className=" justify-center flex flex-col items-center  text-primary  ">
          <div className="text-[180px] font-bold font-Roboto_Condensed m-0 p-0 h-[170px]">
            YOU DREAM
          </div>
          <div className="text-[180px] font-bold font-Roboto_Condensed m-0 p-0">
            WE ACCOMPLISH
          </div>
          <div className="text-[20px] max-w-[90%] text-center">
            Your next Gen partner in digital transformation & We craft
            innovative marketing solutions to elevate your brand.
          </div>
          <div className="py-12">
            <Image
              src={im}
              alt=""
              className=" relative h-[950px] w-auto "
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen items-center justify-between mt-32">
        <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
          <div className="text-6xl max-w-[80%] py-6 font-Roboto_Condensed font-bold ">
          Ready to
          <br />
           Dominate?
           <br />
            Let's scale.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid laborum obcaecati itaque ea saepe vitae sint fuga eum
            consequuntur, quasi officiis distinctio repellat deleniti sequi iste
            similique porro atque.
          </div>
          <div className="my-6">
            <Link
              href="#"
              className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 "
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="  flex w-[55%]  h-[100%] justify-center  ">
          <Image
            src={about1}
            alt="x"
            className="bg-gradient-to-t from-g5 via-g4 to-g3 h-[100%] w-[80%] rounded-[36px] "
          ></Image>
        </div>
      </div>

      <div className="flex flex-row h-screen items-center justify-between my-32">
        <div className=" flex w-[55%]  h-[100%] justify-center  ">
          <Image
            src={x}
            alt="x"
            className="bg-gradient-to-t from-g3 via-g2 to-g1 h-[100%] w-[80%] rounded-[36px] "
          ></Image>
        </div>
        <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
          <div className="text-6xl max-w-[80%] py-6 font-Roboto_Condensed">
            Earn when you by stuff
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid laborum obcaecati itaque ea saepe vitae sint fuga eum
            consequuntur, quasi officiis distinctio repellat deleniti sequi iste
            similique porro atque.
          </div>
          <div className="my-6">
            <Link
              href="#"
              className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 "
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center flex-col my-32">
        <div className=" flex justify-center font-Roboto_Condensed text-8xl">
          Meet our Clients
        </div>
        <div className="flex justify-center w-[60%] text-center text-md p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
          velit odit delectus esse distinctio dignissimos ex ratione sit
          voluptatem mollitia aut impedit voluptate, blanditiis quas minus
          similique libero omnis!
        </div>
        <div className="p-8">
          <Image
            src={bg}
            alt=""
            className="max-h-[800px] bg-gradient-to-t from-g4 via-g2 to-g5 rounded-[36px]"
          ></Image>
        </div>
      </div>

      <div className=" flex items-center justify-center flex-col my-32 overflow-hidden bg-gradient-to-t from-primary via-lightb via-lightb to-primary">
        <div className="flex justify-center font-Roboto_Condensed text-8xl w-[50%] text-center ">
          Brands we have worked with
        </div>
        <div className="p-2">
          And way more – we’re adding new ones all the time.
        </div>
        <div className="mt-16 ">
          <Slider1></Slider1>
          <Slider2></Slider2>
        </div>
      </div>
      <div className="pt-16">
        <Services></Services>
        <Promises></Promises>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
