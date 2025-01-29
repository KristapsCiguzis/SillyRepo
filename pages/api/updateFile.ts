import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { content, fileName } = req.body;
    const filePath = path.join(process.cwd(), fileName);
    await fs.writeFile(filePath, content);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving file:', error);
    res.status(500).json({ success: false });
  }
}