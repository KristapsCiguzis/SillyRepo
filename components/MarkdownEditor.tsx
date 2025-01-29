"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { Image, FileText, Save, Eye, Edit2 } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { saveMarkdown, getMarkdown } from "../app/actions/markdownActions"

interface MarkdownEditorProps {
  initialValue: string
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialValue }) => {
  const [markdown, setMarkdown] = useState<string>(initialValue)
  const [isPreview, setIsPreview] = useState<boolean>(false)
  const [currentLocale, setCurrentLocale] = useState<string>("en")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false)

  useEffect(() => {
    const loadMarkdownFile = async () => {
      try {
        const result = await getMarkdown(currentLocale)
        if (result.success && result.content) {
          setMarkdown(result.content)
          setHasUnsavedChanges(false)
        } else {
          console.error("Error loading file:", result.message)
          alert("An error occurred while loading the file.")
        }
      } catch (error) {
        console.error("Error loading file:", error)
        alert("An error occurred while loading the file.")
      }
    }

    loadMarkdownFile()
  }, [currentLocale])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault()
        event.returnValue = ""
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const text = await file.text()
        setMarkdown(text)
        setHasUnsavedChanges(true)
      } catch (error) {
        console.error("Error reading file:", error)
        alert("An error occurred while reading the file.")
      }
    }
  }, [])

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageMarkdown = `\n![${file.name}](/api/placeholder/400/300)\n`
      setMarkdown((prev) => (prev || "") + imageMarkdown)
      setHasUnsavedChanges(true)
    }
  }, [])

  const handleSave = useCallback(async () => {
    try {
      const result = await saveMarkdown(markdown, currentLocale)
      if (result.success) {
        setHasUnsavedChanges(false)
        alert("Content saved successfully!")
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Error saving file:", error)
      alert("An error occurred while saving the file.")
    }
  }, [markdown, currentLocale])

  const handleMarkdownChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
    setHasUnsavedChanges(true)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex gap-2">
            <button
              className="p-2 rounded hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              onClick={() => document.getElementById("file-input")?.click()}
              aria-label="Upload Markdown file"
            >
              <FileText className="h-4 w-4" />
              <input id="file-input" type="file" accept=".md" className="hidden" onChange={handleFileUpload} />
            </button>
            <button
              className="p-2 rounded hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              onClick={() => document.getElementById("image-input")?.click()}
              aria-label="Upload image"
            >
              <Image className="h-4 w-4" />
              <input id="image-input" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </button>
            <button
              className={`p-2 rounded hover:bg-white/5 transition-colors ${
                isPreview ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setIsPreview(!isPreview)}
              aria-label={isPreview ? "Edit Markdown" : "Preview Markdown"}
            >
              {isPreview ? <Edit2 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <select
            value={currentLocale}
            onChange={(e) => {
              if (hasUnsavedChanges) {
                if (window.confirm("You have unsaved changes. Are you sure you want to switch languages?")) {
                  setCurrentLocale(e.target.value)
                }
              } else {
                setCurrentLocale(e.target.value)
              }
            }}
            className="block text-sm text-white border border-neutral-600 rounded-md 
              py-1.5 pl-3 pr-10 hover:border-neutral-500 focus:border-white focus:ring-1 
              focus:ring-white focus:outline-none transition-colors duration-150"
            style={{ backgroundColor: "#141414" }}
          >
            <option value="en">EN</option>
            <option value="ee">EE</option>
            <option value="lv">LV</option>
          </select>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          aria-label="Save Markdown"
        >
          <Save className="h-4 w-4" />
          Save
        </button>
      </div>

      <div className="w-full h-[400px] overflow-auto">
        {isPreview ? (
          <div className="prose prose-invert max-w-none p-3">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <textarea
            value={markdown}
            onChange={handleMarkdownChange}
            className="w-full h-full p-3 bg-neutral-800 text-white rounded-lg
              font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500
              border border-neutral-700 resize-none"
            placeholder="Enter your Markdown here..."
            aria-label="Markdown input"
          />
        )}
      </div>
    </div>
  )
}

export default MarkdownEditor

