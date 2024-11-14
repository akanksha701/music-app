import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/dbConnection";
import User from "@/models/User";
import { z } from "zod";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export async function GET(req: any) {
  try {
    // const body = await req?.json();
    
    try {
      // Hash password before creating user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req?.body?.password || "password", salt);

      const user = new User({
        firstName: req?.body?.firstName || "Akanksha",
        lastName: req?.body?.lastName || "Patel",
        mobileNumber: req?.body?.mobileNumber || "9876543210",
        gender: req?.body?.gender || "female",
        dateOfBirth: req?.body?.dateOfBirth || new Date("1990-01-01"),
        isActive: req?.body?.isActive || true,
        isDeleted: req?.body?.isDeleted || false,
        email: req?.body?.email || "akanksha31@gmail.com",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      await user.save();

      // Return success response (excluding password)
      const userObject = user.toObject();
      const { password, ...userWithoutPassword } = userObject;
      
      return NextResponse.json(
        { message: "User created successfully", user: userWithoutPassword },
        { status: 201 }
      );
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return NextResponse.json(
          { error: "Validation error", details: error.errors },
          { status: 400 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error("Signup error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
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
