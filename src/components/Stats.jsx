import { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/skills';

function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const increment = value / 30;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [animated, value]);

  return (
    <div className="stat-box" ref={ref}>
      <h3 className="stat-number">
        {count}
        {suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        {statsData.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
