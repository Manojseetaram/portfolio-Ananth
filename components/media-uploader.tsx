"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

/**
 * This is a demo component to show how a media uploader might work.
 * In a real application, you would need to implement server-side handling
 * for file uploads.
 */
export function MediaUploader() {
  const [activeTab, setActiveTab] = useState("images")
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files))
      setError(null)
      setUploadComplete(false)
    }
  }

  const handleUpload = () => {
    if (files.length === 0) {
      setError("Please select files to upload")
      return
    }

    setUploading(true)
    setError(null)

    // Simulate upload process
    setTimeout(() => {
      setUploading(false)
      setUploadComplete(true)

      // In a real application, you would send the files to your server here
      console.log("Files to upload:", files)

      // Reset after 3 seconds
      setTimeout(() => {
        setFiles([])
        setUploadComplete(false)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }, 3000)
    }, 2000)
  }

  const clearFiles = () => {
    setFiles([])
    setError(null)
    setUploadComplete(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const getAcceptedFileTypes = () => {
    switch (activeTab) {
      case "images":
        return "image/*"
      case "videos":
        return "video/*"
      case "documents":
        return ".pdf,.doc,.docx"
      default:
        return "*/*"
    }
  }

  const getUploadPath = () => {
    switch (activeTab) {
      case "images":
        return "/images/portfolio/"
      case "videos":
        return "/videos/"
      case "documents":
        return "/documents/"
      default:
        return "/"
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Media Uploader</CardTitle>
        <CardDescription>
          Upload media files to your portfolio. Files will be stored in {getUploadPath()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="images" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-upload">Upload Images</Label>
                <p className="text-sm text-muted-foreground mb-2">Supported formats: PNG, JPG, JPEG, GIF, SVG</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="space-y-4">
              <div>
                <Label htmlFor="video-upload">Upload Videos</Label>
                <p className="text-sm text-muted-foreground mb-2">Supported formats: MP4, MOV, WEBM</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="space-y-4">
              <div>
                <Label htmlFor="document-upload">Upload Documents</Label>
                <p className="text-sm text-muted-foreground mb-2">Supported formats: PDF, DOC, DOCX</p>
              </div>
            </div>
          </TabsContent>

          <div className="mt-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activeTab === "images" && "PNG, JPG, JPEG, GIF, SVG"}
                    {activeTab === "videos" && "MP4, MOV, WEBM"}
                    {activeTab === "documents" && "PDF, DOC, DOCX"}
                  </p>
                </div>
                <Input
                  id="file-upload"
                  ref={fileInputRef}
                  type="file"
                  accept={getAcceptedFileTypes()}
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Selected Files ({files.length})</h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="text-sm flex items-center justify-between p-2 bg-muted rounded-md">
                    <span className="truncate max-w-[300px]">{file.name}</span>
                    <span className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {uploadComplete && (
            <Alert className="mt-4 bg-green-500/10 text-green-500 border-green-500/20">
              <Check className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Files uploaded successfully!</AlertDescription>
            </Alert>
          )}
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={clearFiles} disabled={files.length === 0 || uploading}>
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button onClick={handleUpload} disabled={files.length === 0 || uploading || uploadComplete}>
          {uploading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
