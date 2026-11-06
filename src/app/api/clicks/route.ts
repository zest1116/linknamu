import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 반환
export async function GET() {
  try {
    const col = await getClicksCollection();
    const docs = await col.find().toArray();
    return NextResponse.json(Object.fromEntries(docs.map((d) => [d._id, d.count])));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
