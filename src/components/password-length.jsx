function PasswordLength({ criteria, setCriteria }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex place-items-center justify-between">
        <span>character length</span>
        <span className="text-primary text-2xl font-bold">{criteria.length}</span>
      </div>
      <input type="range" min="1" max="20" value={criteria.length} onChange={e => setCriteria({ ...criteria, length: e.target.value })} className="w-full appearance-none h-1 bg-dark accent-white focus:outline-none" />
    </div>
  );
}

export default PasswordLength;
