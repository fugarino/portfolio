"use client";

import { useState } from "react";
import styles from "../sliders/ProjectsSlider.module.css";

const ProjectsSlider = () => {
  const [project, setProject] = useState("slider1");

  return (
    <div className={`${styles.container} w-full mt-8`}>
      <input
        type="radio"
        value="slider1"
        id={styles["s1"]}
        checked={project === "slider1"}
        onChange={() => setProject("slider1")}
        className="w-4"
      />
      <input
        type="radio"
        value="slider2"
        id={styles["s2"]}
        checked={project === "slider2"}
        onChange={() => setProject("slider2")}
      />
      <input
        type="radio"
        value="slider3"
        id={styles["s3"]}
        checked={project === "slider3"}
        onChange={() => setProject("slider3")}
      />

      <div className={`${styles.cards}`}>
        <label htmlFor="s1" id={styles["slide1"]}>
          <div
            className={`${styles.card} ${styles.card1}
            ${project !== "slider1" && "cursor-pointer"}`}
            onClick={() => setProject("slider1")}
          >
            slide1
          </div>
        </label>

        <label htmlFor="s2" id={styles["slide2"]}>
          <div
            className={`${styles.card} ${styles.card2} ${
              project !== "slider2" && "cursor-pointer"
            }`}
            onClick={() => setProject("slider2")}
          >
            slide2
          </div>
        </label>

        <label htmlFor="s3" id={styles["slide3"]}>
          <div
            className={`${styles.card} ${styles.card3} ${
              project !== "slider3" && "cursor-pointer"
            }`}
            onClick={() => setProject("slider3")}
          >
            slide3
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProjectsSlider;