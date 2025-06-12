import img from "../assets/react.svg";
const Post = () => {
  return (
    <li className="overflow-hidden rounded-lg">
      <div>
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fdhosting.pl%2Fpomoc%2Fwp-content%2Fuploads%2F2021%2F08%2Fstrona-glowna-Tailwind-2048x1024.png&sp=1749742783Tf92fbaeadf5f19e7e9ae4f61ade8ce23f6c44a12c491af8a9b92597dce9c9431"
          alt=""
        />
      </div>
      <div className="p-5 text-sm transition-colors bg-gray-100 cursor-pointer hover:bg-gray-50">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <div className="max-w-6">
              <img src={img} alt="" className="w-full" />
            </div>
            <p>Anonim</p>
          </div>
          <p>2/04/2025</p>
        </div>
        <h1 className="text-lg font-medium leading-12">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="font-normal text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis
          cum non reiciendis corporis, necessitatibus vero distinctio omnis
          consectetur sint!
        </p>
      </div>
    </li>
  );
};

export default Post;
