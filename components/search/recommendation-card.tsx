type RecommendationCardProps = {
  title: string;
  label: string;
  summary: string;
};

export function RecommendationCard({
  title,
  label,
  summary,
}: RecommendationCardProps) {
  return (
    <article className="rounded-3xl border bg-white/90 p-6 shadow-xl">
      <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        {label}
      </div>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  );
}
