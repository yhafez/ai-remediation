type LinkProps = {
  text: string;
  href: string;
  [key: string]: React.HTMLAttributes<HTMLAnchorElement> | string;
};

const Link = ({ text, href, ...props }: LinkProps) => (
  <a
    style={{
      display: 'block',
      marginBottom: '1em',
      fontSize: '0.8em'
    }}
    {...props}
    href={href}
  >
    {text}
  </a>
);

export default Link;
