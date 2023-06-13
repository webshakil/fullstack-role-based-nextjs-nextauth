import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/user";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
       await dbConnect();
       const body = await req.json();
      const user= await User.create(body);


        return NextResponse.json({
            message:"User Created successfully!",
            user
        }, {
            status: 200
        })
        

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}