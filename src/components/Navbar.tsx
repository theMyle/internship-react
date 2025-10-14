

// 3 callback props 

import Button from "./Button";

// onClickBtn1
// onClickBtn2
// onClickBtn3

// // type: () => void

type NavBarProps = {
  onClickBtn1: () => void;
  onClickBtn2: () => void;
  onClickBtn3: () => void;
}

export default function NavBar({ onClickBtn1, onClickBtn2, onClickBtn3 }: NavBarProps) {
  return (
    <div className="flex gap-5 p-4 bg-purple-200 justify-between px-10">
      <Button onClick={onClickBtn1} value="Image 1" />
      <Button onClick={onClickBtn2} value="Image 2" />
      <Button onClick={onClickBtn3} value="Image 3" />
    </div>
  );
}


