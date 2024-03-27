import connectDB from "@/config/db";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {
    try {
        await connectDB();

        const properties = await Property.find({});

        return new Response(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Something happened...', { status:500 });
    }
};

export const POST = async () => {
    try {
        return new Response(JSON.stringify({ message: 'Success!'}),
        {status: 200});
    } catch (error) {
        return new Response('Failed to add property', { status: 500});
    }
}