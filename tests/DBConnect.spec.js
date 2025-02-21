import mysql from 'mysql2/promise';
import {test} from '@playwright/test'
test("db connection", async ({})=>{
    async function connectToDatabase() {
        const connection = await mysql.createConnection({
            host: 'localhost', // Replace with your MySQL host
            user: 'root',      // Replace with your MySQL username
            password: 'Aug*2024', // Replace with your MySQL password
            database: 'stocks' // Replace with your database name
        });
    
        return connection;
    }
    
    // Function to fetch data from the database
    async function fetchData(query, params = []) {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute(query, params);
        await connection.end();
        return rows;
    }

    const data = await fetchData("SELECT * FROM stocks where price>'140';", ['admin']);
    console.log('Database Data:', data);
})