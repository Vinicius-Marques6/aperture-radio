/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useState } from "react";
import { useGLTF, PositionalAudio } from "@react-three/drei";

export default function Model(props) {
  const [ready, setReady] = useState(false);

	const { nodes, materials } = useGLTF("/aperture-radio/radio2.glb");
	return (
		<group
			{...props}
			dispose={null}
			onClick={(e) => {
				ready ? setReady(false) : setReady(true);
			}}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_2.geometry}
				material={materials.Radio}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_3.geometry}
				material={materials.Shell}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_4.geometry}
				material={materials.Base}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_5.geometry}
				material={materials.Button}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_6.geometry}
				material={materials.Antenna}
			/>
			{ready ? (
				<>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Radio_Radio_Screen_0_7.geometry}
						material={materials.Light}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Radio_Radio_Screen_0_1.geometry}
						material={materials.Radio_Screen}
					/>
				</>
			) : (
				<>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Radio_Radio_Screen_0_10.geometry}
						material={materials.Light_Off}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Radio_Radio_Screen_0_11.geometry}
						material={materials.Radio_Screen_Off}
					/>
				</>
			)}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_8.geometry}
				material={materials.Radio_Grid}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Radio_Radio_Screen_0_9.geometry}
				material={materials.Button_Rifled}
			/>
			<group>
				{ready && (
					<PositionalAudio
						url="/aperture-radio/Still alive Radio.mp3"
						autoplay
						distance={3}
						loop
					/>
				)}
			</group>
		</group>
	);
}

useGLTF.preload("/aperture-radio/radio2.glb");