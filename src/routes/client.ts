import { Router, } from "express";
import crypto from "crypto";
import { Client } from "../models/client";

const generateApiKey = (): string => {
  return crypto.randomBytes(16).toString("hex");
};

const router = Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "El nombre del cliente es obligatorio." });
  const newClient = Client.create({name, apiKey: generateApiKey()});

  return res.status(201).json(newClient);
});

export default router;