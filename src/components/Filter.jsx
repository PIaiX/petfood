import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SelectImitation from './utils/SelectImitation';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Filter = () => {
  const [value, setValue] = useState([150, 1500]);
  console.log('value: '+value);
  return (
    <form action="" className='filter'>
      <fieldset>
        <legend>Цена, ₽</legend>
        <div className="d-flex justify-content-between align-items-center fs-09 mb-3">
          <div className="input-labeled flex-1">
            <span>От</span>
            <input type="number" value={value[0]} onChange={(e)=>setValue([e.target.value, value[1]])}/>
          </div>
          <hr className='divider'/>
          <div className="input-labeled flex-1">
            <span>До</span>
            <input type="number" value={value[1]} onChange={(e)=>setValue([value[0], e.target.value])}/>
          </div>
        </div>
        <RangeSlider min={0} max={2500} value={value} onInput={setValue}/>
      </fieldset>
      <fieldset>
        <legend>Вес питомца, кг</legend>
        <SelectImitation 
          placeholder={'Вес питомца'}
          optionsArr={[
            {
              value: 1,
              label: '2 кг',
              defaultChecked: false,
            },
            {
              value: 2,
              label: '3 кг',
              defaultChecked: false,
            },
            {
              value: 3,
              label: '4 кг',
              defaultChecked: false,
            },
          ]}
        />
      </fieldset>
      <fieldset>
        <legend>Возраст</legend>
        <SelectImitation 
          placeholder={'Возраст питомца'}
          optionsArr={[
            {
              value: 1,
              label: 'до 1 года',
              defaultChecked: false,
            },
            {
              value: 2,
              label: 'от 1 до 7 лет',
              defaultChecked: false,
            },
            {
              value: 3,
              label: 'старше 7 лет',
              defaultChecked: false,
            },
          ]}
        />
      </fieldset>

      <Accordion defaultActiveKey="0">
        <Accordion.Item as="fieldset" eventKey="0">
          <Accordion.Header as="legend">Характеристика</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="1">
          <Accordion.Header as="legend">Параметр 3</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="2">
          <Accordion.Header as="legend">Параметр 4</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="3">
          <Accordion.Header as="legend">Параметр 5</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </form>
  );
};

export default Filter;