import p5 from "p5";

new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.circle(p.width / 2, p.height / 2, 50);
  }
})