import style from './statsSection.module.css';

export default function StatsSection() {
  return (
    <>
      <h2 className={style.sectionTitle}>📊 Stats</h2>
      <div className={style.statsBlock}>
        <ul>
          <li><span>3000+</span> monthly listeners</li>
          <li><span>10K+</span> total streams</li>
          <li><span>30+</span> countries reached</li>
        </ul>
      </div>
    </>
  );
};