export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-6 text-sm text-slate-500 md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 border-t border-slate-900/7 pt-6 md:flex-row md:items-center md:justify-between">
        <div>© 2026 Travel Copilot AI — Landing concept</div>

        <div className="flex flex-wrap gap-5">
          <a href="#" className="transition hover:text-slate-900">
            Product
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Saved searches
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Privacy
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}