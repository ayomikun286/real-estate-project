'use client';
import React, { Fragment } from "react";
import Link from "next/link";
import SearchIcon from "@/assets/svgs/SearchIcon";
import UserIcon from "@/assets/svgs/UserIcon";
import Button from "@/components/buttons/Button";
import HouseImg from "@/assets/svgs/HouseImg";
import LocationIcon from "@/assets/svgs/LocationIcon";
import LogoIcon from "@/assets/svgs/LogoIcon";
import HomeIcon from "@/assets/svgs/HomeIcon";
import CashIcon from "@/assets/svgs/CashIcon";
import Img from "@/assets/svgs/Img";
import LocalLanding from "@/assets/svgs/LocalLanding";
import Edituser from "@/assets/svgs/Edituser";
import Noteicon from "@/assets/svgs/Noteicon";
import Handshakeicon from "@/assets/svgs/Handshakeicon";
import Property from "@/assets/svgs/Property";
import Propertytwo from "@/assets/svgs/Propertytwo";
import Propertythree from "@/assets/svgs/Propertythree";
const NavBar = () => {
  const handleClick = () => {
    alert("Login First !");
  };
  return (
    <div className="flex-wrap py-10 bg-white flex ">
      <div className=" flex justify-between items-center bg-white h-10 w-full mx-[10px] mr-[80px]">
        <div className="flex items-center mt-[80px] opacity-100 z-50">
          <LogoIcon />
        </div>
        <div className="tracking-[0.5px] flex space-x-6 text-[#2C1B0F] text-[15px] font-semibold items-center z-50">
          <Link href="/">Home</Link>
          <Link href="/">Service</Link>
          <Link href="/">Agents</Link>
          <Link href="/">Contact</Link>
          <Link href="/" className="flex space-x-4">
            <SearchIcon />
            <UserIcon />
          </Link>
        </div>
        <div className="flex mr-[20px]">
          <Button title="sign up"/>
        </div>
      </div>
      <div className="flex items-center mt-[-70px] justify-between  ">
        <div className=" flex flex-col items-start justify-center space-x-10">
          <div className=" z-50 text-[69px] font-bold text-[#2C1B0F] tracking-[0.5px] ml-[80px] mt-[20px] leading-20">
            <h1>Find Your </h1>
            <h1>Dream Home</h1>
          </div>
          <div className="text-[17px] font-medium text-[#4F3623] tracking-[0.5px] ml-[80px] mt-[10px] leading-[29px]">
            <p>Explore our curated selection of exquisite</p>
            <p>properties meticiously tailored to your </p>
            <p>unique dream home vision</p>
          </div>
          <div className=" flex py-10 ml-[80px] mt-[10px]"onClick={handleClick}>
            <Button title="Read More" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-[100px] Z-50 rounded-none opacity-100">
          <HouseImg />
        </div>
      </div>
      <div className="flex items-center justify-center px-[200px]">
        <div className="flex mt-[-100px] items-center space-x-5 w-[950px] h-[100px] bg-[#E3D1C0] justfy-center rounded-[10px] p-10">
          <div className="flex items-center bg-[#FFFDFC] w-[250px] h-[40px] rounded-[6px] tracking-[0.5px] justify-between p-4 text-[12px] font-semibold">
            <p>Location</p>
            <LocationIcon />
          </div>
          <div className="flex items-center bg-[#FFFDFC] w-[250px] h-[40px] rounded-[6px] tracking-[0.5px] justify-between p-4 text-[12px] font-semibold">
            <p>Type</p>
            <HomeIcon />
          </div>
          <div className="flex items-center bg-[#FFFDFC] w-[250px] h-[40px] rounded-[6px] tracking-[0.5px]  justify-between p-4 text-[12px] font-semibold">
            <p>Price Range</p>
            <CashIcon />
          </div>
          <div className=" flex w-[250px] text-[12px]">
            <Button title="Sign up" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-40 py-10">
        <div className="flex items-center justify-center mt-[100px] Z-50 rounded-none opacity-100%">
          <Img />
        </div>
        <div className=" mt-[100px]">
          <div className=" z-50 text-[40px] font-bold text-[#2C1B0F] tracking-[0.5px] ml-[80px] mt-[-35px] leading-12  text-[#2C1B0F]">
            <h1>We Help To Find</h1>
            <h1> Your Dream Home</h1>
          </div>
          <div className="text-[18px] font-normal text-[#4F3623] tracking-[0.4px] ml-[80px] mt-[20px]  leading-[29px]">
            <p>From cozy cottages to luxurious estates, our</p>
            <p>dedicated team guides you through every step of the</p>
            <p>journey, ensuring your dream home become a reality</p>
          </div>
          <div className="flex ml-[80px] mt-[40px] space-x-15">
            <div>
              <p className="text-[40px] font-bold text-[#4F3623]">8K+</p>
              <p className="text-[12px] mt-[-5px] font-medium tracking-[0.5px]">
                Houses Available
              </p>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#4F3623]">6K+</p>
              <p className="text-[12px] mt-[-5px] font-medium tracking-[0.5px]">
                Houses Sold
              </p>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#4F3623]">2K+</p>
              <p className="text-[12px] mt-[-5px] font-medium tracking-[0.5px]">
                Trusted Agents
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-50">
        <div className="flex flex-col items-center px-60 ">
          <h1 className="font-bold text-[40px] text-[#2C1B0F]">
            {" "}
            why choose us
          </h1>
          <div className=" flex flex-col items-center text-[#4F3623] text-[15px] ">
            <p>
              Elevating Your Home Buying Experience with Expertise, Integrity,
            </p>
            <p>and Unmatched Personalized Service</p>
          </div>
        </div>
        <div className="flex justify-center space-x-10">
          <div className=" flex justify-center flex-col bg-[#E3D1C0] w-[200px] h-[200px] rounded-[18px] mt-[80px]  p-5">
            <div className="bg-[#ffff] w-[50px] flex justify-center mt-[-15px] h-[50px] ">
              <LocalLanding />
            </div>
            <h1 className="font-bold text-[14px] leading-[29px] mt-[12px] tracking-[0.4px]">
              Expert Guidance
            </h1>
            <div className="text-[#4F3623] text-[12px] tracking-[0.4px]">
              <p> Benefit from our team`s </p>
              <p>seasoned expertise for a </p>
              <p>smooth buying experience</p>
            </div>
          </div>

          <div className=" flex justify-center flex-col bg-[#E3D1C0] w-[200px] h-[200px] rounded-[18px] mt-[80px]  p-5">
            <div className="bg-[#ffff] w-[50px] flex justify-center mt-[-15px] h-[50px]">
              <Edituser />
            </div>
            <h1 className="font-bold text-[14px] leading-[29px] mt-[12px] tracking-[0.4px]">
              Personalized Service
            </h1>
            <div className="text-[#4F3623] text-[12px] tracking-[0.4px]]">
              <p>Our service adapt to your </p>
              <p>unique needs, making your</p>
              <p> journey stress-free</p>
            </div>
          </div>
          <div className=" flex justify-center flex-col bg-[#E3D1C0] w-[200px] h-[200px] rounded-[18px] mt-[80px]  p-5">
            <div className="bg-[#ffff] w-[50px] flex justify-center mt-[-15px] h-[50px]">
              <Noteicon />
            </div>
            <h1 className="font-bold text-[14px] leading-[29px] mt-[12px] tracking-[0.4px]">
              {" "}
              Transparent Process
            </h1>
            <div className="text-[#4F3623] text-[12px] tracking-[0.4px]]">
              <p> Stay informed with our </p>
              <p> clear and honest approach </p>
              <p>to buying your home</p>
            </div>
          </div>
          <div className=" flex justify-center flex-col bg-[#E3D1C0] w-[200px] h-[200px] rounded-[18px] mt-[80px]  p-5">
            <div className="bg-[#ffff] w-[50px] flex justify-center mt-[-15px] h-[50px] ">
              <Handshakeicon />
            </div>
            <h1 className="font-bold text-[14px] leading-[29px] mt-[12px] tracking-[0.4px]">
              Exceptional Support
            </h1>
            <div className="text-[#4F3623] text-[12px] tracking-[0.4px]]">
              <p>Providing peace of mind </p>
              <p>with our responsive and </p>
              <p>attentive customer service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-50 py-15">
        <h1 className="mb-7 text-[#2C1B0F] font-bold text-[40px]">
          Our Popular Residences
        </h1>
        <div className="flex justify-center space-x-10">
          <div className="">
            <Property />
          </div>
          <div className="">
            {" "}
            <Propertytwo />{" "}
          </div>
          <div className="">
            <Propertythree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
