export const Email = () => {
  return (
    <div className="flex gap-4 items-center w-80 justify-center">
      <svg
        data-name="1-Email"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-8 w-8 text-primary"
      >
        <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
      </svg>
      <a
        className="text-white no-underline"
        target="_blank"
        href="mailto:compudata@compudata.com.uy"
      >
        compudata@compudata.com.uy
      </a>
    </div>
  );
};
