import { DestinationCard } from "@/components/search/destination-card";

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="px-4 py-11 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[34px] font-bold tracking-[-0.04em] text-slate-900 md:text-[44px]">
              Featured destinations
            </h2>
            <p className="mt-2 max-w-[620px] text-slate-600 leading-7">
              Beautiful destinations with low fares, strong availability, and
              recommendation-friendly timing for short and mid-length trips.
            </p>
          </div>

          <button className="rounded-[14px] border border-slate-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            See all destinations
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <DestinationCard
            city="Barcelona"
            country="Spain"
            image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
            price="€65"
            badge="Best weekend pick"
            description="Popular in May with competitive fares and practical flight schedules."
          />
          <DestinationCard
            city="Milan"
            country="Italy"
            image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
            price="€55"
            badge="Lowest fare"
            description="A strong budget option for quick escapes and last-minute searches."
          />
          <DestinationCard
            city="Amsterdam"
            country="Netherlands"
            image="https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=1200&q=80"
            price="€78"
            badge="Premium value"
            description="Slightly higher fare, but stronger schedule flexibility and city-break appeal."
          />
        </div>
      </div>
    </section>
  );
}