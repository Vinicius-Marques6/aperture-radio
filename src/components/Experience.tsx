import { Environment, Grid, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Radio } from "../models/Radio";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

function Experience() { 
  return (
    <Canvas shadows camera={{ position: [-2, 2, 10], fov: 25 }}>
      <Stage environment="city" preset="rembrandt" intensity={0.5} shadows={{ type: 'accumulative', colorBlend: 2, intensity: Math.PI}} adjustCamera={false}>
        <Radio />
      </Stage>
      <Grid renderOrder={-1} position={[0, -1.3, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={'#ff8080'} fadeDistance={20} />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} />
      <EffectComposer>
        <Bloom luminanceThreshold={1} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
      <Environment preset="sunset" blur={0.8} />
    </Canvas>
  );
}

export default Experience;
