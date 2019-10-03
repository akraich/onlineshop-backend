const { forwardTo } = require("prisma-binding");

const resolvers = {
  Query: {
    /*items: async (root, args, ctx, info) => {
      const items = await ctx.prisma.query.items(null, info);
      return items;
    }*/
    items: forwardTo("prisma")
  },
  Mutation: {
    createItem: async (root, args, ctx, info) => {
      const item = await ctx.prisma.mutation.createItem(
        { data: { ...args } },
        info
      );
      return item;
    }
  }
};

module.exports = resolvers;
