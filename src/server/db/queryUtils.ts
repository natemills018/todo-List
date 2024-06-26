import pool from "./connection";
import type { ResultSetHeader } from "mysql2";


export async function SelectQuery<T>(queryString: string, params?: any): Promise<Partial<T>[]> {
    const [results] = awawi
}