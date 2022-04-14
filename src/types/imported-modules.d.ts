declare module '*.png' {
  const imageURL: string;
  export default imageURL;
}

declare module '*.jpg' {
  const imageURL: string;
  export default imageURL;
}

declare module '*.less' {
  const styles: { [className: string]: string };
  export default styles;
}
