import { MdContentCopy } from "react-icons/md";

function PreviewPassword({ password }) {
  return (
    <div className="bg-light-dark p-4 h-[50px] w-full mt-6 flex place-items-center justify-between">
      <span className="text-light font-bold text-2xl">{password || 'P4$5W0rD!'}</span>
      <button className="text-primary p-2 rounded-md focus:outline-none">
        <MdContentCopy />
      </button>
    </div>
  );
}

export default PreviewPassword;
