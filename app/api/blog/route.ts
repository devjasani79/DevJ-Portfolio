import { getAllPosts } from "@/app/lib/notion-utils";
import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR: revalidate every hour

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Blog fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
