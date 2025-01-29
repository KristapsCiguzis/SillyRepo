"use server"

import fs from "fs/promises"
import path from "path"

export async function saveMarkdown(content: string, locale: string) {
  try {
    const filePath = path.join(process.cwd(), "public", `tasks-${locale}.md`)
    await fs.writeFile(filePath, content, "utf-8")
    return { success: true, message: "File saved successfully" }
  } catch (error) {
    console.error("Error saving file:", error)
    return { success: false, message: "Error saving file" }
  }
}

export async function getMarkdown(locale: string) {
  try {
    const filePath = path.join(process.cwd(), "public", `tasks-${locale}.md`)
    const content = await fs.readFile(filePath, "utf-8")
    return { success: true, content }
  } catch (error) {
    console.error("Error reading file:", error)
    return { success: false, message: "Error reading file" }
  }
}

