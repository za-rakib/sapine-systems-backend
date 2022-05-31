const Client = require("../../models/Client");

const resolvers = {
  Query: {
    getAllClient: async () => {
      return await Client.find();
    },
  },

  Mutation: {
    //add client
    addClient: async (parent, args, context, info) => {
      const { name, number, email, status, source } = args.client;
      const client = await new Client({
        name,
        number,
        email,
        status,
        source,
      }).save();
      return client;
    },

    //update client
    updateClient: async (parent, args, context, info) => {
      const { id } = args;
      const { name, number, email, status, source } = args.client;
      const client = await Client.findByIdAndUpdate(
        id,
        {
          name,
          number,
          email,
          status,
          source,
        },
        { new: true }
      );
      return client;
    },
      //delete client
      deleteClient: async (parent, args, context, info) => {
        const { id } = args;
        await Client.findByIdAndDelete(id);
        return "Client Deleted";
      }
  },
};
module.exports = resolvers;
