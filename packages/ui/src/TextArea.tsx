import type { ComponentProps } from 'react';
import { forwardRef, useId } from 'react';

import { FieldError } from './Form';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, className, ...props }, ref) {
    const id = useId();

    return (
      <div className={className}>
        <label htmlFor={id} className="label">
          {label && <div className="label">{label}</div>}
        </label>
        <textarea
          id={id}
          className={
            'focus:border-brand-500 focus:ring-brand-400 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm disabled:bg-gray-500/20 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900'
          }
          ref={ref}
          {...props}
        />
        {props.name && <FieldError name={props.name} />}
      </div>
    );
  }
);
