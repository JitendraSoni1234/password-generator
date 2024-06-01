import PreviewPassword from './preview-password';
import Controls from './controls';
import { useState } from 'react';

function Generator() {
  const [password, setPassword] = useState('');
  return (
    <div className="p-4 rounded-lg h-[70dvh] w-[90dvw] xl:w-[30dvw] lg:w-[40dvw] md:w-[50dvw] sm:w-[60dvw] flex flex-col">
      <div className="text-2xl font-bold text-light text-center">Password Generator</div>
      <div className="flex flex-1 flex-col place-items-center justify-between gap-5">
        <PreviewPassword password={password} />
        <Controls setPassword={setPassword} />
      </div>
    </div>
  );
}

export default Generator;
