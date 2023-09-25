import { Button, Input } from "@material-tailwind/react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { userLogin } from "../api";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const { mutate, data } = useMutation(userLogin);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    mutate(data);
  };
  if (data?.ok === true) {
    navigate("/home");
  }

  return (
    <Layout isHeader>
      <div className="pt-28 pb-12 w-full h-full flex flex-column justify-center items-center px-8 space-y-8">
        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-8">
            {/* 회원가입 */}
            <div>
              <h4 className="text-2xl font-semibold text-blue-gray">로그인</h4>
            </div>
            <div className="space-y-4">
              {/* 아이디 */}
              <div>
                <Input {...register("username")} type="text" label="아이디" classNmae="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }}></Input>
              </div>

              {/* 패스워드 */}
              <div>
                <Input {...register("password")} type="password" label="패스워드" classNmae="pr-20 focus:ring-0" containerProps={{ className: "min-w-0" }} />
              </div>

              {/* 버튼 */}
              <Button type="submit" color="red" fullWidth>
                로그인
              </Button>
              <p>
                회원이 아니라면?{" "}
                <Link to={"/signup"}>
                  <span>회원가입</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
