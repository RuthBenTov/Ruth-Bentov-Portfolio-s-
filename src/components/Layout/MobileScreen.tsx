import { FC } from "react";

interface mobileScreenProps {
  switchForLaptop: () => void;
}
const MobileScreen: FC<mobileScreenProps> = ({ switchForLaptop }) => {
  return (
    <div>
      <h4>This site is not yet optimized for mobile.</h4>
      <p>Want to watch anyway?</p>
      <button
        onClick={() => {
          switchForLaptop();
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          window.open("about:blank", "_self");
          window.close();
        }}
      >
        No
      </button>
    </div>
  );
};

export default MobileScreen;
