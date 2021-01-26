import * as React from 'react';
type Props = React.SVGProps<SVGSVGElement> & {
  title?: string,
};

function SvgUsers({ title, ...rest }: Props) {
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
  const titleId = title ? 'SvgUsers' + '-title' : undefined;
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
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

const MemoSvgUsers = React.memo(SvgUsers);
export default MemoSvgUsers;
