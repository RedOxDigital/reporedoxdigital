export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  const companyName = "Your Company Name"; // ⚠ EDIT THIS

  return (
    <footer className="border-t border-primary-200 bg-primary-100">
      <div className="container py-6 text-center text-sm text-primary-700">
        <p>&copy; {currentYear} {companyName}. All Rights Reserved.</p>
        <p className="mt-1">This site is optimized for the future of search.</p>
      </div>
    </footer>
  );
}
