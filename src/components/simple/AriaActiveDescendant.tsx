const AriaActiveDescendant = () => (
  <>
    <div aria-activedescendant="elementId">
      This is a non-widget div element
    </div>
    <span id="elementId">This is a non-widget descendant span element</span>
  </>
);

export default AriaActiveDescendant;
