import NavBar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import MentorDetail from "./components/MentorDetail";

export default function Home() {
  return (
    <div className="w-full  h-full bg-[#F4F4F4]">
      <NavBar />
      <div className="w-full max-w-[1216px] px-4 sm:px-8 lg:px-16 mx-auto py-8">
        <Breadcrumb
          items={[
            { label: "Mentors", href: "/mentors" },
            { label: "Melissa A." },
          ]}
        />
        <div className="w-full max-w-[1216px] h-auto p-4 sm:p-8 rounded-lg bg-white">
          <MentorDetail />
        </div>
      </div>
    </div>
  );
}
