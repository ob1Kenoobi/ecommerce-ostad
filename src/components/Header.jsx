import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 p-4 bg-white shadow">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
