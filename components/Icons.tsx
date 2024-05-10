import Image from 'next/image';

export function Icon({
  name,
  className,
  width = 14,
  height = 14,
  ...props
}: {
  name: string;
  [props: string]: any;
}) {
  return (
    <Image
      className={className}
      src={`/svgs/${name}.svg`}
      width={width}
      height={height}
      {...props}
      alt="Icon"
    />
  );
}

export function ArrowRight() {
  return (
    <svg
      className=""
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 481836">
        <circle
          className="hover:fill-[#303030]"
          id="Ellipse 529"
          cx="24"
          cy="24"
          r="23.6"
          fill="black"
          stroke="#676767"
          strokeWidth="0.8"
        />
        <path
          id="Vector 116"
          d="M19 16L30 24L19 32"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 481880">
        <circle
          className="hover:fill-[#303030]"
          id="Ellipse 529"
          cx="24"
          cy="24"
          r="23.6"
          transform="rotate(-180 24 24)"
          fill="black"
          stroke="#676767"
          strokeWidth="0.8"
        />
        <path
          id="Vector 116"
          d="M29 32L18 24L29 16"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
}
