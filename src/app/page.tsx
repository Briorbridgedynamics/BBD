import Image from "next/image";
import im from "@/../../public/image.png"
import x from "@/../../public/vercel.svg"
import im2 from "@/../../public/image2.webp"
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-ful h-auto">
      <div className="h-auto bg-gradient-to-t from-g3 via-g2 to-g1 pt-16 ">
        <div className=" justify-center flex flex-col items-center  text-primary ">
          <div className="text-[180px] font-bold font-Roboto_Condensed">YOU DREAM</div>
          <div className="text-[180px] font-bold font-Roboto_Condensed">WE ACCOMPLISH</div>
          <div className="text-[20px] max-w-[60%] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta illum, corrupti delectus amet non ratione! Nam molestias iure dolore rem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta 
          </div>
          <div className="py-12">
            <Image src={im} alt="" className="h-auto w-auto "></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen items-center justify-between mt-32">
        <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
          
          <div className="text-6xl max-w-[80%] py-6 font-Roboto_Condensed ">Earn when you by stuff</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid laborum obcaecati itaque ea saepe vitae sint fuga eum consequuntur, quasi officiis distinctio repellat deleniti sequi iste similique porro atque.</div>
          <div className="my-6">
            <Link href="#" className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 ">Let's Talk</Link>
          </div>
        </div>
        <div className="  flex w-[55%]  h-[100%] justify-center  ">
          <Image src={x} alt="x" className="bg-gradient-to-t from-g5 via-g4 to-g3 h-[100%] w-[80%] rounded-[36px] "></Image>
        </div>

      </div>


      <div className="flex flex-row h-screen items-center justify-between my-32">
        <div className=" flex w-[55%]  h-[100%] justify-center  ">
          <Image src={x} alt="x" className="bg-gradient-to-t from-g3 via-g2 to-g1 h-[100%] w-[80%] rounded-[36px] "></Image>
        </div>
        <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
          
          <div className="text-6xl max-w-[80%] py-6 font-Roboto_Condensed">Earn when you by stuff</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid laborum obcaecati itaque ea saepe vitae sint fuga eum consequuntur, quasi officiis distinctio repellat deleniti sequi iste similique porro atque.</div>
          <div className="my-6">
            <Link href="#" className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 ">Let's Talk</Link>
          </div>
        </div>
        
        
      </div>
      <div className=" flex items-center justify-center flex-col">
        <div className=" flex justify-center font-Roboto_Condensed text-7xl">Meet our Clients</div>
        <div className="flex justify-center w-[60%] text-center text-md p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia velit odit delectus esse distinctio dignissimos ex ratione sit voluptatem mollitia aut impedit voluptate, blanditiis quas minus similique libero omnis!</div>
        <div className="p-8">
          <Image src={im2} alt="" className="max-h-[800px] bg-gradient-to-t from-g3 via-g2 to-g1 rounded-[36px]"></Image>
        </div>
      </div>
      
    </div>
  );
}
