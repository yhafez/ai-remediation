import Link from './Link';

const Header = () => (
  <div
    style={{
      maxWidth: '800px',
      margin: '0 auto',
      border: '1px solid #ccc',
      padding: '2em',
      marginBottom: '2em',
      textAlign: 'center',
      borderRadius: '0.25em',
      boxShadow: '0 0 0.5em rgba(0, 0, 0, 0.1)'
    }}
  >
    <h1
      style={{
        marginTop: 0,
        fontSize: '2.5em',
        fontWeight: 700
      }}
    >
      AI Issue Remediation Demo
    </h1>
    <Link
      text="ARIA Attributes Conformance Requirements"
      href="https://www.w3.org/TR/html-aria/#docconformance"
    />
    <Link
      text="DQU: Elements must only use allowed ARIA attributes"
      href="https://dequeuniversity.com/rules/axe/4.7/aria-allowed-attr?application=AxeChrome"
    />
  </div>
);

export default Header;
