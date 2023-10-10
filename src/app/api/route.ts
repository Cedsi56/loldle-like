import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search:string|null = searchParams.get('search');
  const all = await fs.readFile(process.cwd() + '/src/app/data/videos.json', 'utf8');
  const data = JSON.parse(all);
  let res;
  if (search != null){
    res = data.filter((e: { name: string}) => e.name.toLowerCase().includes(search.toLowerCase()));
  } else {
    res = data;
  }

  const limit = 5;

  let ret = res.slice(0, limit)

  console.log(all)
  return NextResponse.json({ results: ret });
}