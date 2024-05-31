import { User } from "@prisma/client";
import { Link, json, useLoaderData } from "@remix-run/react";
import { fetcher } from "~/utils/fetcher";

export const config = { runtime: 'edge' };

export const loader = async () => {
    const user = await fetcher<{ user: User}>(`/db/user`)
    return json(user)
}

export default function Prisma() {
   const { user } = useLoaderData<typeof loader>();
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Prisma Test</h1>
        <h1>User FirstName: {user.firstname}</h1>
        <ul>
        <li>
          <Link to="/">Back</Link>
        </li>
      </ul>
      </div>
    );
  }
  