import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
      const banners = await db.banners.findFirst({
        orderBy: {
          createdAt: "desc",
      },
      where: {
        isActive: true,
      }
      })
  
      return NextResponse.json(banners)
    } catch (error) {
      
      return NextResponse.json({
        message: "Failed to fetch current banner",
        error: error.message,
      }, { status: 500 })
    }
  }