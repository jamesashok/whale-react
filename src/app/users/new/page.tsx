import Link from "next/link";
import React from "react";

const NewUsersPage = () => {
  return (
    <main>
      <Link href="/">Home Page</Link> | <Link href="/users">Users Page</Link>
      <h1>New Users Page</h1>
    </main>
  );
};

export default NewUsersPage;
