import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./components/PhaserGame";

function App() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  const currentScene = (scene: Phaser.Scene) => {
    // invoked on change scene
    if (!scene) return;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
    </div>
  );
}

export default App;
