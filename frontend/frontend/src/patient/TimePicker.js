import React, { useState } from 'react';
import styles from './TimePicker.module.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <select className={styles.time_select} value={selectedTime} onChange={handleTimeChange}>
      <option value="">Wybierz godzinę</option>
      {generateTimeOptions()}
    </select>
  );
};

// Funkcja pomocnicza do generowania opcji godzin
const generateTimeOptions = () => {
  const startTime = 9 * 60; // 9:00 jako liczba minut
  const endTime = 17 * 60; // 17:00 jako liczba minut
  const interval = 45; // Interwał czasowy w minutach

  const options = [];

  for (let time = startTime; time <= endTime; time += interval) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;

    options.push(
      <option key={formattedTime} value={formattedTime}>
        {formattedTime}
      </option>
    );
  }

  return options;
};

// Funkcja pomocnicza do dodawania wiodącego zera do jednocyfrowych wartości
const padZero = (value) => {
  return value.toString().padStart(2, '0');
};

export default TimePicker;
