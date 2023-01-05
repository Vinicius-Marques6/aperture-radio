import { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SoftShadows, OrbitControls, PositionalAudio } from "@react-three/drei";
import Radio from "./components/Radio";
import "./App.css";

function App() {
	return (
		<div className="App">
      <div className="absolute right-0 top-0 bg-slate-800 bg-opacity-70 text-white p-6 m-3 rounded-lg font-sans">
        <ul>
          <li>Mouse esquerdo: rotacionar</li>
          <li>Mouse direito: mover-se</li>
          <li>Mouse do meio: zoom</li>
          <li>Clique com mouse esquerdo: interagir</li>
        </ul>
      </div>
			<div id="canvas-container" className="w-screen h-screen">
				<Canvas shadows camera={{ position: [-3, 2, 5], fov: 90 }}>
					<SoftShadows
						frustum={3.75}
						size={0.005}
						near={9.5}
						samples={20}
						rings={11}
					/>
					<fog attach="fog" args={["white", 0, 40]} />

					<Suspense fallback={null}>
							<Radio/>
						<mesh
							rotation={[-Math.PI / 2, 0, 0]}
							receiveShadow
							position={[0, -0.63, 0]}
						>
							<planeGeometry args={[1000, 1000]} />
							<meshStandardMaterial transparent opacity={0.4} />
						</mesh>
						<OrbitControls />
						<ambientLight intensity={0.5} />
						<directionalLight
							position={[2.5, 8, 5]}
							castShadow
							shadow-mapSize={1024}
							intensity={1}
						/>
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
}

export default App;
