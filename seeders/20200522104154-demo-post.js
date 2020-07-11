"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("post", [
      {
        title: "John",
        content: '{ name: "john Doe", wafer: { name: "jennete" } }',
        tag: "example tag",
        createdAt: new Date(),
        updatedAt: new Date(),
        admin_id: 1,
      },
    ])

    const posts = await queryInterface.sequelize.query(`SELECT id from POST;`)

    return await queryInterface.bulkInsert("picture", [
      {
        path: "/John.jpg",
        post_id: posts[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("picture", null, {})
    await queryInterface.bulkDelete("post", null, {})
  },
}
