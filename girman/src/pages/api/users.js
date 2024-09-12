import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('yourDatabaseName');

  switch (req.method) {
    case 'GET':
      // Fetch users
      const users = await db.collection('users').find({}).toArray();
      res.status(200).json(users);
      break;
    case 'POST':
      // Add a new user
      const { firstname, lastname, location, phone } = req.body;
      const result = await db.collection('users').insertOne({ firstname, lastname, location, phone });
      res.status(201).json(result.ops[0]);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
