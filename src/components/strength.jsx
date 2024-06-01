function Strength({ rate }) {
  return (
    <div className="w-full mt-5 bg-dark">
      <div className="flex place-items-center justify-between gap-2 h-12 px-2">
        <span>STRENGTH</span>
        <Indicator rate={rate} />
      </div>
    </div>
  );
}

function Indicator({ rate }) {
  return (
    <div className="flex gap-2">
      <div>{rate < 3 ? 'WEAK' : rate < 5 ? 'MEDIUM' : 'STRONG'}</div>
      <div className="flex gap-1">
        {[...Array(5)].map((i, index) => (
          <div key={i} className="box h-full w-2 border-2 border-transparent [&[data-check=true]]:bg-primary [&[data-check=false]]:border-white" data-check={index < rate} />
        ))}
      </div>
    </div>
  );
}

export default Strength;
