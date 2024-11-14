import { Nunito } from "next/font/google";
const font = Nunito({
  subsets: ["latin"],
});
export default function Home() {
  
  return (
    <div className={font.className} >
      <h1 >Hello World</h1>
    </div>
  );
}
