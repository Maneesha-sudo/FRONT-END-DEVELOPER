import { supabase } from "../config/supabaseClient.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

/* CREATE USER */
export const createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, age, role } = req.body;

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser)
      return res.status(409).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").insert([
      {
        name,
        email,
        password: hashedPassword,
        age,
        role,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

/* GET ALL USERS */
export const getUsers = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, role, created_at");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

/* GET USER BY ID */
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, role, created_at")
      .eq("id", id)
      .single();

    if (!data)
      return res.status(404).json({ message: "User not found" });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

/* UPDATE USER */
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("users")
      .update(req.body)
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "User updated successfully" });
  } catch (err) {
    next(err);
  }
};

/* DELETE USER */
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) throw error;

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};
