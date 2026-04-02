import Link from "next/link";

export function SaveSearchesCta() {
  return (
    <section id="save" className="px-4 py-11 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[32px] bg-gradient-to-br from-slate-950 to-blue-900 px-8 py-10 text-white shadow-[0_26px_56px_rgba(15,23,42,0.22)]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-bold text-white">
            Optional account experience
          </div>

          <h2 className="max-w-[820px] text-[34px] font-bold tracking-[-0.04em] md:text-[48px]">
            Search freely. Create an account when you want to save results.
          </h2>

          <p className="mt-4 max-w-[720px] leading-7 text-white/80">
            Let visitors explore instantly with no friction, then invite them to
            sign up to keep saved searches, favorite routes and personalized
            preferences.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-[14px] border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white">
              Continue without account
            </button>

            <Link
              href="/sign-up"
              className="rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.25)]"
            >
              Create free account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}