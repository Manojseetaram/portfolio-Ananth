"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MediaDebug() {
  const [mediaFiles, setMediaFiles] = useState<{ images: string[]; videos: string[] }>({
    images: [],
    videos: [],
  })

  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [fileType, setFileType] = useState<"image" | "video" | null>(null)

  // This is just for demonstration - in a real app, you'd need server-side code to list files
  useEffect(() => {
    // Hardcoded list of files we expect to exist
    setMediaFiles({
      images: ["/images/0.png", "/images/2.png"],
      videos: ["/videos/8.mp4", "/videos/9.mp4"],
    })
  }, [])

  const testFile = (path: string) => {
    const isVideo = path.endsWith(".mp4") || path.endsWith(".mov") || path.endsWith(".webm")
    setSelectedFile(path)
    setFileType(isVideo ? "video" : "image")
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => document.getElementById("media-debug-modal")?.classList.toggle("hidden")}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Debug Media
      </button>

      <div id="media-debug-modal" className="hidden fixed inset-0 bg-black/80 z-50 overflow-auto p-4">
        <Card className="max-w-2xl mx-auto mt-20">
          <CardHeader>
            <CardTitle className="flex justify-between">
              Media Files Debug
              <button
                onClick={() => document.getElementById("media-debug-modal")?.classList.add("hidden")}
                className="text-sm bg-gray-200 px-2 rounded"
              >
                Close
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-bold mb-2">Images</h3>
                <ul className="space-y-1">
                  {mediaFiles.images.map((path) => (
                    <li key={path} className="text-sm">
                      <button onClick={() => testFile(path)} className="text-blue-500 hover:underline">
                        {path}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Videos</h3>
                <ul className="space-y-1">
                  {mediaFiles.videos.map((path) => (
                    <li key={path} className="text-sm">
                      <button onClick={() => testFile(path)} className="text-blue-500 hover:underline">
                        {path}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedFile && (
              <div className="border p-4 rounded-md">
                <h3 className="font-bold mb-2">Testing: {selectedFile}</h3>
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  {fileType === "image" ? (
                    <img
                      src={selectedFile || "/placeholder.svg"}
                      alt="Test image"
                      className="max-h-full max-w-full object-contain"
                      onError={() => alert(`Failed to load image: ${selectedFile}`)}
                    />
                  ) : (
                    <video
                      src={selectedFile}
                      controls
                      autoPlay
                      className="max-h-full max-w-full"
                      onError={() => alert(`Failed to load video: ${selectedFile}`)}
                    />
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 text-sm">
              <p className="font-bold">File locations:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Images are stored in <code>/public/images/</code>
                </li>
                <li>
                  Videos are stored in <code>/public/videos/</code>
                </li>
              </ul>
              <p className="mt-4 text-red-500">
                If files don't load, check that they exist in these locations with exactly these names.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
