type OfferCardProps = {
  from: string;
  to: string;
  dates: string;
  duration: string;
  price: string;
  badges: string[];
  description: string;
};

export function OfferCard({
  from,
  to,
  dates,
  duration,
  price,
  badges,
  description,
}: OfferCardProps) {
  return (
    <article className="rounded-[22px] border border-white/90 bg-white/80 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3 text-[22px] font-extrabold tracking-[-0.03em] text-slate-900">
        <span>{from}</span>
        <div className="relative h-px flex-1 bg-linear-to-r from-blue-200 to-blue-500">
          <span className="absolute -right-1 -top-2 text-blue-600">✈</span>
        </div>
        <span>{to}</span>
      </div>

      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-[-0.03em] text-slate-900">
          {dates}
        </h3>
        <div className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">
          {price}
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
          {duration}
        </span>
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600"
          >
            {badge}
          </span>
        ))}
      </div>

      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}