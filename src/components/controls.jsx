import { IoArrowForward } from 'react-icons/io5';
import PasswordLength from './password-length';
import Checkbox from './checkbox';
import Strength from './strength';
import { useState } from 'react';
import rules from '../config';
import { generatePassword, ratePassword } from '../helper';

function Controls({ setPassword }) {
  const [criteria, setCriteria] = useState({
    length: 10,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const [rate, setRate] = useState(0);

  const generate = () => {
    const password = generatePassword(criteria);
    const rate = ratePassword(password);
    setPassword(password);
    setRate(rate);
  };

  return (
    <div className="text-white bg-light-dark p-4 w-full flex-1">
      <PasswordLength criteria={criteria} setCriteria={setCriteria} />
      <div className="flex flex-col mt-5 gap-4">
        {rules.map(rule => (
          <Checkbox key={rule.name} name={rule.name} label={rule.label} criteria={criteria} setCriteria={setCriteria} />
        ))}
      </div>
      <Strength rate={rate} />
      <button onClick={() => generate(criteria)} className="bg-primary text-dark font-bold py-2 w-full mt-5 flex items-center justify-center gap-2 focus:outline-none">
        <span>GENERATE</span>
        <IoArrowForward />
      </button>
    </div>
  );
}

export default Controls;
