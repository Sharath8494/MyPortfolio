import ElectricBackground from "./ElectricBackground";
import ThreeDLogo from "./ThreeDLogo";
import SVGOverlay from "./SVGOverlay";
import HackerText from "./HackerText";

export default function LogoShowcase() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#000" }}>
      <ElectricBackground />
      <ThreeDLogo />
      <SVGOverlay />
      <HackerText />
    </div>
  );
}
