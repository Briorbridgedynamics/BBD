import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden p-0 m-0">

        <div className="absolute h-screen w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.6)] p-0 m-0"></div>
        <video
          className="h-[100%] w-[100%] object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/contact.mp4" type="video/mp4" />
        </video>
      
    </div>
  );
}
