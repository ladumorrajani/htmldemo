import { GlobeKitView, Icosphere } from "./globekit.esm.js";

const apiKey = gk_eb8cef449934d3357e1fe5b400483440a90febeb08bd29ff4195b47cecb62cd256401fbc6978f81f50a5b3a15a158588d569c8cc349f86d8fe37096c952b446c;
const options = {
  apiKey: apiKey,
  wasmPath: gkweb_bg.wasm,
};

this.gkview = new GlobeKitView(canvas, options);

this.icosphere = new Icosphere('disk-3.png');

this.gkview.addDrawable(this.icosphere, () => {
  this.gkview.startDrawing();
});