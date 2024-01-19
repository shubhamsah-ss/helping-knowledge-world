import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const image = await request.json();

    const newBanner = await db.banners.create({
      data: image
    })

    await db.banners.updateMany({
      where: {
        id: {
          not: newBanner.id,
        },
      },
        data: {
          isActive: false,
        }
    })
    
    return NextResponse.json(newBanner)
  } catch (error) {
    
    return NextResponse.json(
      {
        message: "Failed to create banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const banners = await db.banners.findMany({
      orderBy: {
        createdAt: "desc",
    }
    })

    return NextResponse.json(banners)
  } catch (error) {
    
    return NextResponse.json({
      message: "Failed to fetch banner",
      error: error.message,
    }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const { id, isActive } = await request.json()

    const updatedBanner = await db.banners.update({
      where: {
        id: id,
      },
      data: {
        isActive: !isActive,
      }
    })

    await db.banners.updateMany({
      where: {
        id: {
          not: id,
        },
      },
        data: {
          isActive: false,
        }
    })

    return NextResponse.json(updatedBanner)

  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to update banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json()

    const deletedBanner = await db.banners.delete({
      where: {
        id: id,
      },
    })

    return NextResponse.json(deletedBanner)

  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to delete banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}