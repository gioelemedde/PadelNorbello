import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-screen items-center flex justify-center gap-8">
      <Image width={400} height={400} src="/img/error.gif" alt="error" />
      <div>
        <h2 className="text-[var(--dark-blue)] text-2xl ">
          Non piangere, e' solo un <br />{" "}
        </h2>
        <h2 className="text-[var(--acc)] text-7xl ">ERROR 404 </h2>
        <Link href='/'>
          <button className="btn2 text-white mt-5">Torna alla Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
