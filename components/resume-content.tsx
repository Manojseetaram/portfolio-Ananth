export function ResumeContent() {
  return (
    <div className="p-8 bg-white text-black max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Ananth R. Kulkarni</h1>
        <p className="mt-2">Kaiga Township, Karwar, Karnataka, India</p>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>+917899033043</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>ananthrkulks@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <span>Ananth.R.Kulkarni</span>
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Education</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Alvas Institute of Engineering and Technology</h3>
            <p>Computer Science and Design</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">2022 Batch</p>
            <p>Manglore, Karnataka</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Experience</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">Freelance 3D Artist — Self-employed</h3>
          </div>

          <div className="mt-2">
            <h4 className="font-medium">Client-1 (Large-Scale Realistic Environment Project)</h4>
            <p className="text-sm text-gray-600 mb-1">Manglore, Karnataka</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Modeled low-poly trees and realistic water texture using Substance Painter.</li>
              <li>Utilized volumetric cubes for atmospheric fog effects.</li>
              <li>Created mountain terrain with Blender's landscape feature and cave.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-medium">Client-2 (CGI-VFX Dynamic Poster Animation)</h4>
            <p className="text-sm text-gray-600 mb-1">Mumbai, Maharashtra</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Created dynamic poster animation using Blender and After Effects.</li>
              <li>Modeled and textured the helicopter and fan using Geometry Nodes.</li>
              <li>Applied dynamic cloth simulation for realistic fabric movement.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>
        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">3D Product Animation</h3>
            <p>May 2024</p>
          </div>
          <p className="font-medium mt-1">Tools: Blender, 3D Substance Painter, Adobe After Effects</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <span className="font-medium">Nike Shoe Ad:</span> Modeled and animated a realistic shoe ad using Geometry
              Nodes.
            </li>
            <li>
              <span className="font-medium">Water Bottle Ad:</span> Modeled and textured a water bottle with realistic
              droplets.
            </li>
            <li>
              <span className="font-medium">Ice-Cream Ad:</span> Animated chocolate fluid simulation with After Effects
              compositing.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-medium">Languages:</span> Python
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Tools:</span> Blender, Adobe Substance 3D, After Effects, Marvelous
              Designer, VS Code
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Soft Skills</h2>
        <p>
          Creativity, Communication, Teamwork, Resilience, Problem-solving, Organizational, Adaptability, Persuasion
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Leadership / Extracurricular</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">National Cadet Corps (NCC) - Navy Wing A Certificate</h3>
            <p>2019</p>
          </div>
          <p className="italic">Atomic Energy Central School, Kaiga</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Successfully completed Navy Wing A Certificate, gaining leadership and naval skills.</li>
            <li>Participated in various camps, demonstrating teamwork and discipline.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">State-Level Basketball Player</h3>
            <p>2019</p>
          </div>
          <p className="italic">Atomic Energy Central School, Kaiga</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Represented school in state-level basketball championships.</li>
            <li>Demonstrated leadership and perseverance.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
