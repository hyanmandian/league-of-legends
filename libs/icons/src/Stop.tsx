import * as React from 'react';
type Props = React.SVGProps<SVGSVGElement> & {
  title?: string,
};

function SvgStop({ title, ...rest }: Props) {
  const props = {
    ...rest,
    width: 24,
    height: 24,
    ...(title
      ? {
          role: 'img',
        }
      : {
          'aria-hidden': true,
        }),
  };
  const titleId = title ? 'SvgStop' + '-title' : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
      />
    </svg>
  );
}

const MemoSvgStop = React.memo(SvgStop);
export default MemoSvgStop;
