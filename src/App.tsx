import { useState } from "react";

import type { User } from "./types";
import UserCard from "./Components/UserCard";
import NavBar from "./Components/NavBar";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Components/Loading";
import Error from "./Components/Error";

let API = "https://jsonplaceholder.typicode.com/users";
const DELAY = 5;

export default function App() {
  const [filterText, setFilterText] = useState("");

  async function fetchData() {
    const res = await fetch(API);
    // to simulate slow internet - feature!
    await new Promise((resolve) => setTimeout(resolve, 1000 * DELAY));
    return res.json();
  }

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchData,
  });

  function handleFilter(searchText: string) {
    if (!searchText) {
      setFilterText("");
    } else {
      setFilterText(searchText);
    }
  }

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="h-full bg-[#D9C5B2]">

      <NavBar onClick={handleFilter} />

      <div className="flex gap-5 flex-col justify-center items-center p-4 ">

        {
          !filterText && data?.map((user) => {
            return <UserCard user={user} />
          })
        }

        {
          filterText && !isLoading
          &&
          data?.filter(
            (item) => {
              return (
                item.username.toLowerCase().includes(filterText.toLowerCase()) ||
                item.phone.toLowerCase().includes(filterText.toLowerCase()) ||
                item.email.toLowerCase().includes(filterText.toLowerCase())
              )
            })
            .map((user) => <UserCard key={user.id} user={user} />)
        }
      </div>
    </div>
  )
}
