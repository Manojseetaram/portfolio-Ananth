"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function MediaTestPage() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")

  const images = ["/images.png", "/images.png"]

  const videos = ["/videos.mp4", "/videos.mp4"]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Media Files Test Page</h1>

        <div className="flex gap-4 mb-6">
          <Button variant={activeTab === "images" ? "default" : "outline"} onClick={() => setActiveTab("images")}>
            Images
          </Button>
          <Button variant={activeTab === "videos" ? "default" : "outline"} onClick={() => setActiveTab("videos")}>
            Videos
          </Button>
        </div>

        {activeTab === "images" && (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Images</h2>
            <p className="text-sm text-gray-500 mb-4">
              These images should be located in the <code>/public/images/</code> directory.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {images.map((path) => (
                <div key={path} className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{path}</h3>
                  <div className="bg-gray-100 p-2 rounded">
                    <img
                      src={path || "/placeholder.svg"}
                      alt={path}
                      className="max-h-[400px] mx-auto"
                      onError={(e) => {
                        console.error(`Failed to load image: ${path}`)
                        e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Image+Not+Found"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Videos</h2>
            <p className="text-sm text-gray-500 mb-4">
              These videos should be located in the <code>/public/videos/</code> directory.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {videos.map((path) => (
                <div key={path} className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{path}</h3>
                  <div className="bg-gray-100 p-2 rounded">
                    <video
                      src={path}
                      controls
                      className="max-h-[400px] mx-auto"
                      onError={() => console.error(`Failed to load video: ${path}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Troubleshooting</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-yellow-700 space-y-1">
            <li>If media files don't appear, check that they exist in the correct locations with the exact names.</li>
            <li>For videos, some browsers have autoplay restrictions. Try clicking the play button manually.</li>
            <li>Check the browser console for any error messages.</li>
            <li>Make sure the file formats are supported by your browser.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
