import express, { Request, Response } from "express";

import { DataStore } from "../lib/services/disk";

export const geo = express.Router();

geo.get("/companies", async (req: Request, res: Response) => {
  try {
    const companies = await DataStore.companies();
    res.send(companies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
