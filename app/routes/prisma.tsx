import { type User, UserStatus } from "@prisma/client";
import { Await, Link, defer, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { fetcher } from "~/utils/fetcher";

export const config = { runtime: 'edge' };

export const loader = async () => {
    const user = fetcher<{ user: User}>(`/db/user`)
    return defer({ user } )
}

export default function Prisma() {
   const status = UserStatus.ACTIVE;
   const { user } = useLoaderData<typeof loader>();
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Prisma Test {status}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={user} >
            {({ user }) => <h1>User FirstName: {user.firstname}</h1>}
          </Await>    
          </Suspense>
        <ul>
        <li>
          <Link to="/">Back</Link>
        </li>
      </ul>
      </div>
    );
  }
  