import Image from "next/image";
import { fetchTweet, Tweet } from 'react-tweet'


export default function Home() {
  return (
    <main>
      <div className="dark">
        <Tweet id="1828102935760547920" />
      </div>
    </main>
  );
}
