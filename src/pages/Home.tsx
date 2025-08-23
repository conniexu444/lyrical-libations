import banner from "../assets/banner.png";

export default function Home() {
  return (
    <div>
      <div className="w-full py-10">
        <img
          src={banner}
          alt="Lyrical Libations banner"
          className="w-full h-auto max-h-[600px] object-cover"
        />
      </div>
    </div>
  );
}
