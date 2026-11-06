export type LinkItem = { id: string; title: string; url: string };

export const profile = {
  name: "김개발",
  bio: "풀스택 개발자\n요즘에는 AI개발에 관심이 많아요",
  avatar: "/profile.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "🧑‍💻 깃허브", url: "https://github.com/zest1116" },
  { id: "blog", title: "😁 블로그", url: "https://codingcamper.tistory.com" },
  { id: "email", title: "📧 이메일", url: "mailto:jjlee@zestcode.co.kr" },
];
