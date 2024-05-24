import { JobsList } from "@/components/JobsList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center pt-24 pb-14 text-center gap-5">
        <h1 className="font-bold text-5xl">My Jobs List</h1>
        <p className="font-normal max-w-[500px]">
          Welcome to my jobs list. This project was made with the intention of
          listing jobs all around the world.
        </p>
      </header>
      <JobsList />
    </main>
  );
}
