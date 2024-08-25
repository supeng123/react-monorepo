import classNames from 'classnames';

export function Panel({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className: string;
  rest: object;
}) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
