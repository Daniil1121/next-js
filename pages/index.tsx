import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Steps from "../components/Steps/Steps";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import FAQ from "../components/FAQ/FAQ";
import Review from "../components/Review/Review";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

function Home() {
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const technologiesRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const reviewRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const starCanvas = useRef<HTMLCanvasElement | null>(null);
  const blurCanvas = useRef<HTMLCanvasElement | null>(null);

  const draw = () => {
    const ctxStar = starCanvas.current?.getContext("2d");
    const ctxBlur = blurCanvas.current?.getContext("2d");

    starCanvas.current!.width = ref.current?.clientWidth || window.innerWidth;
    starCanvas.current!.height =
      ref.current?.clientHeight || window.innerHeight;
    blurCanvas.current!.width = ref.current?.clientWidth || window.innerWidth;
    blurCanvas.current!.height =
      ref.current?.clientHeight || window.innerHeight;
    const dwawStar = () => {
      function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
      let scale = getRandomArbitrary(0.2, 0.8);
      let blur = getRandomArbitrary(0, 2);
      let prefX = starCanvas.current!.width * Math.random();
      let prefY = starCanvas.current!.height * Math.random();
      ctxStar?.beginPath();
      ctxStar?.moveTo(prefX + 51 * scale, prefY + 49 * scale);
      ctxStar?.lineTo(prefX + 41 * scale, prefY + 35 * scale);
      ctxStar?.lineTo(prefX + 39 * scale, prefY + 51 * scale);
      ctxStar?.lineTo(prefX + 24 * scale, prefY + 61 * scale);
      ctxStar?.lineTo(prefX + 41 * scale, prefY + 62 * scale);
      ctxStar?.lineTo(prefX + 51 * scale, prefY + 75 * scale);
      ctxStar?.lineTo(prefX + 53 * scale, prefY + 60 * scale);
      ctxStar?.lineTo(prefX + 67 * scale, prefY + 50 * scale);
      ctxStar!.strokeStyle = "#15BFFD";
      ctxStar?.stroke();
      ctxStar!.fillStyle = "#15BFFD";
      ctxStar?.fill();
      ctxStar!.filter = `blur(${blur}px)`;
      ctxStar?.closePath();
    };

    const dwawBlur = () => {
      let prefX = (blurCanvas.current!.width - 230) * Math.random();
      let prefY = (blurCanvas.current!.height - 230) * Math.random();
      ctxBlur?.beginPath();
      ctxBlur?.arc(prefX, prefY, 100, 0, Math.PI * 2);
      ctxBlur!.filter = "blur(130px)";
      ctxBlur!.strokeStyle = " #2A3E84";
      ctxBlur?.stroke();
      ctxBlur!.fillStyle = "#2A3E84";
      ctxBlur?.fill();
      ctxBlur?.closePath();
    };

    for (let i = 0; i < 15; i++) {
      dwawStar();
    }
    for (let i = 0; i < 10; i++) {
      dwawBlur();
    }
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <div ref={ref} className="App">
      <canvas className="star" ref={starCanvas}></canvas>
      <canvas className="blur" ref={blurCanvas}></canvas>
      <header>
        <Header
          technologiesRef={technologiesRef}
          stepsRef={stepsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          faqRef={faqRef}
        />
      </header>
      <main>
        <Hero contactRef={contactRef} />
        <About aboutRef={aboutRef} />
        <Technologies technologiesRef={technologiesRef} />
        <Steps stepsRef={stepsRef} />
        <FAQ faqRef={faqRef} />
        <Review reviewRef={reviewRef} />
        <Gallery galleryRef={galleryRef} />
        <Contact contactRef={contactRef} />
      </main>
      <footer>
        <Footer
          stepsRef={stepsRef}
          aboutRef={aboutRef}
          galleryRef={galleryRef}
          faqRef={faqRef}
          reviewRef={reviewRef}
        />
      </footer>
    </div>
  );
}

export default Home;
