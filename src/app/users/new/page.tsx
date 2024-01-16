import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  // can get data from apis too.
  return {
    title: "New User",
  };
}

const NewUsersPage = () => {
  return (
    <main>
      <Link href="/">Home Page</Link> | <Link href="/users">Users Page</Link>
      <h1>New Users Page</h1>
    </main>
  );
};

export default NewUsersPage;
