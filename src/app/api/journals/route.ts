import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET(res: NextResponse,req: NextRequest) {
    try {
        const [rows] = await pool.query('SELECT * FROM journals');
        return NextResponse.json({ message: "OK", posts: rows }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error: (error as Error).message }, { status: 500 });
    }
}
