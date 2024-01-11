import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Chaussures from "./components/chaussures";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kxHUPbKD2FtZrdRyrKS7dk",
      token: "6iexg6DL33ZjweowO6meDLZucPOMoS6zafwja1M2y2AvaFQ48Qv5cuqL1qNOgDZbGXuRvEguQ1IXFyaT7Cg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// ...

PLASMIC.registerComponent(Chaussures, {
  name: 'Chaussures',
  props: {

  }
});
// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
