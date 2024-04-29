import { Fragment } from "react";
import { SECTIONS } from "./lib/definitions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {SECTIONS.map(({ component, id }) => (
        <Fragment key={id}>{component}</Fragment>
      ))}
    </main>
  );
}
