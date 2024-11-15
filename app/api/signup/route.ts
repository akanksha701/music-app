import { NextResponse } from "next/server";
import User from "@/models/User";
import { NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnection";

export async function POST(req: any, res: NextApiResponse) {
  try {
    //  await  connectToDatabase();
    await dbConnect();
    const body = await req.json();

    const { id, emailAddresses, firstName, lastName } = body.user;
    const userExisted: any = await User.findOne({ clerkUserId: id });
    if (userExisted) {
      return NextResponse.json({
        status: 409,
        message: "The user already exists",
      });
    }
    await User.create({
      clerkUserId: id,
      firstName: firstName,
      lastName: lastName,
      email: emailAddresses[0]?.emailAddress,
      mobileNumber: parseInt(
        body.user.primaryPhoneNumber.phoneNumber.substring(3)
      ),
      isActive: true,
      isDeleted: false,
    }).then((newUser)=>
    {
      return NextResponse.json(
        { status: 200 ,user: newUser}
      );
    }).catch((error)=>
    {
      return NextResponse.json(
        { error: "some error occured error" },
        { status: 400 }
      );
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Signup error:", error);
    // Always return a response
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
