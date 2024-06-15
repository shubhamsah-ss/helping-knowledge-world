import db from "@/lib/db"
import { unstable_noStore } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(request) {
  unstable_noStore()
  
    try {
      
      const banners = await db.banners.findFirst({
      where: {
        isActive: true,
      }
      })
      
      const response = NextResponse.json(banners)
      return response
    } catch (error) {
      
      return NextResponse.json({
        message: "Failed to fetch current banner",
        error: error.message,
      }, { status: 500 })
    }
  }