import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link
            className={`link ${pathname === "/categories" ? "active" : ""}`}
            href="/categories"
          >
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
