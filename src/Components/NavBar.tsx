import { useState } from "react";

interface NavbarProps {
  onClick(searchText: string): void;
}

export default function NavBar({ onClick }: NavbarProps) {

  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-[#14110F] flex justify-between py-6 px-6 text-white">
      <div className="flex items-center gap-5">

        <input
          type="text"
          className="w-100 bg-white p-1 rounded-2xl text-black px-2 outline-none"
          value={searchText}
          onChange={(e) => {
            if (e.target.value === "") {
              setSearchText(e.target.value)
              onClick("");
            } else {
              setSearchText(e.target.value)
            }
          }}
        />

        <button
          className="bg-[#34312D] px-4 py-2 rounded-4xl"
          onClick={() => onClick(searchText)}
        >
          Search
        </button>

      </div>
    </div>
  )
}
