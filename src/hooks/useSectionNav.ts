import { createRef, useCallback, useEffect, useMemo, useState } from "react";

export function useSectionNav(ids: string[]) {
  const [activeNav, setActiveNav] = useState(0);

  const refs = useMemo(
    () =>
      ids.reduce((acc, id) => {
        acc[id] = createRef<HTMLElement>();
        return acc;
      }, {} as Record<string, React.RefObject<HTMLElement | null>>),
    [ids]
  );

  const scrollToSection = useCallback(
    (index: number) => {
      const target = refs[ids[index]]?.current;
      if (!target) return;
      setActiveNav(index);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [ids, refs]
  );

  useEffect(() => {
    const sections = ids
      .map((id, index) => ({ element: refs[id]?.current, index }))
      .filter((item): item is { element: HTMLElement; index: number } => Boolean(item.element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const matchedIndex = sections.find((item) => item.element === visible[0].target)?.index;
          if (typeof matchedIndex === "number") {
            setActiveNav(matchedIndex);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((item) => observer.observe(item.element));
    return () => observer.disconnect();
  }, [ids, refs]);

  return {
    refs,
    activeNav,
    scrollToSection,
  };
}
