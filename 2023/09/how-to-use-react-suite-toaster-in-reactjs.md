---
title: How to use react suite toaster in reactjs
date: 2023-09-26T08:00:44.000Z
updated: 2023-09-26T08:14:42.000Z
tags:
  - react
  - javascript
  - typescript
categories:
  - programming

---

\## React Hook "useToaster" cannot be called in a class component > You cannot using \`useToaster\` in class component, use \[\`rsuite.toaster\`\](#using-in-class-component) instead. > ## Using in function component \`\`\`tsx import { Notification, useToaster, Placeholder, Uploader, ButtonToolbar, SelectPicker, Button } from 'rsuite'; const App = () => { const \[type, setType\] = React.useState('info'); const \[placement, setPlacement\] = React.useState('topStart'); const toaster = useToaster(); const message = (

* * *

); return (

{message}

* * *

toaster.push(message, { placement })}>Push toaster.remove()}>Remove toaster.clear()}>Clear

); }; ReactDOM.render(, document.getElementById('root')); \`\`\` ## Using in class component \`\`\`jsx class AppClass extends React.Component { toaster; constructor(props) { super(props); this.state = { type: "info", placement: "topStart" }; } componentDidMount() { import("rsuite").then((modules) => { this.toaster = modules.toaster; }); } render() { const { type, placement } = this.state; const message = (

* * *

); return (

{message}

* * *

console.log("label", e)} style={{ width: 200 }} /> console.log("placement", e)} style={{ width: 200 }} /> this.toaster.push(message, { placement })}> Push this.toaster.remove()}>Remove this.toaster.clear()}>Clear

); } } \`\`\` ## react suite toaster live playground \[!\[Edit billowing-rain-dn9r2y\](https://codesandbox.io/static/img/play-codesandbox.svg)\](https://codesandbox.io/s/billowing-rain-dn9r2y?fontsize=14&hidenavigation=1&theme=dark)<iframe src="https://codesandbox.io/embed/billowing-rain-dn9r2y?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="billowing-rain-dn9r2y" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>