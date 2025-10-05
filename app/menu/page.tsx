"use client";

import Image from "next/image";
import calculater from "./../../assets/images/calculater.png";
import bmi from "./../../assets/images/bmi.png";
import bmr from "./../../assets/images/bmr.png";
import money from "./../../assets/images/money.png";
import shape from "./../../assets/images/shape.png";
// import circle from "./../../assets/images/circle.png";
// import square from "./../../assets/images/square.png";
// import triangle from "./../../assets/images/triangle.png";

import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  // ฟังก์ชันที่ใช้ในการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (pathname) => {
    router.push(pathname); // นำทางไปยัง path ที่ระบุ
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-20 p-6 grid grid-cols-2 gap-4">
        {/* รูป Calculator */}
        <div className="col-span-2 flex justify-center">
          <Image src={calculater} alt="calculator" width={180} />
        </div>

        {/* คำว่า Menu */}
        <div className="col-span-2 text-2xl font-bold text-center mb-4">
          Menu
        </div>

        {/* ปุ่ม BMI */}
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg focus:outline-none flex items-center justify-start"
          onClick={() => handleNavigation("/body/bmi")}
        >
          <Image src={bmi} alt="BMI" width={30} height={30} className="mr-2" />
          BMI
        </button>

        {/* ปุ่ม BMR */}
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg focus:outline-none flex items-center justify-start"
          onClick={() => handleNavigation("/body/bmr")}
        >
          <Image src={bmr} alt="BMR" width={30} height={30} className="mr-2" />
          BMR
        </button>

        {/* ปุ่ม MoneyShare */}
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg focus:outline-none flex items-center justify-start"
          onClick={() => handleNavigation("/moneyshare")}
        >
          <Image
            src={money}
            alt="MoneyShare"
            width={30}
            height={30}
            className="mr-2"
          />
          MoneyShare
        </button>

        {/* ปุ่ม SHAPE */}
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg focus:outline-none flex items-center justify-start"
          onClick={() => handleNavigation("/shape")}
        >
          <Image
            src={shape}
            alt="Shape"
            width={30}
            height={30}
            className="mr-2"
          />
          SHAPE
        </button>
      </div>

      <Footer />
    </>
  );
}
