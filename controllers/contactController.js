import asyncHandler from "express-async-handler";
import contactModel from "../models/contactSchema.js";

const getContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.find();
  res.status(200).json(contact);
});

const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(403);
    throw new Error("Please fill all the fields");
  } else {
    const contact = await contactModel.create({
      name: name,
      email: email,
      phone: phone,
    });
    res.status(200).json(contact);
  }
});

const putContact = asyncHandler(async (req, res) => {
  res.send(`contact is updated with id ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.send("deleted");
});

export { getContact, postContact, putContact, deleteContact };
