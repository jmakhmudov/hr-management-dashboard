import Alert from "@/components/Alert";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main>
      <Alert />
      <Navbar />
      <Sidebar />
      <section className=" m-4">
        <h1 className=" text-2xl font-bold">Dashboard</h1>
        <p className=" opacity-50 mt-2">Hello, John!</p>
      </section>
    </main>
  )
}
