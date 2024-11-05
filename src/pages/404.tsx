import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <div className="flex w-screen justify-center">page not found</div>
            <Link href="/home" className="flex w-screen justify-center underline">Go to home</Link>
        </>
    )
  }