"use client";
import { useState } from "react";
import Image from "next/image";
import bmr from "./../../../assets/images/bmr.png";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function BMR() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    let bmr: number;

    if (gender === "male") {
      bmr = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      bmr = 655 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setResult(bmr.toFixed(2));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setResult(null);
  };
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-10 grid grid-cols-1 gap-6">
        <div className="flex justify-center">
          <Image src={bmr} alt="bmr" width={120} />
        </div>
        <div className="text-2xl font-bold text-center">BMR CALCULATOR</div>

        {result && <div className="text-xl text-green-600 text-center">พลังงานที่ใช้ต่อวัน (BMR): {result} kcal</div>}

        <div className="w-full p-6 border rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block mb-1">เพศ</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                <span className="ml-1">ชาย</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                <span className="ml-1">หญิง</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">น้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="ใส่น้ำหนัก"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">ส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="ใส่ส่วนสูง"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">อายุ (ปี)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="ใส่อายุ"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 mx-1 rounded-lg"
              onClick={handleCalculate}
            >
              คำนวณ
            </button>
            <button className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 mx-1 rounded-lg" onClick={handleReset}>
              ยกเลิก
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded mx-1"
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
