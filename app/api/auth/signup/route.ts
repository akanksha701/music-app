import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
  try {

    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 123,
      gender: 'male',
      dateOfBirth: new Date('1990-01-01'),
      mobileNumber: '1234567890',
      isActive: true,
      isDeleted: false,
      favoriteSongs: [],
      playlists: []
    });
    console.log(user);
    // Save the user
    await user.save();

    // Convert to plain object and remove password
    const userResponse = JSON.parse(JSON.stringify(user));
    delete userResponse.password;

    return NextResponse.json(
      { success: true, data: userResponse },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 