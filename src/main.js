import "./global.css";
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    siteName: "Tim Phillips, Designer",
    name: "Tim Phillips",
  },
});

export default app;
