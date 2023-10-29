import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-50 to-blue-200 min-h-screen flex flex-col items-center justify-center">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Do You Have Any Idea?</h2>
            <p>tell us about that...</p>
            <div className="card-actions justify-end">
              <Link href="/user">
                <button className="btn btn-outline btn-info btn-wide sm:btn-sm md:btn-md lg:btn-lg">
                  Start now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
