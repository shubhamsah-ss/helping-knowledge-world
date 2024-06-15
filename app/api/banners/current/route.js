import db from "@/lib/db"
import { NextResponse } from "next/server"

export const fetchCache = "default-no-store"

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
      
      const response = NextResponse.json(banners)
      response.headers.set("Cache-Control", "no-store")
      // response.headers.set("Surrogate-Control", "no-store")
      return response
    } catch (error) {
      
      return NextResponse.json({
        message: "Failed to fetch current banner",
        error: error.message,
      }, { status: 500 })
    }
  }