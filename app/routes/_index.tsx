import { UserStatus } from "@prisma/client/edge";
import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link prefetch='intent' to={href}>
      {children}
    </Link>
  );
}

export const config = { runtime: "edge" };

export default function Index() {
  const status = UserStatus.ACTIVE;
  return (
    <>
      <h1>Prisma Test {status}</h1>
      <div>
        <NavLink href='/contact'>Contact</NavLink>
      </div>
    </>
  );
}
