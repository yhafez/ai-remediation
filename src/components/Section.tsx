const Section = ({
  header,
  attributes,
  description,
  children
}: {
  header: string;
  headerLevel?: number;
  attributes?: string[];
  description?: string;
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
              <code
                key={index}
                style={{
                  padding: '0.25em 0.25em',
                  borderRadius: '0.25em',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                {attribute}
              </code>
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
