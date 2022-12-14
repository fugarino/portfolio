import Link from "next/link";

interface ILinkURL {
  linkURL: string;
}

const ArrowLink = ({ linkURL }: ILinkURL) => {
  return (
    <Link href={linkURL} className="text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
