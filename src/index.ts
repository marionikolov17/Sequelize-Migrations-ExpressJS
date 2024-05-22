import express from "express";

import User from "./database/models/user";

const app = express();

app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const createdUser = await User.create({
      first_name: "KING USER",
      last_name: "KING",
      username: "KINGUSER",
      email: "king@gmail.com",
      password: "1234",
      profile_picture_url: "/url/to/photo",
      languages: "1,2,3",
      user_role: 9,
      visible: 0
    });

    res.status(201).json({
        status: "success",
        data: {
            message: "Successfully created user!",
            user: createdUser
        }
    })
  } catch (err) {
    res.status(500).json({
        status: "error",
        data: {
            message: err.message
        }
    })
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
