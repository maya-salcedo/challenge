import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { RangeSlider } from '../components';

export function MultiRangeSlider({ min, max, onChange, day }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [checked, setChecked] = useState(false);
  const [disableSlider, setDisableSlider] = useState(true);
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
      <RangeSlider.Row>
        <RangeSlider.DayCheckboxLabel label={day}>
          <RangeSlider.DayCheckbox
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              setDisableSlider(!disableSlider);
            }}
          />
        </RangeSlider.DayCheckboxLabel>
        <RangeSlider.TimeRange>
          <p>
            {`${minVal}:00`} - {maxVal === 24 ? '23:59' : `${maxVal}:00`}
          </p>
        </RangeSlider.TimeRange>
      </RangeSlider.Row>
      <RangeSlider.Row center>
        <RangeSlider.InputLeft
          type="range"
          disabled={disableSlider}
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <RangeSlider.InputRight
          type="range"
          disabled={disableSlider}
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
        />

        <RangeSlider.Slider>
          <RangeSlider.Track />
          <div ref={range} className={disableSlider ? 'red' : 'green'} />
        </RangeSlider.Slider>
      </RangeSlider.Row>
    </RangeSlider>
  );
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
