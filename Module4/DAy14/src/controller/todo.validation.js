import supabase from '../config/supabase.js';
import { validateSignup } from '../validations/user.validation.js';

export const signupUser = async (req, res) => {
  const error = validateSignup(req.body);
  if (error) return res.status(400).json({ message: error });

  const { name, email, password } = req.body;

  // Check duplicate email
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (existingUser) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  const { data, error: dbError } = await supabase
    .from('users')
    .insert([{ name, email, password }])
    .select();

  if (dbError) {
    return res.status(500).json({ message: dbError.message });
  }

  res.status(201).json({
    message: 'User registered successfully',
    user: data[0]
  });
};
