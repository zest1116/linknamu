type Props = { title: string; url: string };

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-emerald-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
    >
      {title}
    </a>
  );
}
