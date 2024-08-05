import Image from "next/image";
import bg from "@/../../public/bg.png";
import Link from "next/link";
import { Slider1 } from "@/components/slider1";
import { Slider2 } from "@/components/slider2";
import { Services } from "@/components/services";
import { Promises } from "@/components/promise";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Left } from "@/components/left";
import { Right } from "@/components/right";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden snap-y">
        <div className="h-auto bg-gradient-to-t from-primary via-g3 via-g2 to-g1  pt-16 ">
          <Header></Header>
        </div>
        <Left></Left>
        <Right></Right>
         
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
