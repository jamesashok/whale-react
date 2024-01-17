import Link from "next/link";
import React, { Suspense } from "react";

interface User {
  id: number;
  name: string;
}

async function UserList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

const UsersPage = async () => {
  return (
    <main>
      <Link href="/">Home Page</Link> |{" "}
      <Link href="/users/new">New Users Page</Link>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserList />
      </Suspense>
    </main>
  );
};

export default UsersPage;
