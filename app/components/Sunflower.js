export default function Sunflower({ className = "", style = {} }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={{ display: "block", overflow: "visible", ...style }} aria-hidden="true">
      <g>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((r) => (
          <ellipse key={r} cx="50" cy="22" rx="6.5" ry="20" fill={r % 60 === 0 ? "#F4C20D" : "#EDB400"} transform={`rotate(${r} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="17" fill="#E8531C" />
      <circle cx="50" cy="50" r="7" fill="#163F37" />
    </svg>
  );
}
