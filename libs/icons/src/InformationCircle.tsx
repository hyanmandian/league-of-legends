import * as React from 'react';
type Props = React.SVGProps<SVGSVGElement> & {
  title?: string,
};

function SvgInformationCircle({ title, ...rest }: Props) {
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
  const titleId = title ? 'SvgInformationCircle' + '-title' : undefined;
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
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const MemoSvgInformationCircle = React.memo(SvgInformationCircle);
export default MemoSvgInformationCircle;
