// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#E0E0FF] text-3xl font-bold">
            YASSINE AIT AMGHAR
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/blog"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                BLOGS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-[#FFFFFF] transition-colors duration-300 hover:text-[#D4A1FF]">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
