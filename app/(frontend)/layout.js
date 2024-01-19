import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";

export default function layout({ children }) {
  return (
    <div
      className="bg-white dark:bg-slate-900 
    text-black dark:text-slate-300 h-screen overflow-auto
    space-y-5"
    >
      <Navbar />
      <div className="container mx-auto my-5">
        <h4
          className="mx-auto lg:text-xl text-justify p-5 leading-7 md:leading-10 font-sans
        bg-slate-100 dark:bg-slate-800/30 w-fit
        border-l-4 border-r-4 border-yellow-600 dark:border-green-600"
        >
          Platform for guidance examinations like UPSC CSE, State PSC, Indian
          armed forces defence exam written as well as S.S.B interviews.
        </h4>
      </div>
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  );
}
