"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// รูปภาพ
import circle from "./../../assets/images/circle.png";
import square from "./../../assets/images/square.png";
import triangle from "./../../assets/images/triangle.png";

import Footer from "@/components/Footer";

type Shape = "circle" | "square" | "triangle";

export default function AreaCalculator() {
  const [shape, setShape] = useState<Shape | "">("");
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [area, setArea] = useState<string | null>(null);
  const router = useRouter();

  const getImage = () => {
    switch (shape) {
      case "circle":
        return circle;
      case "square":
        return square;
      case "triangle":
        return triangle;
      default:
        return null;
    }
  };

  const handleCalculate = () => {
    const num1 = Number(input1);
    const num2 = Number(input2);

    if (isNaN(num1) || num1 <= 0 || (shape !== "circle" && (isNaN(num2) || num2 <= 0))) {
      alert("กรุณากรอกตัวเลขที่ถูกต้อง");
      return;
    }

    let result = 0;
    switch (shape) {
      case "circle":
        result = Math.PI * num1 * num1;
        break;
      case "square":
        result = num1 * num2;
        break;
      case "triangle":
        result = 0.5 * num1 * num2;
        break;
    }

    setArea(result.toFixed(2));
  };

  const handleReset = () => {
    setShape("");
    setInput1("");
    setInput2("");
    setArea(null);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="w-10/12 max-w-sm mx-auto mt-10 grid grid-cols-1 gap-6">
        <div className="text-2xl font-bold text-center">คำนวณพื้นที่</div>

        <div className="flex justify-center gap-3">
          <label>
            <input
              type="radio"
              name="shape"
              value="circle"
              onChange={() => {
                setShape("circle");
                setInput1("");
                setInput2("");
                setArea(null);
              }}
              checked={shape === "circle"}
            />{" "}
            วงกลม
          </label>
          <label>
            <input
              type="radio"
              name="shape"
              value="square"
              onChange={() => {
                setShape("square");
                setInput1("");
                setInput2("");
                setArea(null);
              }}
              checked={shape === "square"}
            />{" "}
            สี่เหลี่ยม
          </label>
          <label>
            <input
              type="radio"
              name="shape"
              value="triangle"
              onChange={() => {
                setShape("triangle");
                setInput1("");
                setInput2("");
                setArea(null);
              }}
              checked={shape === "triangle"}
            />{" "}
            สามเหลี่ยม
          </label>
        </div>

        {shape && (
          <>
            <div className="flex justify-center">
              {getImage() && <Image src={getImage()!} alt={shape} width={120} />}
            </div>

            <div className="w-full p-6 border rounded-lg shadow-lg">
              {shape === "circle" && (
                <div className="mb-4">
                  <span className="block mb-1">รัศมี (เซนติเมตร)</span>
                  <input
                    className="w-full p-2 border border-gray-500 rounded-lg"
                    type="number"
                    placeholder="ระบุรัศมี"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                  />
                </div>
              )}

              {(shape === "square" || shape === "triangle") && (
                <>
                  <div className="mb-4">
                    <span className="block mb-1">ความกว้าง (ซม.)</span>
                    <input
                      className="w-full p-2 border border-gray-500 rounded-lg"
                      type="number"
                      placeholder="ระบุความกว้าง"
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <span className="block mb-1">ความยาว / สูง (ซม.)</span>
                    <input
                      className="w-full p-2 border border-gray-500 rounded-lg"
                      type="number"
                      placeholder="ระบุความยาว/สูง"
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                    />
                  </div>
                </>
              )}

              {area !== null && (
                <div className="text-lg text-center text-green-600 font-semibold">
                  พื้นที่: {area} ตารางเซนติเมตร
                </div>
              )}

              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mx-1"
                  onClick={handleCalculate}
                >
                  คำนวณ
                </button>
                <button
                  className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded mx-1"
                  onClick={handleReset}
                >
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
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
