'use client'
import { ComponentProps, ReactNode } from 'react';
import Field from './Field';
// import File from './File';
// import Select from './Select';
// import RadioGroup from './RadioGroup';
// import SocialLink from './SocialLink';
// import Checkbox from './Checkbox';

function Form({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ComponentProps<'form'>) {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
}

export default Object.assign(Form, {
  Field: Field,
//   Select: Select,
//   File: File,
//   RadioGroup: RadioGroup,
//   SocialLink: SocialLink,
//   Checkbox: Checkbox,
});
