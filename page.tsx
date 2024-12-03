import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EventsSection } from "@/components/events-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1D]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link href="/" className="text-white text-2xl font-bold">
          robogeniX
        </Link>
        <div className="flex gap-8">
          {["EVENTS", "OUR TEAM", "SPONSORSHIP", "CONTACT US"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-white hover:text-[#A64D79] transition-colors uppercase glow-effect"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase glow-effect">
                ROBOTICS AND IOT CLUB OF XIM UNIVERSITY
              </h2>
              <div className="space-y-4">
                <h1 className="text-7xl font-bold">
                  <span className="text-[#3B1C32] glow-effect">XIM</span>
                  <br />
                  <span className="text-white glow-effect">UNIVERS</span>
                  <span className="text-[#6A1E55] glow-effect">ITY</span>
                </h1>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to RobogeniX, the robotics club of XIM University, founded by Prof.
              Arif Ahmed and mentored by Prof. Devendra Kumar Yadav. At RobogeniX, we
              are dedicated to fostering a hardware culture where robotics is not just a
              subject but a hobby and passion for our members
            </p>
            <Button 
              className="bg-[#6A1E55] hover:bg-[#A64D79] text-white px-8 py-6 text-lg"
            >
              JOIN CLUB
            </Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Robotics Club Activity"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Events Section */}
        <EventsSection />
      </main>

      {/* Logo Section */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <h1 className="text-[20rem] font-bold text-[#A64D79] glow-effect">
          robogeniX
        </h1>
      </div>
      <style jsx global>{`
        .glow-effect {
          text-shadow: 0 0 10px rgba(166, 77, 121, 0.5), 0 0 20px rgba(166, 77, 121, 0.3);
        }
      `}</style>
    </div>
  )
}

