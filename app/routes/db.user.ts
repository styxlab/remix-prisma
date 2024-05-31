import type { LoaderFunctionArgs } from '@vercel/remix'
import { json } from '@vercel/remix'
import { getRequestAuth, getRequestOrigin } from '~/utils/origin.server'
import { db } from '~/utils/db.server'
import { geoAccessCheck } from '~/utils/geo.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
    geoAccessCheck({ request })
    if (getRequestOrigin(request.headers) !== process.env.SITE_URL) throw new Response('Unauthorized.', { status: 401 })
    if (getRequestAuth(request.headers) !== process.env.PROTECTED_ROUTE_SECRET) throw new Response('Unauthorized.', { status: 401 })

    const user = await db.user.findFirst({ select: { firstname: true } })

    return json({ user }, 200)
}
