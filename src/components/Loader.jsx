import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="border border-blue-400 border-t-transparent w-16 h-16 rounded-full animate-spin"></div>
    </Html>
  );
};

export default Loader;
