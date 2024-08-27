"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Select, { Options, StylesConfig } from "react-select";
import load from "@/../../public/loading.gif";
import {robot,sofia} from "@/utils/fonts";

interface val {
  value: String;
  label: String;
}
interface result {
  status: any;
  data: {
    data: any;
    status: string;
  };
}
export default function Home() {
  const options = [
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "App Development", label: "App Development" },
    { value: "Website Designing", label: "Website Designing" },
    {
      value: "Search Engine Optimization",
      label: "Search Engine Optimization",
    },
    { value: "Whatsapp Marketing", label: "Whatsapp Marketing" },
    { value: "Email Marketing", label: "Email Marketing" },
    { value: "Google Advertisement", label: "Google Advertisement" },
    { value: "Google Business", label: "Google Business" },
    { value: "Content Management", label: "Content Management" },
  ];
  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      focus: "none",
      isFocused: "border-red-600",
    }),
  };

  const [name, setName] = useState("");
  const [service, setService] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState(0);
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);

  const submitData = async () => {
    if (name === "" || email === "" || business === "") {
      alert("Fill the form Accurately (name,email,business) might be missing");
      return;
    }
    if (contact.toString().length != 10) {
      // console.log(contact);
      alert("Fill the Contact Number accurately");
      return;
    }
    try {
      setLoading(true);
      const URL: string = process.env.NEXT_PUBLIC_API_URL!;
      // console.log(URL);
      const date = new Date();
      const timestamp =
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString() +
        " " +
        date.toTimeString();
      const res: result = await axios.post(
        URL,
        {
          name: name,
          email: email,
          date: timestamp,
          contact: contact,
          business: business,
          comments: comments,
          services: service,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res);
      if (res.data.status == "success") {
        alert("Thank You for submitting the Enquiry Form.");
        setBusiness("");
        setName("");
        setContact(0);
        setComments("");
        setEmail("");
        setService([]);
      } else {
        alert("Unfortunately Something went wrong try again later. ");
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert("Something went wrong. Please try again later.");
      console.log(e);
    }
  };
  return (
    <div className="flex w-full h-[100vh] overflow-hidden p-0 m-0 items-center justify-center">
      <div className="absolute h-screen w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.3)] p-0 m-0"></div>
      <video className="h-[100%] w-[100%] object-cover" loop autoPlay muted webkit-playsinline >
        <source src="/contact.mp4" type="video/mp4" />
      </video>
      <div className=" flex absolute top-auto  h-auto min-h-[600px] lg:w-[50%] md:w-[80%] bg-[rgba(0,0,0,0.8)] items-center flex-row  flex-col ">
        <div className= {`w-[100%] text-primary text-6xl font-bold py-8 px-16 font-R ${sofia}`}>
          Let's
          <br />
          Connect...
          {/* <Typewriter
            options={{
              
              strings: ["..."],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </div>
        <div className="h-[100%] lg:w-[55%] md:w-[65%] w-[85%] text-primary  font-bold p-2  items-center justify-center">
          {loading == true ? (
            <div className="flex justify-center h-[300px] ">
              <Image
                src={load}
                alt="Loading..."
                className="h-[100px] w-auto m-auto"
              ></Image>
            </div>
          ) : (
            <form action={() => {}} method="post">
              <div className="p-2 ">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="p-2 ">
                <input
                  id="business"
                  name="business"
                  type="text"
                  value={business}
                  className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  placeholder="Business Info"
                  onChange={(event) => {
                    setBusiness(event.target.value);
                  }}
                />
              </div>
              <div className="p-2 ">
                {/* <input
                id="name"
                name="name"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Services Required"
              /> */}
                <Select
                  isMulti
                  name="colors"
                  options={options}
                  className=" bg-transparent peer h-auto w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300 basic-multi-select"
                  classNamePrefix="Services"
                  styles={colourStyles}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "black",
                      primary: "transparent",
                      primary50: "black",
                      primary75: "black",
                      neutral50: "gray",
                      neutral0: "gray",
                    },
                  })}
                  onChange={(event: any) => {
                    console.log(event);
                    var temp: Array<string> = [];
                    for (var i = 0; i < event.length; i++) {
                      temp.push(event[i].value);
                    }
                    // console.log(temp);
                    setService(temp);
                  }}
                  placeholder="Services.."
                />
              </div>
              <div className="p-2 ">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  className=" bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="p-2 ">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  // value={contact}
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  placeholder="Contact Number"
                  onChange={(event) => {
                    setContact(Number(event.target.value));
                  }}
                />
              </div>
              <div className="p-2 ">
                <input
                  id="comments"
                  name="comments"
                  type="text"
                  value={comments}
                  className=" bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  placeholder="Comments (Optional)"
                  onChange={(event) => {
                    setComments(event.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" flex h-10 ml-auto items-center bg-gray-400 text-dark p-2 m-4 rounded-sm hover:bg-gray-100"
                  onClick={submitData}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
