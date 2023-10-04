import {
  AriaActiveDescendant,
  AriaAutoComplete,
  AriaChecked,
  AriaExpanded,
  AriaLevel,
  AriaMultiline,
  AriaOrientation,
  AriaPressed,
  AriaReadOnly,
  AriaRequired,
  AriaSelected,
  AriaValue,
  Section,
  Header
} from './components';
import './App.css';

const sections = [
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
    header: 'aria-multiline',
    attributes: ['aria-multiline'],
    description: 'should only be applied to textbox elements',
    component: <AriaMultiline />
  },
  {
    header: 'aria-orientation',
    attributes: ['aria-orientation'],
    description: 'should only be applied to elements that support it',
    component: <AriaOrientation />
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
    header: 'aria-selected',
    attributes: ['aria-selected'],
    description: 'should only be applied to selectable elements',
    component: <AriaSelected />
  },
  {
    header: 'aria-value',
    attributes: ['aria-valuemax', 'aria-valuemin', 'aria-valuenow'],
    description: 'should only be applied to range elements',
    component: <AriaValue />
  }
];

function App() {
  return (
    <>
      <Header />
      {sections.map((section, index) => (
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
