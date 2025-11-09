import '../App.css'


export function Home() {
  return (
    <div className="min-h-screen py-2">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Toronto Events
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Discover the best events happening in Toronto. Find concerts, festivals, meetups, and more.
        </p>
      </section>

      {/* Events Grid */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Cards */}
          <div className="border rounded-lg p-6 bg-blue-200 dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Summer Music Festival</h3>
            <p className="text-sm text-muted-foreground mb-3">August 15, 2024 • Downtown</p>
            <p className="text-sm">Join us for a day of live music and food trucks.</p>
          </div>

          <div className="border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">Art Gallery Opening</h3>
            <p className="text-sm text-muted-foreground mb-3">August 20, 2024 • Queen West</p>
            <p className="text-sm">Featuring local Toronto artists and photographers.</p>
          </div>

          <div className="border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">Tech Meetup</h3>
            <p className="text-sm text-muted-foreground mb-3">August 25, 2024 • Liberty Village</p>
            <p className="text-sm">Networking and talks from industry leaders.</p>
          </div>

          <div className="border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">Food Market</h3>
            <p className="text-sm text-muted-foreground mb-3">September 1, 2024 • Kensington</p>
            <p className="text-sm">Sample food from Toronto's best restaurants and vendors.</p>
          </div>
        </div>
      </section>
    </div>
  )
}