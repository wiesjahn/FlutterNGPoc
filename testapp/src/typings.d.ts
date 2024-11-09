interface Window {
  ActionChannel: {
    postMessage: (message: string) => void;
  };
}