import React from "react";
import clsx from "clsx"; // Import clsx for conditional class merging

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

// 2. Define the Button Component
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  loading = false,
  iconBefore,
  iconAfter,
  onClick,
  children,
  className,
  ...rest
}) => {
  // 3. Use explicit class names for variants & sizes to ensure Tailwind detection
  const variantClasses = clsx(
    variant === "primary" &&
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    variant === "secondary" &&
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    variant === "ghost" &&
      "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    variant === "danger" &&
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    variant === "success" &&
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
  );

  const sizeClasses = clsx(
    size === "small" && "py-1.5 px-3 text-sm",
    size === "medium" && "py-2.5 px-4 text-base",
    size === "large" && "py-3.5 px-6 text-lg"
  );

  // 4. Combine all classes dynamically using clsx
  const buttonClasses = clsx(
    "font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    variantClasses, // Correctly detects variant classes  
    sizeClasses, // Correctly detects size classes
    fullWidth ? "w-full" : "inline-flex",
    disabled && "cursor-not-allowed opacity-50",
    loading && "cursor-not-allowed opacity-70",
    className // Allows external class overrides
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          {/* Simple loading spinner */}
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {iconBefore && <span>{iconBefore}</span>}
          {children}
          {iconAfter && <span>{iconAfter}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
