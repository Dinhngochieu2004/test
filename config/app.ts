export default {
    app:{
        port: process.env.SERVER_PORT || 8001,
        prefixApiVersion:  process.env.PREFIX_API_VERSION || "/api/v1",
    }
}