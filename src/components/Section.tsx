const Section = ({
  header,
  attributes,
  description,
  children
}: {
  header: string;
  headerLevel?: number;
  attributes?: string[];
  description?: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <section>
      <p
        style={{
          marginTop: '0.75em',
          marginBottom: '0.25em',
          fontSize: '1.5em',
          fontWeight: 600
        }}
      >
        {header}
      </p>
      <div
        style={{
          marginTop: 0,
          marginBottom: '2em'
        }}
      >
        {attributes &&
          attributes.length &&
          attributes.map((attribute, index) => (
            <>
              <code key={index}>{attribute}</code>
              {index < attributes.length - 2 ? ', ' : ''}
              {index === attributes.length - 2 ? ' and ' : ''}
            </>
          ))}
        <span
          style={{
            fontStyle: 'italic'
          }}
        >
          {' '}
          {description}
        </span>
      </div>
      {children}
    </section>
  );
};

export default Section;
