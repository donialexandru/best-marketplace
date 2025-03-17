import { body } from "express-validator";

export const registerUserValidation = () => {
  return [
    body("name").notEmpty().withMessage("Name is required").trim().escape(),

    body("email")
      .notEmpty()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};

export const signinUserValidation = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Please provide a valid email")
      .normalizeEmail(),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};
