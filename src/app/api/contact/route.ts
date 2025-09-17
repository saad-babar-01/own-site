import { NextResponse } from "next/server";
import dbConnection from "@/lib/db";
import Contact from "@/models/contactModel";

// GET all contacts (for admin)
export async function GET() {
  try {
    await dbConnection();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ data: contacts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new contact
export async function POST(req: Request) {
  try {
    await dbConnection();
    const body = await req.json();
    const newContact = new Contact(body);
    await newContact.save();
    return NextResponse.json({ message: "Contact saved" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
