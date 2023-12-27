import shoe from "../assets/shoe.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";

function Hero() {
  return (
    <div className="flex h-screen justify-center md:mt-10">
      {/* PRODUCT CONTAINER */}
      <div className="flex xxs:w-[90%] xxs:flex-col-reverse xxs:p-5 xxs:shadow-xl sm:w-[70%] sm:flex-row sm:p-0 sm:shadow-none">
        {/* PRODUCT DESCRIPTION */}
        <section className="select-none space-y-7 xxs:w-full sm:w-[55%] ">
          <h1 className="font-extrabold uppercase xxs:text-3xl sm:text-5xl lg:text-8xl">
            Your feet deserve the best
          </h1>
          <h3 className="font-semibold uppercase text-gray-600 lg:w-[70%]">
            Your feet deserve the best and we're here to help you with our
            shoes. Your feet deserve the best and we're here to help you with
            our shoes.
          </h3>

          <div className="space-x-4">
            <button className="bg-[#D01C28] px-4 py-1 text-lg text-white hover:bg-[#f52e3c]">
              Shop Now
            </button>
            <button className="border border-gray-500 px-4 py-1 text-lg hover:bg-gray-100">
              Category
            </button>
          </div>

          <div>
            <h4 className="text-gray-600">Also Available On</h4>
            <div className="mt-3 flex cursor-pointer flex-row gap-5">
              <img src={flipkart} alt="Flipkart" />
              <img src={amazon} alt="Amazon" />
            </div>
          </div>
        </section>

        {/* PRODUCT IMAGE */}
        <section className="xxs:w-full sm:w-[50%] sm:pt-20">
          <img src={shoe} alt="Product image" />
        </section>
      </div>
    </div>
  );
}

export default Hero;
