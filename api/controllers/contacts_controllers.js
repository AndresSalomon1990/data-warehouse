const Contact = require('../../models/Contact');

// handle create contact errors
const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { name: '', lname: '', email: '', position: '', company: '', region: '', country: '', city: '', address: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = 'This email already exist.';
    return errors; // not necesary to check other errors
  };

  // validation error
  if (err.message.includes('user validation failed')) {
    // destructure the 'properties' property of error object, where you can find details about the error
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  };

  return errors;
};

/* Get the contacts page */
const contacts_get = async (req, res) => {
  try {
    res.status(200).render('contacts', { title: 'Contacts' });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* Get all contacts */
const contacts_get_all = async (req, res) => {
  try {
    const contacts = await Contact.find().populate('company').populate('region').populate('country').populate('city').exec();
    res.status(200).json(contacts);
  } catch (err) {
    console.log(err);
    res.status(404).json({ Error: err });
  };
};

/* Handle contacts creation */
const contacts_post = async (req, res) => {
  const contactObj = {
    name: req.body.name,
    lname: req.body.lname,
    email: req.body.email,
    company: req.body.company,
    position: req.body.position,
    region: req.body.region,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    interest: req.body.interest,
    contact_channels: []
  };
  
  const contactChannels = ['Whatsapp', 'Facebook', 'Instagram', 'Twitter'];
  let i = 0;
  for (i; i < contactChannels.length; i++) {
    if (!req.body[`userAccount${contactChannels[i]}`]) continue; // avoid pushing if there isn't an account

    const channel = {
      name: req.body[`contactChannel${contactChannels[i]}`],
      user_account: req.body[`userAccount${contactChannels[i]}`],
      preference: req.body[`preference${contactChannels[i]}`]
    };

    contactObj.contact_channels.push(channel);
  };
  
  try {
    const contact = await Contact.create(contactObj);
    res.status(201).json({ contact: contact });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle contacts update */
const contacts_put = async (req, res) => {
  const id = req.params.id;
  const contactChannels = ['Whatsapp', 'Facebook', 'Instagram', 'Twitter'];
  
  try {
    const oldContact = await Contact.findById(id);

    oldContact.name = req.body.name;
    oldContact.lname = req.body.lname;
    oldContact.email = req.body.email;
    oldContact.company = req.body.company;
    oldContact.position = req.body.position;
    oldContact.region = req.body.region;
    oldContact.country = req.body.country;
    oldContact.city = req.body.city;
    oldContact.address = req.body.address;
    oldContact.interest = req.body.interest;
    oldContact.contact_channels = [];

    let i = 0;
    for (i; i < contactChannels.length; i++) {
      if (!req.body[`userAccount${contactChannels[i]}`]) continue; // avoid pushing if there isn't an account

      const channel = {
        name: req.body[`contactChannel${contactChannels[i]}`],
        user_account: req.body[`userAccount${contactChannels[i]}`],
        preference: req.body[`preference${contactChannels[i]}`]
      };

      oldContact.contact_channels.push(channel);
    };

    const newContact = await oldContact.save();
    res.status(201).json({ contact: newContact._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle deleting a contact */
const contacts_delete = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedContact = await Contact.findOneAndDelete({ _id: id });
    res.status(200).json({ contact: deletedContact._id });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* Handle deleting many contacts */
const contacts_delete_many = async (req, res) => {
  const {ids} = req.body;

  try {
    const deletedContacts = await Contact.deleteMany({ _id: { $in: ids } });
    console.log(deletedContacts);
    res.status(200).json({ contacts: deletedContacts });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

module.exports = {
  contacts_get,
  contacts_get_all,
  contacts_post,
  contacts_put,
  contacts_delete,
  contacts_delete_many
};