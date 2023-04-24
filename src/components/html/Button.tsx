type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
