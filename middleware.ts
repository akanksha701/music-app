import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import connectToDatabase from "./lib/dbConnection";

export default async function middleware(req: NextRequest) {
    try {
    // await connectToDatabase();

        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}

