import { Children, useEffect, useRef, useState } from "react";
import SliderArrow from "./SliderArrow";

const TRANSITION_MS = 500;
const AUTOPLAY_MS = 4500;
const SWIPE_DISTANCE = 50;

// The slides render three times so the row can loop without a visible jump.
// `position` stays in the middle copy; after a move past either end it is
// moved back to the matching slide there with the animation turned off.
function CardSlider({ children, label }) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [position, setPosition] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const active = position % count;
  const isInMiddleCopy = position >= count && position < count * 2;

  const move = (step) => {
    setAnimate(true);
    setPosition((current) =>
      current >= count && current < count * 2 ? current + step : current,
    );
  };

  const goTo = (index) => {
    setAnimate(true);
    setPosition(count + index);
  };

  useEffect(() => {
    if (isInMiddleCopy) return undefined;
    const timer = setTimeout(() => {
      setAnimate(false);
      setPosition((current) => count + (current % count));
    }, TRANSITION_MS + 20);
    return () => clearTimeout(timer);
  }, [isInMiddleCopy, count]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduceMotion) return undefined;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setAnimate(true);
      setPosition((current) =>
        current >= count && current < count * 2 ? current + 1 : current,
      );
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (event) => {
    setPaused(false);
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (distance <= -SWIPE_DISTANCE) move(1);
    if (distance >= SWIPE_DISTANCE) move(-1);
  };

  return (
    <div
      role="group"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="overflow-hidden py-3 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex [--step:100%] md:[--step:50%] lg:[--step:33.3333%] ${
            animate ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{
            transform: `translateX(calc(var(--step) * ${-position}))`,
          }}
        >
          {[0, 1, 2].flatMap((copy) =>
            slides.map((slide, index) => (
              <div
                key={`${copy}-${index}`}
                className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                {slide}
              </div>
            )),
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-4">
        <SliderArrow
          direction="previous"
          label="Previous slide"
          onClick={() => move(-1)}
        />
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className="flex items-center justify-center h-6 cursor-pointer"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-linear-to-r from-[#8E1616] to-[#C34B4B]"
                    : "w-2 bg-[#CEC7C7] hover:bg-[#C34B4B]"
                }`}
              ></span>
            </button>
          ))}
        </div>
        <SliderArrow
          direction="next"
          label="Next slide"
          onClick={() => move(1)}
        />
      </div>
    </div>
  );
}

export default CardSlider;
