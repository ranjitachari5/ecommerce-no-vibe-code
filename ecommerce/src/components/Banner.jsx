import banner from "../assets/banner.jpg"
function Banner(){

    return(
        <>
       <div className="w-full">
        <img className="object-cover" src={banner}></img>
        </div>
        </>
    );
}
export default Banner;