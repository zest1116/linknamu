type Props = { name: string; bio: string; avatar?: string };

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatar} alt={`${name} 프로필 사진`} className="size-28 rounded-full object-cover shadow-md" />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex size-28 items-center justify-center rounded-full bg-emerald-200 text-4xl font-bold text-emerald-800 shadow-md"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-gray-600">{bio}</p>
    </header>
  );
}
