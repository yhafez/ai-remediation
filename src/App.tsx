import {
  AriaActiveDescendant,
  AriaAutoComplete,
  AriaChecked,
  AriaCol,
  AriaExpanded,
  AriaLevel,
  AriaModal,
  AriaMultiline,
  AriaMultiSelectable,
  AriaOrientation,
  AriaPosinsetSetsize,
  AriaPressed,
  AriaReadOnly,
  AriaRequired,
  AriaRow,
  AriaSelected,
  AriaSetsize,
  AriaSort,
  AriaValue,
  Section,
  Header,
  AccordionAriaExpandedParent,
  AccordionAriaExpandedChild
} from './components';
import './App.css';

const simpleSections = [
  {
    header: 'aria-activedescendant',
    attributes: ['aria-activedescendant'],
    description: 'should not be applied to a non-widget element',
    component: <AriaActiveDescendant />
  },
  {
    header: 'aria-autocomplete',
    attributes: ['aria-autocomplete'],
    description: 'should only be applied to text input elements',
    component: <AriaAutoComplete />
  },
  {
    header: 'aria-checked',
    attributes: ['aria-checked'],
    description:
      'should only be applied to checkbox, radio, or menuitemcheckbox elements',
    component: <AriaChecked />
  },
  {
    header: 'aria-col',
    attributes: ['aria-colcount', 'aria-colindex'],
    description: 'should only be applied to table cell elements',
    component: <AriaCol />
  },
  {
    header: 'aria-expanded',
    attributes: ['aria-expanded'],
    description:
      'should be applied to the button element and not the parent container',
    component: <AriaExpanded />
  },
  {
    header: 'aria-level',
    attributes: ['aria-level'],
    description: 'should only be applied to heading elements',
    component: <AriaLevel />
  },
  {
    header: 'aria-modal',
    attributes: ['aria-modal'],
    description: 'should only be applied to dialog elements',
    component: <AriaModal />
  },
  {
    header: 'aria-multiline',
    attributes: ['aria-multiline'],
    description: 'should only be applied to textbox elements',
    component: <AriaMultiline />
  },
  {
    header: 'aria-multiselectable',
    attributes: ['aria-multiselectable'],
    description: 'should only be applied to listbox, grid, or tablist elements',
    component: <AriaMultiSelectable />
  },
  {
    header: 'aria-orientation',
    attributes: ['aria-orientation'],
    description: 'should only be applied to elements that support it',
    component: <AriaOrientation />
  },
  {
    header: 'aria-posinset/aria-setsize',
    attributes: ['aria-posinset', 'aria-setsize'],
    description: 'should only be applied to elements that support it',
    component: <AriaPosinsetSetsize />
  },
  {
    header: 'aria-pressed',
    attributes: ['aria-pressed'],
    description:
      'should only be applied to button, checkbox, menuitem, and radio elements',
    component: <AriaPressed />
  },
  {
    header: 'aria-readonly',
    attributes: ['aria-readonly'],
    description: 'should not be applied to elements that do not support it',
    component: <AriaReadOnly />
  },
  {
    header: 'aria-required',
    attributes: ['aria-required'],
    description: 'should not be applied to non-interactive elements',
    component: <AriaRequired />
  },
  {
    header: 'aria-row',
    attributes: ['aria-rowcount', 'aria-rowindex'],
    description: 'should only be applied to table cell elements',
    component: <AriaRow />
  },
  {
    header: 'aria-selected',
    attributes: ['aria-selected'],
    description: 'should only be applied to selectable elements',
    component: <AriaSelected />
  },
  {
    header: 'aria-setsize',
    attributes: ['aria-setsize'],
    description: 'should only be applied to elements that support it',
    component: <AriaSetsize />
  },
  {
    header: 'aria-sort',
    attributes: ['aria-sort'],
    description: 'should only be applied to gridcells or column headers',
    component: <AriaSort />
  },
  {
    header: 'aria-value',
    attributes: ['aria-valuemax', 'aria-valuemin', 'aria-valuenow'],
    description: 'should only be applied to range elements',
    component: <AriaValue />
  }
];

const accordionSections = [
  {
    header: 'aria-expanded',
    attributes: ['aria-expanded'],
    description:
      'should be applied to button elements and not the parent container',
    component: <AccordionAriaExpandedParent />
  },
  {
    header: 'aria-expanded',
    attributes: ['aria-expanded'],
    description:
      'should be applied to button elements and not the expanded child',
    component: <AccordionAriaExpandedChild />
  }
];

function App() {
  return (
    <>
      <Header />
      <h2>Simple Examples</h2>
      {simpleSections.map((section, index) => (
        <Section
          key={index}
          header={section.header}
          attributes={section.attributes}
          description={section.description}
        >
          {section.component}
        </Section>
      ))}
      <h2>Common UI Patterns</h2>
      <h3>Accordions</h3>
      {accordionSections.map((section, index) => (
        <Section
          key={index}
          header={section.header}
          attributes={section.attributes}
          description={section.description}
        >
          {section.component}
        </Section>
      ))}
    </>
  );
}

export default App;
