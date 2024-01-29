<script lang="ts">
  import { Maximize2 } from "lucide-svelte";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let UnityInstance: any;
  onMount(async () => {
    createUnityInstance(canvas, {
      arguments: [],
      dataUrl: "/assets/meth-tycoon/Build/meth-tycoon.data.unityweb",
      frameworkUrl: "/assets/meth-tycoon/Build/meth-tycoon.framework.js.unityweb",
      codeUrl: "/assets/meth-tycoon/Build/meth-tycoon.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Gigi",
      productName: "Meth Tycoon",
      productVersion: "1.0"
      // matchWebGLToCanvasSize: false // Uncomment this to separately control WebGL canvas render size and DOM element size.
      // devicePixelRatio: 1 // Uncomment this to override low DPI rendering on high DPI displays.
    })
      .then((unityInstance) => {
        UnityInstance = unityInstance;
      })
      .catch((message) => {
        console.error("Failed to load the game", message);
        indexedDB.deleteDatabase("/idbfs");
        localStorage.clear();
        sessionStorage.clear();
        caches.keys().then(function (names) {
          for (let name of names) caches.delete(name);
        });
        alert(message);
        window.location.reload();
      });
  });
</script>

<canvas bind:this={canvas} id="unity-canvas" class="mx-auto aspect-video h-auto w-full max-w-4xl rounded-lg bg-[#171717] focus-visible:border-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent" tabindex="-1" />
<div class="mt-2 flex items-center justify-center">
  <button
    class="mx-auto rounded-lg bg-neutral-950 p-2 text-neutral-100"
    on:click={() => {
      UnityInstance.SetFullscreen(1);
    }}
  >
    <Maximize2 />
  </button>
</div>
