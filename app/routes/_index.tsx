import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: 'edge' };

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix with Prisma</h1>
      <ul>
        <li>
          <Link to="/prisma">Test page transition</Link>
        </li>
      </ul>
    </div>
  );
}
