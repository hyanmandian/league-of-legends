import * as React from 'react';
type Props = React.SVGProps<SVGSVGElement> & {
  title?: string,
};

function SvgScissors({ title, ...rest }: Props) {
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
  const titleId = title ? 'SvgScissors' + '-title' : undefined;
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
        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
      />
    </svg>
  );
}

const MemoSvgScissors = React.memo(SvgScissors);
export default MemoSvgScissors;
