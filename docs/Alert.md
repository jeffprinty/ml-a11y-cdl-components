Alerts consist of two components, a wrapper (AlertContainer) which maintains the state and the Alert component which handles displaying Alert boxes. Alerts can be triggered with refs


```
<Alert ref={ a => this.alert = a } />
```
