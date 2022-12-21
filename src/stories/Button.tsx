import React from 'react';
import './button.css';

interface ButtonProps {
  contained?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  contained = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = contained ? 'storybook-button--contained' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
