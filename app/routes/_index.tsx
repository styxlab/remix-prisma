import { UserStatus } from "@prisma/client";

export const config = { runtime: 'edge' };

export default function Index() {
   const status = UserStatus.ACTIVE;
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Prisma Test {status}</h1>
      </div>
    );
  }
  