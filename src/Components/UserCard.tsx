
import type { User } from "../types";

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-4 flex-col bg-[#F3F3F4] rounded-2xl w-full">
      <h1 className="font-bold text-xl">{user.username}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
}
