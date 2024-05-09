export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full h-10 z-50 flex items-center justify-center text-black">
      <footer className="flex mb-20 justify-center">
        <p className="text-xs text-black">
          Built from scratch with Next.js and Tailwind CSS.{""}
          <br />
          <br />
          {""} Check out the source code on {""}
          <a
            target="_blank"
            className="underline hover:text-black"
            href="https://github.com/mikeeech/mikee-chong.com"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
