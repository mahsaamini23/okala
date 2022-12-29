import users from "../data/users";
import { createServer, Model, Response } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import { User } from "types/model";
import { Products } from "types/model";
import products from "../data/Categoryslider/CategorySlider";

const makeServer = () => {
  return createServer<{ user: ModelDefinition<Omit<User, "id">> , product: ModelDefinition<Products> }, any>({
    models: {
      user: Model,
      product: Model,
    },
    seeds(server) {
      server.loadFixtures();
    },
    fixtures: {
      users,
      products,
    },
    routes() {
      this.namespace = "api";
      
      this.get(
        "/CategoriesProducts",
        (schema, request) => {
          if (request.queryParams.error) return new Response(400);
          return {
            message: "Fetch products success",
            data: request.queryParams.empty ? [] : schema.all("product").models,
          };
        },
        { timing: 100 }
      );

      this.get(
        "/users",
        (schema, request) => {
          if (request.queryParams.error) return new Response(400);
          return {
            message: "Fetch users success",
            data: request.queryParams.empty ? [] : schema.all("user").models,
          };
        },
        { timing: 1000 }
      );

      this.post(
        "/users",
        (schema, request) => {
          const { fullName, email }: Omit<User, "id"> = JSON.parse(
            request.requestBody
          );

          if (!fullName || !email)
            return new Response(
              401,
              {},
              {
                message: "Invalid data",
              }
            );

          const emailPattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          const isValidEmail = emailPattern.test(email);

          if (!isValidEmail)
            return new Response(
              401,
              {},
              {
                message: "Invalid email",
              }
            );

          const payload: any = { fullName, email };
          schema.create("user", payload);

          return {
            message: "Store user success",
          };
        },
        { timing: 1500 }
      );

      this.delete(
        "/users/:id",
        (schema, request) => {
          const id = request.params.id;
          const user = schema.find("user", id);

          if (!user)
            return new Response(404, {}, { message: "User not found" });

          user.destroy();

          return {
            message: "Delete user successfully",
          };
        },
        { timing: 1500 }
      );
    },
  });
};

export default makeServer;
