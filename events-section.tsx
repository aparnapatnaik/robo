import { Button } from "@/component/ui/button"

const events = [
  { title: "ROBOTICS WORKSHOP", date: "2024-03-15" },
  { title: "IOT HACKATHON", date: "2024-04-02" },
  { title: "AI IN ROBOTICS SEMINAR", date: "2024-04-20" },
]

export function EventsSection() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white uppercase glow-effect mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-[#3B1C32] p-6 rounded-lg">
            <h3 className="text-[#A64D79] font-bold uppercase glow-effect mb-2">{event.title}</h3>
            <p className="text-white text-sm">{event.date}</p>
            <Button className="mt-4 bg-[#6A1E55] hover:bg-[#A64D79] text-white">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

