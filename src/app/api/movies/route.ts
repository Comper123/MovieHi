import { db } from "@/db/db"
import { movie } from "@/db/schema/schema"
import { NextResponse } from "next/server";

export const GET = async () => {
  const movies = await db.select().from(movie);
  return NextResponse.json(movies, { status: 200 })
}