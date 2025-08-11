require('dotenv').config();
const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Use environment variable for database URI instead of hardcoded credentials
const uri = process.env.MONGODB_URI;

// Create a MongoClient with better configuration options
const client = new MongoClient(uri, {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
});

async function connectToDatabase() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        return client;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

async function queryPersonalProjects() {
    let connection;

    try {
        connection = await connectToDatabase();

        // Get the database and collection
        const database = connection.db("personal-website");
        const collection = database.collection("personal-project");

        // Execute query and convert cursor to array
        // if (projects.length === 0) {
        //     console.log("No projects found");
        // } else {
        //     console.log(`Found ${projects.length} project(s):`);
        //     projects.forEach((project, index) => {
        //         console.log(JSON.stringify(project, null, 2));
        //     });
        // }

        return await collection.find().toArray();
    } catch (error) {
        console.error("Error querying database:", error);
        throw error;
    } finally {
        // Always close the connection
        if (connection) {
            await connection.close();
            console.log("\nDatabase connection closed");
        }
    }
}

// API endpoint to fetch personal projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await queryPersonalProjects();
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});