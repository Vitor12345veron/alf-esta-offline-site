interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({
  className = '',
  iconClassName = '',
  textClassName = '',
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className={iconClassName}
        aria-hidden="true"
      >
        <circle cx="16" cy="24" r="2.5" fill="#D71920" />
        <path
          stroke="#D71920"
          strokeWidth="2.2"
          strokeLinecap="round"
          d="M7 16c3-3 9-3 12 0"
        />
        <path
          stroke="#D71920"
          strokeWidth="2.2"
          strokeLinecap="round"
          d="M4 11c5-5 15-5 20 0"
        />
        <path
          stroke="#D71920"
          strokeWidth="2.5"
          strokeLinecap="round"
          d="M23 23l6-6"
        />
      </svg>
      {showText && (
        <span className={textClassName}>ALF Está Offline</span>
      )}
    </div>
  );
}
