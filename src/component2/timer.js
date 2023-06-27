import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/07/2023 18:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>
        <div className={styles.container}>

      {partyTime ? (
        <>
          <h1 className={styles.isToday}>ES HOY!!!</h1>
        </>
      ) : (
        <>
          <div className={styles.timer_wrapper}>
            <div className={styles.timer_inner}>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{days}</span>
                <span className={styles.label}>Días</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{hours}</span>
                <span className={styles.label}>Horas</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{minutes}</span>
                <span className={styles.label}>Minutos</span>
              </div>
              <span className={styles.divider}>:</span>
              <div className={styles.timer_segment}>
                <span className={styles.time}>{seconds}</span>
                <span className={styles.label}>Segundos</span>
              </div>
            </div>
          </div>
        </>
      )}
        </div>
    </div>
  );
};

export default Timer;