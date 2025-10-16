import { useEffect, useState } from "react";

import { type User } from "./types";
import UserCard from "./Components/UserCard";
import NavBar from "./Components/NavBar";

const API = "https://jsonplaceholder.typicode.com/users";
const DELAY = 1;

export default function App() {

  const [data, setData] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [filterText, setFilterText] = useState("");

  function fetchData2() {
    setIsLoading(true);

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        return new Promise<User[]>((resolve) => {
          setTimeout(() => resolve(data), DELAY * 1000);
        })
      })
      .then((data) => setData(data))
      .catch((err) => {
        setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => { fetchData2() }, []);

  function handleFilter(searchText: string) {
    if (!searchText) {
      setFilterText("");
    } else {
      setFilterText(searchText);
    }
  }

  return (
    <div className="h-full bg-[#D9C5B2]">

      <NavBar onClick={handleFilter} />

      {isLoading && <div className="text-black">Loading....</div>}
      {error && <div className="text-black">Error.....</div>}

      <div className="flex gap-5 flex-col justify-center items-center p-4 ">

        {
          !error && !isLoading && !filterText && data?.map((user) => {
            return <UserCard user={user} />
          })
        }

        {
          filterText
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
