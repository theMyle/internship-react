import { useState } from "react";
import NavBar from "./components/Navbar";

export default function App() {
  // showPage1, setShowpage1 - true/false
  // showPage2, setShowpage2
  // showPage3, setShowpage3

  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);

  function togglePage1() {
    setShowPage1((prev) => {
      setShowPage2(false);
      setShowPage3(false);
      return !prev;
    });
  }

  function togglePage2() {
    setShowPage2((prev) => {
      setShowPage1(false);
      setShowPage3(false);
      return !prev;
    });
  }

  function togglePage3() {
    setShowPage3((prev) => {
      setShowPage1(false);
      setShowPage2(false);
      return !prev;
    });
  }

  return (
    <div className="flex flex-col h-screen bg-purple-100">

      <NavBar onClickBtn1={togglePage1} onClickBtn2={togglePage2} onClickBtn3={togglePage3} />

      <div className="w-full flex flex-col gap-5 justify-center items-center pt-20">
        {/* conditional rendering */}

        {showPage1 &&
          <img
            src="https://ichef.bbci.co.uk/images/ic/1920xn/p072ms6r.jpg"
            height={500}
            width={500}
          />
        }

        {showPage2 &&
          <img
            src="
https://www.watchmojo.com/uploads/thumbs720/WM-Pop-Top-10-Most-Disturbing-Tragic-Memes-Because-of-What-We-Know-Now_H2E7M8-AT-2.webp"
            height={500}
            width={500}
          />
        }

        {showPage3 &&
          <img
            src="https://www.azquotes.com/picture-quotes/quote-a-good-tool-improves-the-way-you-work-a-great-tool-improves-the-way-you-think-jeff-duntemann-67-5-0529.jpg"
            height={500}
            width={500}
          />
        }

      </div>

    </div>
  )
}
