import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { productRouter } from "./routers/product.router";
import helmet from "helmet";
import { handleError } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/product", productRouter);
app.use(handleError);
