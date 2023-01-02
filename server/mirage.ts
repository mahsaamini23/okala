import users from "../data/users";
import { createServer, Model, Response } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import { User } from "types/model";
import { Products } from "types/model";
import { ProductsList} from "types/model";
import products from "../data/Categoryslider/CategorySlider";
// import { productList } from "../data/ProductList/productList";

const makeServer = ({ environment = "test" } = {}) => {
  return createServer<{ user: ModelDefinition<Omit<User, "id">> , product: ModelDefinition<Products> , productList: ModelDefinition<ProductsList>}, any> ({
    environment,
    models: {
      user: Model,
      product: Model,
      productList:Model,
    },
    seeds(server) {
      server.loadFixtures();
    },
    fixtures: {
      users,
      products,
      productLists : [{
        idProduct:2313,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:0,
            3:0,
            4:4,
            5:4,
            average:2.4,
        },

        // image: img2311,
        price:400500,
        order:3,
        entity:true,
        title:'تخم مرِغ ۹ عددی زرده طلایی',
        date:1401/9/24,
        purches:12,
    },],
    },
    routes() {
      this.passthrough('/_next/static/development/_devPagesManifest.json');
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

      this.get(
        "/ProductsList",
        (schema, request) => {
          if (request.queryParams.error) return new Response(400);
          return {
            message: "Fetch productsList success",
            data: request.queryParams.empty ? [] : schema.all("productList").models,
          };
        },
        { timing: 100 }
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
