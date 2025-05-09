import { ReactNode, useEffect, useRef, useState } from 'react';

/**
 * The hover container component
 * @param {ReactNode} children - The children of the hover container
 * @param {string} type - The type of the hover container
 * @returns {JSX.Element} The hover container component
 */

export const HoverContainer = ({ children, type }: { children: ReactNode, type?: string }) => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref });
  const bottomOffset = type === 'skill' ? '-bottom-[5.5rem]' : type === "sub-rune" ? "-bottom-[4.5rem]" : type === "main-rune" ? '' : '-bottom-[6.5rem]';

  const translateVerticalValue = isVisible[0] ? '-translate-y-full -top-4 hover-box-top' : 'translate-y-full -top-16 hover-box-bottom ' + bottomOffset;
  const translateHorizontal = isVisible[1] && isVisible[2] ? '-translate-x-1/2' : isVisible[1] ? '-translate-x-[85%]' : isVisible[2] ? '-translate-x-[15%]' : '-translate-x-1/2';

  return (
    <>
      <div ref={ref} className='z-50 absolute top-1/2 left-1/2'></div>
      <div className={`${translateVerticalValue} opacity-0 hover-box-enter absolute  left-1/2 ${translateHorizontal} z-50 hover-box-enter`}>
        {children}
      </div>
    </>
  )

}


export function useIsVisible({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) {
  const [isIntersectingVertical, setIntersectingVertical] = useState(false);
  const [isIntersectingLeft, setIntersectingLeft] = useState(false);
  const [isIntersectingRight, setIntersectingRight] = useState(false);
  useEffect(() => {
    const observerRight = new IntersectionObserver(([entry]) => {
      setIntersectingRight(entry.isIntersecting);
    },
      {
        rootMargin: '0px -200px 0px 0px',
        threshold: 0.1
      }
    );
    const observerLeft = new IntersectionObserver(([entry]) => {
      setIntersectingLeft(entry.isIntersecting);
    },
      {
        rootMargin: '0px 140px 0px -200px',
        threshold: 0.1
      }
    );

    const observerVertical = new IntersectionObserver(([entry]) => {
      setIntersectingVertical(entry.isIntersecting);
    },
      {
        rootMargin: '-140px 0px 0px 0px',
        threshold: 0.1
      }
    );
    if (!ref.current) return;
    observerRight.observe(ref.current);
    observerLeft.observe(ref.current);
    observerRight.observe(ref.current);
    observerVertical.observe(ref.current);
    return () => {
      observerRight.disconnect();
      observerLeft.disconnect();
      observerVertical.disconnect();
    };
  }, [ref]);

  return [isIntersectingVertical, isIntersectingLeft, isIntersectingRight];
}
