"use client";

import Image from "next/image";
import calculater from "./../assets/images/calculater.png";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const [passCode, setPassCode] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (passCode === "1234") {
      setError(false);
      router.push("/menu");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-20 p-6 flex flex-col items-center border rounded-lg shadow-lg">
        <Image src={calculater} alt="calculator" width={180} />

        <h1 className="text-xl font-bold mt-4">Varity APP V1</h1>
        <h2 className="text-lg mt-2">โปรแกรมคำนวณ</h2>

        <p className="mt-4 text-gray-600">ป้อนรหัสเข้าใช้งาน</p>

        <div className="w-full mt-2">
          <input
            className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="รหัส 1234"
            type="password"
            value={passCode}
            onChange={(e) => setPassCode(e.target.value)} // อัปเดตค่า passCode
          />
        </div>

        {/* แสดงข้อความผิดพลาด */}
        {error && (
          <p className="mt-2 text-red-500">
            รหัสไม่ถูกต้อง โปรดลองใหม่อีกครั้ง
          </p>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded-lg focus:outline-none"
          >
            LOGIN
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
