export default function Home() {
  return (
    <>
      <video muted autoPlay loop className="w-full pointer-events-none">
        <source src="/video/home_video.webm" type="video/webm" />
      </video>
      <h1>Home</h1>
    </>
  );
}
