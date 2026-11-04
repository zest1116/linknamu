export type LinkItem = { id: string; title: string; url: string };

export const profile = {
  name: "홍길동",
  bio: "세계최강 바이브 코더",
  avatar: "",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com" },
];
