export function GirihPattern({
  id = "girih",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id={id}
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M36 4 L68 36 L36 68 L4 36 Z" />
            <circle cx="36" cy="36" r="15" />
            <path d="M4 4 L68 68 M68 4 L4 68" strokeWidth="0.55" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
