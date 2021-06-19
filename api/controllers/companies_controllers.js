const Company = require('../../models/Company');

// handle create contact errors
const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { name: '', address: '', email: '', phone: '', region: '', country: '', city: '' };

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

/* Get the companies page */
const companies_get = async (req, res) => {
  try {
    res.status(200).render('companies', { title: 'Companies' });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* Get all companies */
const companies_get_all = async (req, res) => {
  try {
    const companies = await Company.find().populate('region').populate('country').populate('city').exec();
    res.status(200).json(companies);
  } catch (err) {
    console.log(err);
    res.status(404).json({ Error: err });
  };
};

/* Handle companies creation */
const companies_post = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json({ company: company });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle comapny update */
const companies_put = async (req, res) => {
  const id = req.params.id;

  try {
    const oldCompany = await Company.findById(id);
    oldCompany.name = req.body.name;
    oldCompany.address = req.body.address;
    oldCompany.email = req.body.email;
    oldCompany.phone = req.body.phone;
    oldCompany.region = req.body.region;
    oldCompany.country = req.body.country;
    oldCompany.city = req.body.city;

    const newCompany = await oldCompany.save();
    res.status(201).json({ company: newCompany._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle deleting a company */
const companies_delete = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedCompany = await Company.findOneAndDelete({ _id: id });
    res.status(200).json({ company: deletedCompany._id });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

module.exports = {
  companies_get,
  companies_get_all,
  companies_post,
  companies_put,
  companies_delete
};