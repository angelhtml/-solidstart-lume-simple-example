import { onMount } from "solid-js";

export default function Home() {
  onMount(() => {
    import("lume").then((LUME) => {
      console.log(LUME);
      LUME.defineElements();

      box.rotation = (x, y, z) => [x, y + 1, z];
    });
  });

  return (
    <>
      <lume-scene webgl>
        <lume-ambient-light intensity="0.5"></lume-ambient-light>
        <lume-point-light
          color="white"
          align-point="0.5 0.5"
          position="0 0 300"
          size="0 0 0"
          cast-shadow="true"
          intensity="0.65"
        ></lume-point-light>

        <lume-box
        color="blue"
          id="box"
          size="100 100 100"
          align-point="0.5 0.5 0.5"
          mount-point="0.5 0.5 0.5"
        ></lume-box>
      </lume-scene>
    </>
  );
}