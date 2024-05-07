export default function Footer() {
  return (
    <div className="text-xs md:text-2xl absolute bottom-0 py-2 md:py-3 left-0 flex items-center justify-center gap-4 w-full px-10 bg-gray-800 text-white">
      <p>
        Creative Dalaal Assignment ©
        <script>document.write(new Date().getFullYear());</script>
        2024 roopxx
      </p>
      <a
        className="hover:scale-110"
        href="https://github.com/roopxx"
        target="_blank"
      >
        <i className="fab fa-github hover:animate-spin" aria-hidden="true"></i>
      </a>
    </div>
  );
}
