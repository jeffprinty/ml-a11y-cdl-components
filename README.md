# ml-a11y-cdl-components


## Components TODO
### [Accordion](https://macmillanlearning.atlassian.net/wiki/display/CDL/Accordions)
### [Alert](https://macmillanlearning.atlassian.net/wiki/pages/viewpage.action?pageId=69402693)

Alerts are used the tell the user important information related to their current activity, or to signal a change has occurred to one of their items.

**TODO/Considerations**
* CDL does not specify animations, how should alerts appear?
* Should have its own state?

**Props**

*alertType*: `string` **required**  
*content*: either `element` or `string` **required**  
*dismissable*: `boolean` defaults to `true`  

```
<Alert dismissable={ true } alertType="alert" text={ <div>Text within a div passed as a prop <a href="/">link</a></div> } /><br />
<Alert dismissable={ false } alertType="warning" text="Plain old text" /><br />
<Alert dismissable={ true } alertType="error" text={ <div>Error text <a href="/">link</a></div> } /><br />
<Alert dismissable={ true } alertType="success" text={ <div>Success text <a href="/">link</a></div> } /><br />
```
[IMAGE]
### [Breadcrumbs](https://macmillanlearning.atlassian.net/wiki/display/CDL/Breadcrumbs)
### [Button](https://macmillanlearning.atlassian.net/wiki/display/CDL/Buttons)
### [Card](https://macmillanlearning.atlassian.net/wiki/display/CDL/Cards)
### Checkbox
### [Dialog](https://macmillanlearning.atlassian.net/wiki/display/CDL/Dialogs)
### [Form](https://macmillanlearning.atlassian.net/wiki/display/CDL/Forms)
### Input
### Layout
### [Menu](https://macmillanlearning.atlassian.net/wiki/display/CDL/Menus)
### [Pagination](https://macmillanlearning.atlassian.net/wiki/display/CDL/Pagination)
### [Step Indicators](https://macmillanlearning.atlassian.net/wiki/display/CDL/Step+Indicators)
### [Table](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tables)
### [Tabs](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tabs)
### [Title Bar](https://macmillanlearning.atlassian.net/wiki/display/CDL/Title+Bar)
### [Tooltip](https://macmillanlearning.atlassian.net/wiki/pages/viewpage.action?pageId=72155528)
### Toggle
### [Tree Menu](https://macmillanlearning.atlassian.net/wiki/display/CDL/Tree+Menus)

## Done

* ~~Add Github page for demo https://github.com/tschaub/gh-pages~~

## Getting Started

Soon

### Installing

How to get a development env running

```
npm install
cd demo
npm start
```


## Running the tests

```
npm run test
```

## Demo

Run the Demo locally for usage examples or visit [https://mlazul.github.io/ml-a11y-cdl-components/](https://mlazul.github.io/ml-a11y-cdl-components/)

## Dependencies

* [styled-components](https://github.com/styled-components/styled-components/tree/master/docs) - For modular styling
* [randomatic](https://github.com/jonschlinkert/randomatic) - For generating unique tag IDs for `ariaLabelledBy`

## Contributing

Please read [CONTRIBUTING.md](soon) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Jeff Printy** - *Initial work*
* **Phillip Jones** - *Contributing*
