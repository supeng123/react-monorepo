import className from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { GoSync } from 'react-icons/go';

export type ButtonInput = {
  children?: JSX.Element | string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
};

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonInput;

export function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}: CustomButtonProps) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'opacity-80': loading,
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }: ButtonInput) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

// import type { FunctionComponent } from 'react';
// import className from 'classnames';

// type ExcludeFromTuple<T extends any[], U> = {
//   [K in keyof T]: T[K] extends U ? never : T[K];
// }[number];

// type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
//   ? E extends string
//     ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
//     : never
//   : never & {};

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
//   Partial<{
//     outline?: boolean;
//     rounded?: boolean;
//   }> &
//   Exclusive<['primary', 'secondary', 'success', 'warning', 'danger'], boolean>;

// export const Button: FunctionComponent<ButtonProps> = ({
//   children,
//   primary,
//   secondary,
//   success,
//   warning,
//   danger,
//   outline,
//   rounded,
//   ...rest
// }) => {
//   const classes = className(
//     rest.className,
//     'flex items-center px-3 py-1.5 border',
//     {
//       'border-blue-500 bg-blue-500': primary,
//       'border-gray-900 bg-gray-900': secondary,
//       'border-green-500 bg-green-500': success,
//       'border-yellow-400 bg-yellow-400': warning,
//       'border-red-500 bg-red-500': danger,
//       'rounded-full': rounded,
//       'text-white':
//         !outline && (primary || secondary || success || warning || danger),
//       'bg-white': outline,
//       'text-blue-500': outline && primary,
//       'text-gray-500': outline && secondary,
//       'text-green-500': outline && success,
//       'text-yellow-500': outline && warning,
//       'text-red-500': outline && danger,
//     }
//   );

//   return (
//     <button {...rest} className={classes}>
//       {children}
//     </button>
//   );
// };
