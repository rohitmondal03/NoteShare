import { NextResponse } from "next/server";
import { Session } from "next-auth";

import { getAuthSession } from "@/lib/nextauth";


export async function GET() {
  const session: Session | null = await getAuthSession();

  return NextResponse.json(session?.user);
}