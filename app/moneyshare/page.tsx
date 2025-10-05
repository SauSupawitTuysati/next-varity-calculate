"use client";

import Image from "next/image";
import money from "./../../assets/images/money.png";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  const [amount, setAmount] = useState(""); 
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null); // State สำหรับเก็บผลลัพธ์

  // ฟังก์ชันที่ใช้ในการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (pathname: string) => {
    router.push(pathname); // นำทางไปยัง path ที่ระบุ
  };

  // ฟังก์ชันตรวจสอบการคำนวณ
  const handleCalculate = () => {
    if (isNaN(amount) || isNaN(people) || amount <= 0 || people <= 0) {
      alert("กรุณากรอกตัวเลขที่ถูกต้อง");
      return;
    }
    const calculatedResult = (parseFloat(amount) / parseInt(people)).toFixed(2); // ใช้ .toFixed(2) เพื่อให้แสดงทศนิยม 2 ตำแหน่ง
    setResult(calculatedResult); // ตั้งค่าผลลัพธ์
  };

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setAmount("");   // รีเซ็ต amount
    setPeople("");   // รีเซ็ต people
    setResult(null); // รีเซ็ต result
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-10 grid grid-cols-1 gap-6">
        {/* รูปภาพ Money */}
        <div className="flex justify-center">
          <Image src={money} alt="money" width={120} />
        </div>

        {/* ข้อความ TITLE */}
        <div className="text-2xl font-bold text-center">MONEY SHARE</div>

        {/* แสดงผลลัพธ์ */}
        {result !== null && (
          <div className="text-xl text-red-500 text-center">
            ต้องจ่ายเงินคนละ : {result} บาท
          </div>
        )}

        {/* กล่องกรอกข้อมูล (input box) */}
        <div className="w-full p-6 border rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="block mb-1">ป้อนเงิน (บาท)</span>
            <input
              className="w-full p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="กรุณาระบุจำนวนเงิน"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <span className="block mb-1">ป้อนจำนวนคน</span>
            <input
              className="w-full p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="กรุณาระบุจำนวนคน"
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>

          {/* ปุ่ม คำนวณ และ BACK */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 mx-1 rounded-lg focus:outline-none"
              onClick={handleCalculate} // เรียกใช้ฟังก์ชันคำนวณ
            >
              คำนวณ
            </button>
        
            {/* ปุ่มยกเลิก (reset) */}
            <button
              type="button"
              className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 mx-1 rounded-lg focus:outline-none"
              onClick={handleReset} // เรียกใช้ฟังก์ชันรีเซ็ต
            >
              ยกเลิก
            </button>

                <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 mx-1 rounded-lg focus:outline-none"
              onClick={() => handleNavigation("/menu")}
            >
              BACK
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
