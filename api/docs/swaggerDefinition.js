module.exports.swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Data Warehouse',
    version: '1.0.0',
    description:
        `This is a Full Stack web app that allows CRUD operations for a marketing campaing over the contacts they have and their info.
        You can find 4 pages: Users, Contacts, Companies, Regions / Cities. Users can only be seen by 'Admin' users who can manage
        the access of other users. The other pages can be seen by admins and basic users who managed the rest of the information.
        For accessing the app, you have to log in with your registered email and password. Also you can logout.`,
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    }
  },
  servers: [
    {
      url: 'http://localhost:5000/',
      description: 'Development server',
    },
    {
      url: 'https://data-clients-warehouse/',
      description: 'Production server'
  },
  ]
}