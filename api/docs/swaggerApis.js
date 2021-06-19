/* ---------- Login  */
/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - name: login
 *     description: User login with email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/loginUser'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 */

/* ---------- Users  */
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - name: users
 *     description: Render users page with all the users. Only for admins.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/xml
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *       403:
 *         description: Only admins can see users.
 *       404:
 *         description: Not found.
 *   post:
 *     tags:
 *       - name: users
 *     description: Creates a new user. Only for admins.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/user'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *       403:
 *         description: Only admins can create users.
 *       404:
 *         description: Not found.
 * /users/:id:
 *   put:
 *     tags:
 *       - name: users
 *     description: Update user info. Only for admins.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/user'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *       403:
 *         description: Only admins can create users.
 *       404:
 *         description: Not found.
 *   delete:
 *     tags:
 *       - name: users
 *     description: Delete an user. Only for admins.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User id.
 *         type: string
 *       - in: header
 *         name: token
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *       403:
 *         description: Only admins can create users.
 *       404:
 *         description: Not found.
 * /users/all:
 *   get:
 *     tags:
 *       - name: users
 *     description: Get a json with all the users.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *       403:
 *         description: Only admins can see users.
 */

/* ---------- Regions-Cities  */
/**
 * @swagger
 * /regions-cities:
 *   get:
 *     tags:
 *       - name: regions-cities
 *     description: Render region-cities view with all regions, countries and cities.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/xml
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /regions-cities/regions:
 *   get:
 *     tags:
 *       - name: regions-cities
 *     description: Get all regions, countries and cities.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   post:
 *     tags:
 *       - name: regions-cities
 *     description: Creates a new region.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/region'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /regions-cities/regions/:id:
 *   put:
 *     tags:
 *       - name: regions-cities
 *     description: Update a region.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/region'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   delete:
 *     tags:
 *       - name: regions-cities
 *     description: Update a region.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/region'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /regions-cities/countries:
 *   get:
 *     tags:
 *       - name: regions-cities
 *     description: Get all countries.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /regions/:regionId/countries:
 *   post:
 *     tags:
 *       - name: regions-cities
 *     description: Creates a new country.
 *     parameters:
 *       - in: path
 *         name: regionId
 *         required: true
 *         description: Region id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/country'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /regions-cities/countries/:id:
 *   put:
 *     tags:
 *       - name: regions-cities
 *     description: Update a country.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/country'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   delete:
 *     tags:
 *       - name: regions-cities
 *     description: Delete a country.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/country'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /regions-cities/cities:
 *   get:
 *     tags:
 *       - name: regions-cities
 *     description: Get all cities.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /regions/:countryId/cities:
 *   post:
 *     tags:
 *       - name: regions-cities
 *     description: Creates a new city.
 *     parameters:
 *       - in: path
 *         name: countryId
 *         required: true
 *         description: Country id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/city'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /regions-cities/cities/:id:
 *   put:
 *     tags:
 *       - name: regions-cities
 *     description: Update a city.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: City id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/city'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   delete:
 *     tags:
 *       - name: regions-cities
 *     description: Delete a city.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: City id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/city'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 */

/* ---------- Companies  */
/**
 * @swagger
 * /companies:
 *   get:
 *     tags:
 *       - name: companies
 *     description: Render companies view.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/xml
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 *   post:
 *     tags:
 *       - name: companies
 *     description: Creates a new company.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/company'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /companies/all:
 *   get:
 *     tags:
 *       - name: companies
 *     description: Get all companies.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /companies/:id:
 *   put:
 *     tags:
 *       - name: companies
 *     description: Update a company.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Company id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/company'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   delete:
 *     tags:
 *       - name: companies
 *     description: Delete a company.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Company id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/company'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 */

/* ---------- Contacts  */
/**
 * @swagger
 * /contacts:
 *   get:
 *     tags:
 *       - name: contacts
 *     description: Render contacts view.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/xml
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 *   post:
 *     tags:
 *       - name: contacts
 *     description: Creates a new contact.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/contact'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 * /contacts/all:
 *   get:
 *     tags:
 *       - name: contacts
 *     description: Get all contacts.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /contacts/:id:
 *   put:
 *     tags:
 *       - name: contacts
 *     description: Update a contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/contact'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: OK.
 *       400:
 *         description: Validation errors.
 *   delete:
 *     tags:
 *       - name: contacts
 *     description: Delete a contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Contact id.
 *         type: string
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/contact'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 * /contacts/delete-many:
 *   delete:
 *     tags:
 *       - name: contacts
 *     description: Delete a many selected contacts.
 *     parameters:
 *       - in: header
 *         name: jwt
 *         required: true
 *         description: Cookie with the jwt of the user logged.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/contact'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 */

/* ---------- Schemas */
/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The user name.
 *           example: Michael
 *         lname:
 *           type: string
 *           description: The user last name.
 *           example: Jordan
 *         email:
 *            type: string
 *            description: The email of the user. It is unique.
 *            example: mjordan@gmail.com
 *         password:
 *            type: string
 *            description: The password of the user.
 *            example: MyPassword123
 *         profile:
 *            type: string
 *            description: The profile of the user.
 *            enum:
 *              - 'basic'
 *              - 'admin'
 *     loginUser:
 *       type: object
 *       properties:
 *         email:
 *            type: string
 *            description: The email of the user. It is unique.
 *            example: mjordan@gmail.com
 *         password:
 *            type: string
 *            description: The password of the user.
 *            example: MyPassword123
 *     region:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The region name. It is unique.
 *           example: Sudamérica
 *         countries:
 *           type: array
 *           items:
 *              type: ObjectId
 *           description: Array of countries ids that belongs to this region.
 *           example: ['id_1', 'id_2']
 *     country:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The country name.
 *           example: Argentina
 *         cities:
 *           type: array
 *           items:
 *              type: ObjectId
 *           description: Array of cities ids that belongs to this country.
 *           example: ['id_1', 'id_2']
 *         region_id:
 *           type: ObjectId
 *           description: The region id to which this country belongs.
 *           example: id_1
 *     city:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The city name.
 *           example: Buenos Aires
 *         country_id:
 *           type: ObjectId
 *           description: The country id to which this city belongs.
 *           example: id_1
 *     company:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The company name.
 *           example: Globant
 *         address:
 *           type: string
 *           description: The company address.
 *           example: Calle Falsa 123
 *         email:
 *            type: string
 *            description: The email of the company. It is unique.
 *            example: hola@globant.com
 *         phone:
 *            type: string
 *            description: The phone of the company.
 *            example: 222-222222-222
 *         region:
 *            type: ObjectId
 *            description: The region id to which the company belongs.
 *            example: id_1
 *         country:
 *            type: ObjectId
 *            description: The country id to which the company belongs.
 *            example: id_1
 *         city:
 *            type: ObjectId
 *            description: The city id to which the company belongs.
 *            example: id_1
 *     contact:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Unique id in the DB.
 *         name:
 *           type: string
 *           description: The contact name.
 *           example: Elon
 *         lname:
 *           type: string
 *           description: The contact last name.
 *           example: Musk
 *         email:
 *            type: string
 *            description: The email of the contact. It is unique.
 *            example: elon.musk@gmail.com
 *         company:
 *            type: ObjectId
 *            description: The company id to which the contact belongs.
 *            example: id_1
 *         position:
 *           type: string
 *           description: The position/role of the contact.
 *           example: Web Developer
 *         region:
 *            type: ObjectId
 *            description: The region id to which the contact belongs.
 *            example: id_1
 *         country:
 *            type: ObjectId
 *            description: The country id to which the contact belongs.
 *            example: id_1
 *         city:
 *            type: ObjectId
 *            description: The city id to which the contact belongs.
 *            example: id_1
 *         address:
 *           type: string
 *           description: The contact address.
 *           example: Calle Falsa 123
 *         interest:
 *           type: number
 *           description: The contact interest (%) about the campaing.
 *           enum:
 *             - 0
 *             - 25
 *             - 50
 *             - 75
 *             - 100
 *           example: 25
 *         contact_channels:
 *           type: array
 *           items:
 *              type: object
 *           description: Array of contact channels related to the contact.
 *           $ref: '#/components/schemas/contactChannel'
 *     contactChannel:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The contact channel name.
 *           enum:
 *             - Whatsapp
 *             - Facebook
 *             - Instagram
 *             - Twitter
 *           example: Twitter
 *         user_account:
 *           type: string
 *           description: The contact account of that channel.
 *           example: /elonmusk123
 *         preference:
 *           type: string
 *           description: The contact's preference about that contact channel.
 *           enum:
 *             - Canal favorito
 *             - Sin preferencia
 *             - No molestar
 *           example: Canal favorito
 */