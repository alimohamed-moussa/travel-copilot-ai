type DestinationCardProps = {
  city: string;
  country: string;
  image: string;
  price: string;
  badge: string;
  description: string;
};

export function DestinationCard({
  city,
  country,
  image,
  price,
  badge,
  description,
}: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-white/85 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div
        className="relative h-[230px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-2 text-[12px] font-bold text-slate-900 backdrop-blur-xl">
          {badge}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/50" />
      </div>

      <div className="p-[18px]">
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h3 className="text-[24px] font-bold tracking-[-0.03em] text-slate-900">
            {city}
          </h3>
          <div className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">
            {price}
          </div>
        </div>

        <div className="mb-2 text-sm font-medium text-slate-500">{country}</div>

        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}
