import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { RangeSlider } from '../components';

export function MultiRangeSlider({ min, max, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [active, setActive] = useState('red');
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <RangeSlider>
      <RangeSlider.InputLeft
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
          setActive('green');
        }}
        style={{ zIndex: minVal > max - 100 && '5' }}
      />
      <RangeSlider.InputRight
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
          setActive('green');
        }}
      />

      <RangeSlider.Slider>
        <RangeSlider.Track />
        <div ref={range} className={active} />
        <RangeSlider.TimeRange>
          {`${minVal}:00`} - {maxVal === 24 ? '23:59' : `${maxVal}:00`}
        </RangeSlider.TimeRange>
      </RangeSlider.Slider>
    </RangeSlider>
  );
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
