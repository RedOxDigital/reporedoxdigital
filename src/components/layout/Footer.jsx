export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="container py-6 text-center text-sm text-gray-700">
        <p>&copy; {currentYear} Client Website. All Rights Reserved.</p>
        <p className="mt-1">Built with modern web technologies.</p>
      </div>
    </footer>
  );
}
