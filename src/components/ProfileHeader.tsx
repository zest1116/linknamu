type Props = { name: string; bio: string; avatar?: string };

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatar} alt={`${name} 프로필 사진`} className="size-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_10px_30px_rgba(180,110,60,0.25)]" />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex size-28 items-center justify-center rounded-full bg-orange-100 text-4xl font-bold text-orange-800 ring-4 ring-white/80 shadow-[0_10px_30px_rgba(180,110,60,0.25)]"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-stone-500">{bio}</p>
    </header>
  );
}
