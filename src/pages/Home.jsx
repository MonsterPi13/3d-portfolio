import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader } from "../components";
import { ForestHouse, Programmer, Sky } from "../models";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className="relative w-full h-screen">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`w-full h-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Programmer
            rotation={[-Math.PI / 2, 0, 1.4]}
            scale={0.13}
            position={[0, -0.63, 3.75]}
            isRotating={isRotating}
          />
          <ForestHouse
            position={[0.5, -1.8, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[28, 28, 28]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={() => {}}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
