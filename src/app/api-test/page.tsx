export default async function Page() {
  // Route handler test.
  // Not necessary as data can be directly fetched from Server components.

  const data = await fetch("http://localhost:3000/api");
  const json = await data.json();
  return <h1>{JSON.stringify(json)}</h1>;
}
