import User from "../models/user.js";

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