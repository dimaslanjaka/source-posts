---
title: How to use react suite toaster in reactjs
date: 2023-09-26T08:00:44.000Z
updated: 2023-11-18T11:47:50+07:00
tags:
  - react
  - javascript
  - typescript
categories:
  - programming
---

## React Hook "useToaster" cannot be called in a class component
> You cannot using `useToaster` in class component, use [`rsuite.toaster`](#using-in-class-component) instead.
>

## Using in function component
```tsx
import {
  Notification,
  useToaster,
  Placeholder,
  Uploader,
  ButtonToolbar,
  SelectPicker,
  Button
} from 'rsuite';

const App = () => {
  const [type, setType] = React.useState('info');
  const [placement, setPlacement] = React.useState('topStart');
  const toaster = useToaster();

  const message = (
    <Notification type={type} header={type} closable>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      <hr />
      <Uploader action="#" />
    </Notification>
  );

  return (
    <div>
      {message}
      <hr />
      <ButtonToolbar>
        <SelectPicker
          value={type}
          data={[
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' }
          ]}
          onChange={setType}
          style={{ width: 200 }}
        />
        <SelectPicker
          value={placement}
          data={[
            { label: 'topStart', value: 'topStart' },
            { label: 'topCenter', value: 'topCenter' },
            { label: 'topEnd', value: 'topEnd' },
            { label: 'bottomStart', value: 'bottomStart' },
            { label: 'bottomCenter', value: 'bottomCenter' },
            { label: 'bottomEnd', value: 'bottomEnd' }
          ]}
          onChange={setPlacement}
          style={{ width: 200 }}
        />
        <Button onClick={() => toaster.push(message, { placement })}>Push</Button>
        <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonToolbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Using in class component

```jsx
class AppClass extends React.Component {
  toaster;
  constructor(props) {
    super(props);
    this.state = {
      type: "info",
      placement: "topStart"
    };
  }

  componentDidMount() {
    import("rsuite").then((modules) => {
      this.toaster = modules.toaster;
    });
  }

  render() {
    const { type, placement } = this.state;
    const message = (
      <Notification type={type} header={type} closable>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
        <hr />
        <Uploader action="#" />
      </Notification>
    );

    return (
      <div>
        {message}
        <hr />
        <ButtonToolbar>
          <SelectPicker
            value={type}
            data={[
              { label: "info", value: "info" },
              { label: "success", value: "success" },
              { label: "warning", value: "warning" },
              { label: "error", value: "error" }
            ]}
            onChange={(e) => console.log("label", e)}
            style={{ width: 200 }}
          />
          <SelectPicker
            value={placement}
            data={[
              { label: "topStart", value: "topStart" },
              { label: "topCenter", value: "topCenter" },
              { label: "topEnd", value: "topEnd" },
              { label: "bottomStart", value: "bottomStart" },
              { label: "bottomCenter", value: "bottomCenter" },
              { label: "bottomEnd", value: "bottomEnd" }
            ]}
            onChange={(e) => console.log("placement", e)}
            style={{ width: 200 }}
          />
          <Button onClick={() => this.toaster.push(message, { placement })}>
            Push
          </Button>
          <Button onClick={() => this.toaster.remove()}>Remove</Button>
          <Button onClick={() => this.toaster.clear()}>Clear</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
```

## react suite toaster live playground

[![Edit billowing-rain-dn9r2y](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/billowing-rain-dn9r2y?fontsize=14&hidenavigation=1&theme=dark)

<iframe src="https://codesandbox.io/embed/billowing-rain-dn9r2y?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="billowing-rain-dn9r2y"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>