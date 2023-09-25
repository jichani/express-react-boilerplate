import { Button, Checkbox, Input } from "@material-tailwind/react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "react-query";
import { userRegister } from "../api";

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  const { mutate, data } = useMutation(userRegister);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    mutate(data);
  };

  if (data?.ok === true) {
    navigate("/signin");
  }

  return (
    <Layout isHeader>
      <div className="pt-28 pb-12 w-full h-full flex flex-column justify-center items-center px-8 space-y-8">
        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-8">
            {/* 회원가입 */}
            <div>
              <h4 className="text-2xl font-semibold text-blue-gray">회원가입</h4>
              <p className="mt-1 text-gray-700">Enter your details to register</p>
            </div>
            <div className="space-y-4">
              {/* 이름 */}
              <div className="">
                <Input {...register("name")} type="text" label="이름" className="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }} />
              </div>

              {/* 아이디 */}
              <div>
                <Input {...register("username")} type="text" label="아이디" className="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }}></Input>
              </div>

              {/* 패스워드 */}
              <div className="relative w-full">
                <Input
                  {...register("password")}
                  type={passwordShown ? "text" : "password"}
                  label="패스워드"
                  className="pr-20 focus:ring-0"
                  containerProps={{ className: "min-w-0" }}
                />
                <div className=" absolute top-1/2 -translate-y-0 right-0">
                  <Button onClick={() => setPasswordShown(!passwordShown)} size="sm" className="absolute right-1 bottom-0 rounded w-16 my-1">
                    {passwordShown ? "hidden" : "show"}
                  </Button>
                </div>
              </div>

              {/* 모바일 */}
              <div>
                <Input {...register("mobile")} type="text" label="휴대폰번호" className="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }} />
              </div>

              {/* 이메일 */}
              <div>
                <Input {...register("email")} type="email" label="이메일" className="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }} />
              </div>

              {/* 개인정보동의 */}
              <div className=" flex items-center">
                <Checkbox id="checkbox" />
                <label className="cursor-pointer select-none font-light text-gray-700" htmlFor="checkbox">
                  개인정보동의
                </label>
              </div>

              {/* 버튼 */}
              <Button type="submit" color="red" fullWidth>
                회원가입
              </Button>
              <p>
                이미 아이디가 있다면?{" "}
                <Link to={"/signin"}>
                  <span>로그인</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
