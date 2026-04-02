"use client";

import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#f5f7fb]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)]">
            ✈
          </div>
          <span className="text-[17px] font-bold tracking-[-0.02em] text-slate-900">
            Travel Copilot AI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#destinations" className="transition hover:text-slate-900">
            Destinations
          </a>
          <a href="#offers" className="transition hover:text-slate-900">
            Offers
          </a>
          <a href="#how" className="transition hover:text-slate-900">
            How it works
          </a>
          <a href="#save" className="transition hover:text-slate-900">
            Saved searches
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-[14px] border border-slate-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                Sign in
              </button>
            </SignInButton>

            <Link
              href="/sign-up"
              className="rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
            >
              Start searching
            </Link>
          </Show>

          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-[14px] border border-slate-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
            >
              Dashboard
            </Link>
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}