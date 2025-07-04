import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function ThreeDLogo() {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      camera={{ position: [0, 0, 10], fov: 70 }}
    >
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        SHARATH NAIK
      </Text>
    </Canvas>
  );
}
