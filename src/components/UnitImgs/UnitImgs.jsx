import { useRef, useState } from "react";

const SWIPE_DISTANCE = 50;

function UnitImgs({ images = [], title = "" }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;

  if (count === 0) return null;

  const goTo = (index) => setActive((index + count) % count);
  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") previous();
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (distance <= -SWIPE_DISTANCE) next();
    if (distance >= SWIPE_DISTANCE) previous();
  };

  return (
    <section className="flex flex-col gap-3" aria-label={`${title} images`}>
      <div
        className="relative overflow-hidden rounded-lg touch-pan-y outline-none focus-visible:ring-2 focus-visible:ring-[#8E1616]"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={`${img}-${index}`}
              src={img}
              alt={`${title} ${index + 1}`}
              draggable={false}
              className="w-full shrink-0 h-64 md:h-[525px] object-cover"
            />
          ))}
        </div>

        {count > 1 && (
          <>
            <span className="absolute bottom-3 right-3 rounded-full bg-[#8E1616]/90 px-3 py-0.5 font-lato font-bold text-sm text-white">
              {active + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {images.map((img, index) => (
            <button
              type="button"
              key={`${img}-${index}`}
              onClick={() => goTo(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              className={`overflow-hidden rounded-lg cursor-pointer transition duration-200 ${
                index === active
                  ? "ring-2 ring-[#8E1616] ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-20 md:h-45 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default UnitImgs;
