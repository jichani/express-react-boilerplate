import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postJoin = async (req, res) => {
  const { username, name, mobile, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      name,
      mobile,
      email,
      password,
      auth: 2,
      createdAt: Date.now(),
    });
    return res.status(200).json({ ok: true, user })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, message: "에러가 발생했습니다." });
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ ok: false, message: "로그인에 실패했습니다!" });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(401).json({ ok: false, message: "로그인에 실패했습니다!!" })
  }

  try {
    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, { expiresIn: "24h" });

    res.cookie("accessToken", accessToken, {
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });
    return res.status(200).json({ ok: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, message: "로그인에 실패했습니다!!!" })
  }
};

export const loginSuccess = async (req, res) => {
  try {
    const { accessToken } = req.cookies;

    const tempData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
    const id = tempData?.id;

    const loggedInUser = await User.findById(id);
    const { username, mobile, email, name, auth } = loggedInUser;

    return res.status(200).json({
      ok: true,
      username,
      mobile,
      email,
      name,
      auth,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};