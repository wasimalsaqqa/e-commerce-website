function SliderArrow({ direction, onClick, label, className = "" }) {
  const isNext = direction === "next";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex items-center justify-center size-11 rounded-full bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white shadow-Card cursor-pointer hover:scale-110 hover:brightness-110 active:scale-95 transition duration-200 ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={isNext ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
      </svg>
    </button>
  );
}

export default SliderArrow;
