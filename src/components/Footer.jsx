export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 border-t">
      <div className="container py-6 mx-auto text-sm text-center text-gray-500">
        © {new Date().getFullYear()} My E-Commerce Site. All rights reserved.
      </div>
    </footer>
  );
}
