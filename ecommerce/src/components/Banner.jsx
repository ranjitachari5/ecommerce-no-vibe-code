import banner from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="w-full aspect-auto">
      <img className="w-full h-full object-cover" src={banner} alt="Banner" />
    </div>
  );
}
export default Banner;
