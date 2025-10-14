
interface ButtonProps {
  onClick: () => void;
  value: string;
}

export default function Button({ value, onClick }: ButtonProps) {
  return (
    <button
      className="bg-purple-600 rounded-lg py-2 px-4 text-white border-2 border-purple-950 hover:bg-purple-500 active:bg-purple-700 transition-all"
      onClick={() => onClick()}
    >
      {value}
    </button>
  )
}
