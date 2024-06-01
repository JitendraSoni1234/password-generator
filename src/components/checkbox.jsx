function Checkbox({ name, label, criteria, setCriteria }) {
  return (
    <div className="flex place-items-center gap-4 ">
      <input
        type="checkbox"
        name={name}
        onChange={e => setCriteria({ ...criteria, [name]: e.target.checked })}
        className="peer cursor-pointer appearance-none relative h-4 w-4 bg-dark border border-whtie transition-all checked:border-primary checked:bg-primary"
      />
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
