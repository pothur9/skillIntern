"use client";

import { useEffect, useRef, useState } from "react";
import { FiBriefcase, FiTrendingUp, FiDollarSign, FiAward } from "react-icons/fi";
import styles from "./Stats.module.css";

const stats = [
  { icon: <FiBriefcase />, displayVal: "500+", label: "Hiring Partners", color: "purple" },
  { icon: <FiTrendingUp />, displayVal: "12 LPA", label: "Highest Package", color: "indigo" },
  { icon: <FiDollarSign />, displayVal: "6.5 LPA", label: "Average Package", color: "fuchsia" },
  { icon: <FiAward />, displayVal: "95%", label: "Placement Rate", color: "emerald" },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Placement statistics">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.iconWrap} ${styles[s.color]}`}>{s.icon}</div>
              <div className={styles.value}>{s.displayVal}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
