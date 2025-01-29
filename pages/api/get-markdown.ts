import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs/promises"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { locale } = req.query
    const filePath = path.join(process.cwd(), "public", `tasks-${locale}.md`)

    const content = await fs.readFile(filePath, "utf-8")

    res.status(200).send(content)
  } catch (error) {
    console.error("Error reading file:", error)
    res.status(500).json({ message: "Error reading file" })
  }
}

