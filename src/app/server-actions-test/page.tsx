import send from "../action";

export default async function Page() {
  return (
    <form action={send}>
      <button>Send</button>
    </form>
  );
}
