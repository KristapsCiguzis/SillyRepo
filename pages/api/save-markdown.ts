import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs/promises"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { content, locale } = req.body
    const filePath = path.join(process.cwd(), "public", `tasks-${locale}.md`)

    await fs.writeFile(filePath, content, "utf-8")

    res.status(200).json({ message: "File saved successfully" })
  } catch (error) {
    console.error("Error saving file:", error)
    res.status(500).json({ message: "Error saving file" })
  }
}

