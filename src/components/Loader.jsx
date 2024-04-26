import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html className="!-translate-x-1/2 !-translate-y-1/2">
      <div className="border border-blue-400 border-t-transparent w-16 h-16 rounded-full animate-spin"></div>
    </Html>
  );
};

export default Loader;
