"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  const [amount, setAmount] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleCalculate = () => {
    const amt = Number(amount);
    const ppl = Number(people);
    if (isNaN(amt) || isNaN(ppl) || amt <= 0 || ppl <= 0) {
      alert("กรุณากรอกตัวเลขที่ถูกต้อง");
      return;
    }
    const calculatedResult = (amt / ppl).toFixed(2);
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setAmount("");
    setPeople("");
    setResult(null);
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-10 grid grid-cols-1 gap-6">
        <div className="flex justify-center">
          <Image src="/images/money.png" alt="money" width={120} height={120} />
        </div>

        <div className="text-2xl font-bold text-center">MONEY SHARE</div>

        {result !== null && (
          <div className="text-xl text-red-500 text-center">
            ต้องจ่ายเงินคนละ : {result} บาท
          </div>
        )}

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

          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 mx-1 rounded-lg focus:outline-none"
              onClick={handleCalculate}
            >
              คำนวณ
            </button>

            <button
              type="button"
              className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 mx-1 rounded-lg focus:outline-none"
              onClick={handleReset}
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

      <Footer />
    </>
  );
}
