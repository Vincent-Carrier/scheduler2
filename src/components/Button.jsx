import React from 'react';
import classNames from 'classnames';
import 'components/Button.scss';

export default function Button({
  danger, confirm, children, onClick,
}) {
  const buttonClass = classNames('button', {
    'button--confirm': confirm,
    'button--danger': danger,
  });
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
