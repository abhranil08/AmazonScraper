import {db} from "../connect.js";
import bcrypt from "bcryptjs";

export const getUser = (req, res) => {
    //const userId = req.params.userId;
    const q = "SELECT * FROM users";
  
    db.query(q,(err, data) => {
      if (err) return res.status(500).json(err);
      const { password, ...info } = data[0];
      return res.json(data);
    });
  };
  