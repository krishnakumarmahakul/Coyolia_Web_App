import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Knob } from "primereact/knob";
import styles from "./VolumeKnob.module.css"; // Importing styles correctly

const VolumeKnob = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const pages = ["/about", "/services", "/ambarglow", "/important", "/contact"];

  const handleKnobChange = (e) => {
    const newValue = e.value;
    setValue(newValue);

    const index = Math.floor((newValue / 100) * pages.length);
    if (index < pages.length) {
      navigate(pages[index]);
    }
  };

  return (
    <div className={styles.knobContainer}>
    
        <div className={styles.knobImage}>
          <Knob
            value={value}
            onChange={handleKnobChange}
            min={0}
            max={100}
            size={200}
            strokeWidth={0} // Hide default stroke
            valueColor="transparent" // Hide text
            rangeColor="transparent"
            showValue={false} // Hide value display
          />
        </div>
      </div>
   
  );
};

export default VolumeKnob;
