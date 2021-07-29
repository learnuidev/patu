// import kavoomLib from "./lib/kaboom";

// window.kavoomLib = kavoomLib;
const kaboom = config => {
  if (config) {
    return window.kaboom(config);
    // return kavoomLib(config);
  }
  return window.kaboom();

  // return window.goog.math.clamp(1, 2, 3);
};

export default kaboom;
