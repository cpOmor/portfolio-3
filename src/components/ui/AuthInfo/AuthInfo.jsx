import { getUserInfo } from "../../../services/authServices";

const AuthInfo = () => {
  const userInfo = getUserInfo();
  console.log(userInfo);
  return (
    <div>
      <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">
        Shop Now
      </button>
    </div>
  );
};

export default AuthInfo;
