import Image from "next/image";
import me from "../assets/me.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={me}
          alt="logo"
          width={100}
          height={38}
        />
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2">Hello, I am Elisabeth Erkekoglou </p>
          <p>Junior Frontend Developer based in Germany</p>

          <p>Currently working as :
            a Costumer Service Employee <br /> @Arvato SE since October 2016</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://docs.google.com/document/d/1AXzabGqPFsaHUKLgsPYk4ExFrILvhU4CDIgGqHWLa48/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV
          </a>

          <Link
            href="/about"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            About me
          </Link>


        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
 
        <Link href="/blog" className="flex items-center gap-2 hover:underline hover:underline-offset-4"> 
        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Blogs
        </Link>

        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/portfolio"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Portfolio
          </Link>
          
          
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
