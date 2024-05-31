import { Link } from "@remix-run/react";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const loader = async () => {
    const users = await prisma.user.findFirst()
    console.log(users)
    return null
}

export default function Prisma() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Prisma Test</h1>
        <ul>
        <li>
          <Link to="/">Back</Link>
        </li>
      </ul>
      </div>
    );
  }
  