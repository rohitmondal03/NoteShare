import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


export async function POST(request: NextRequest) {
  const body = await request.json();

  const { id } = body;

  await prisma.note.delete({
    where: {
      id: id
    }
  })
}