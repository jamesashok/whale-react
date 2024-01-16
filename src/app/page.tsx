import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="p-24">
      <Link href="/users">Users Page</Link> |{" "}
      <Link href="/users/new">New Users Page</Link>
      <h1>Home Page</h1>
      <ProductCard></ProductCard>
    </main>
  );
}
