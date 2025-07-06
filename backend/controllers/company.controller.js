import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required..", success: false });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res
        .status(400)
        .json({ message: "You can't register same comapny.", success: false });
    }
    company = await Company({
      name: companyName,
      userId: req.id,
    });
    await company.save();
    return res
      .status(201)
      .json({
        message: "Company register successfully",
        company,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res
        .status(400)
        .json({ message: "Companies not found.", success: false });
    }
    return res.status(200).json({ companies, success: true });
  } catch (error) {
    console.log(error);
  }
};
// get company by id
export const getCompanyById = async (req, res) => {
  try {
    const comapnyId = req.params.id;
    const comapny = await Company.findById(comapnyId);
    if (!comapny) {
      return res
        .status(400)
        .json({ message: "Companies not found.", success: false });
    }
    return res
      .status(200)
      .json({ message: "Company found", comapny, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const updateData = {
      name,
      description,
      website,
      location,
    };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res
        .status(400)
        .json({ message: "Companies not found.", success: false });
    }
    return res
      .status(200)
      .json({
        message: "Company information updated  successfully.",
        status: true,
      });
  } catch (error) {
    console.log(error);
  }
};
