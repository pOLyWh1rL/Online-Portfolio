import { useEffect, useRef } from 'react';

function SectionHeader({ title }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-header" ref={headerRef}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          className="wave-path"
          d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
