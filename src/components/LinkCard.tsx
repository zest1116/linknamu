"use client";

type Props = { id: string; title: string; url: string; count: number; onClick: (id: string) => void };

export default function LinkCard({ id, title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(id)}
      className="relative block w-full rounded-2xl border border-white/60 bg-white/40 px-14 py-4 text-center font-medium text-stone-800 shadow-[0_8px_32px_rgba(180,110,60,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_36px_rgba(180,110,60,0.16)] active:scale-[0.99]"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-stone-400">
        {count}회
      </span>
    </a>
  );
}
