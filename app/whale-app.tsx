import { WhaleButton } from "./whale-button";

export default function WhaleApp() {
  const testFlag = false;

  return (
    <div>
      <h1>Whale React Next</h1>
      <WhaleButton />
      <WhaleButton />

      {testFlag ? <p>Condition true</p> : <p>Condition false</p>}
    </div>
  );
}
