import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ["product", "quantity", "user"],
    },
  },
  fields: {
    // TODO: Custom Label
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: "Product" }),
    user: relationship({ ref: "User.cart" }),
  },
});
