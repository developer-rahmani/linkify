import Image from "next/image";

function urlify(text: string) {
  const urlregex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlregex).map((part) => {
    if (part.match(urlregex)) {
      return (
        <a
          key={part}
          href={part}
          target="_blank"
          className="underline text-gray-500"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function Home() {
  const message = `this is a message for test : https://nextjs.org/docs . What is Next.js?
  Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations`;
  return (
    <div className="w-[300px]">
      <p className="text-gray-200 text-md">{urlify(message)}</p>
    </div>
  );
}
