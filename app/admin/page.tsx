import { MediaUploader } from "@/components/media-uploader"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Portfolio Admin</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Media Management</h2>
          <p className="text-muted-foreground mb-6">
            Upload and manage media files for your portfolio. Files will be stored in the appropriate directories based
            on their type.
          </p>

          <MediaUploader />
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How to Update Your Portfolio</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Upload Media Files</h3>
              <p className="text-muted-foreground">
                Use the uploader above to add images, videos, and documents to your portfolio.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. Update Component References</h3>
              <p className="text-muted-foreground">After uploading, update the file references in your components:</p>
              <pre className="p-4 bg-muted rounded-md mt-2 overflow-x-auto">
                <code>{`// In components/hero.tsx
const portfolioWorks = [
  {
    title: "New Work",
    image: "/images/portfolio/your-new-image.png", // or
    video: "/video.mp4",
    type: "image" // or "video"
  },
  // ...
]`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">3. Folder Structure</h3>
              <p className="text-muted-foreground">Your media files are organized in the following structure:</p>
              <pre className="p-4 bg-muted rounded-md mt-2 overflow-x-auto">
                <code>{`public/
├── images/
│   ├── portfolio/  # Hero and portfolio images
│   ├── about/      # About section images
│   └── clients/    # Client logos
├── videos/         # All video files
└── documents/      # Documents like resume`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
