# ml-a11y-cdl-components


## Components
### [Accordion](https://macmillanlearning.atlassian.net/wiki/display/CDL/Accordions)

#### Links:
* [Accessible accordion using ARIA and Vanilla Javascript - Van11y](https://van11y.net/accessible-accordion/)
### [Alert](https://macmillanlearning.atlassian.net/wiki/pages/viewpage.action?pageId=69402693)

Alerts are used the tell the user important information related to their current activity, or to signal a change has occurred to one of their items.

**TODO/Considerations**

* CDL does not specify animations, how should alerts appear?
* Probably needs to have its own state
* How to manage delay? Allow custom delay?

**Props**

*alertType*: `string` **required**  
*content*: either `element` or `string` **required**  
*dismissable*: `boolean` defaults to `true`  

```
<Alert alertType="alert" dismissable={ true } text={ <div>Text within a div passed as a prop <a href="/">link</a></div> } /><br />
<Alert alertType="warning" dismissable={ false } text="Plain old text" /><br />
<Alert alertType="error" dismissable={ true } text={ <div>Error text <a href="/">link</a></div> } /><br />
<Alert alertType="success" dismissable={ true } text={ <div>Success text <a href="/">link</a></div> } /><br />
```
[IMAGE]

#### Links
* [schiehll/react-alert: A simple react alert (toaster style) component](https://github.com/schiehll/react-alert)

### [Breadcrumbs](https://macmillanlearning.atlassian.net/wiki/display/CDL/Breadcrumbs)
### [Button](https://macmillanlearning.atlassian.net/wiki/display/CDL/Buttons)

### Todo

* Text buttons
* Button group
* Tab group

#### Links:
* [How to use the Button Element to improve Accessibility • RachieVee: Rachel's Blog](http://rachievee.com/use-button-element-improve-accessibility/)
* [Building Accessible Buttons with ARIA](https://www.deque.com/blog/accessible-aria-buttons)
* [Button Examples | WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)

### [Card](https://macmillanlearning.atlassian.net/wiki/display/CDL/Cards)
### Checkbox
### [Dialog/Modal](https://macmillanlearning.atlassian.net/wiki/display/CDL/Dialogs)

#### Links
* [gdkraus/accessible-modal-dialog: An demonstration of how to code a modal dialog/window so that it is accessible to people with disabilities.](https://github.com/gdkraus/accessible-modal-dialog)

### [Form](https://macmillanlearning.atlassian.net/wiki/display/CDL/Forms)
### Icon

#### Links:
* [How Can I Make My Icon System Accessible? | CSS-Tricks](https://css-tricks.com/can-make-icon-system-accessible/)

### Input
### Layout
### [Menu](https://macmillanlearning.atlassian.net/wiki/display/CDL/Menus)
### Modal
#### Links
* [davidtheclark/react-aria-modal: A fully accessible React modal built according WAI-ARIA Authoring Practices](https://github.com/davidtheclark/react-aria-modal)

### [Pagination](https://macmillanlearning.atlassian.net/wiki/display/CDL/Pagination)
### [Step Indicators](https://macmillanlearning.atlassian.net/wiki/display/CDL/Step+Indicators)
### [Table](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tables)
### [Tabs](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tabs)

#### Links
* [Accessible tab panel using ARIA and Vanilla Javascript - Van11y](https://van11y.net/accessible-tab-panel/)

### [Title Bar](https://macmillanlearning.atlassian.net/wiki/display/CDL/Title+Bar)
### [Tooltip](https://macmillanlearning.atlassian.net/wiki/pages/viewpage.action?pageId=72155528)
### Toggle
#### Links
* [Accessible custom checkboxes and radio buttons | 456 Berea Street](http://www.456bereastreet.com/archive/201211/accessible_custom_checkboxes_and_radio_buttons/)

### [Tree Menu](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tree+Menus)

## Done

* Add Github page for demo https://github.com/tschaub/gh-pages

## Getting Started

Soon

### Installing

How to get a development env running

```
npm install
cd demo
npm start
```
Open `0.0.0.0:8080` to view demo server

## Running the tests

```
npm run test
```

## Demo

Run the Demo locally for usage examples or [view the demo online](https://jeffprinty.github.io/ml-a11y-cdl-components/)

## Dependencies

* [styled-components](https://github.com/styled-components/styled-components/tree/master/docs) - For modular styling
* [randomatic](https://github.com/jonschlinkert/randomatic) - For generating unique tag IDs for `ariaLabelledBy`

## Contributing

Please read [CONTRIBUTING.md](soon) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Jeff Printy** - *Initial work*
* **Phillip Jones** - *Contributing*
