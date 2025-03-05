export default function Footer() {
  return (
    <div className="flex justify-center py-3">
      <p className="text-center text-[8px]">
        Built from scratch using Next.js and Tailwind CSS.{''}
        Check out the source code on{' '}
        <a
          href="https://github.com/mikeeech/mikee-chong.com"
          target="_blank"
          rel="noreferrer noopener"
          className="underline hover:text-black"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}