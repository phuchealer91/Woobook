const Categories = require('../models/category.model')
const slugify = require('slugify')
var { validationResult } = require('express-validator')
module.exports.createCategory = async (req, res) => {
  const { name } = req.body
  const slug = slugify(name).toLowerCase()
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg })
    }
    const categoryExists = await Categories.findOne({ slug })
    if (categoryExists)
      return res.status(400).json({ error: 'Category already exists' })
    const newCategory = new Categories({
      name,
      slug,
    })
    await newCategory.save()
    return res.status(201).json({ category: newCategory })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
module.exports.getCategory = async (req, res) => {
  const { slug } = req.params
  try {
    const category = await Categories.findOne({ slug }).exec()
    if (!category) return res.status(400).json({ error: 'Category not found' })
    // get related products
    // const products = await Products.find({category}).populate('categories').exec()
    // return res.status(200).json({ category, products: { data: products } })
    return res.status(200).json({ category })
  } catch (error) {}
}
module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find().sort({ createdAt: -1 }).exec()
    if (!categories)
      return res.status(400).json({ error: 'Categories not found' })
    return res.status(200).json({ categories })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
module.exports.updateCategory = async (req, res) => {
  const { name } = req.body
  const { slug } = req.params
  const slugUpdate = slugify(name).toLowerCase()
  try {
    const category = await Categories.findOneAndUpdate(
      { slug: slug },
      { name, slug: slugUpdate },
      { new: true }
    )
    if (!category) return res.status(400).json({ error: 'Category not found' })
    return res.status(200).json({ category })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
module.exports.deleteCategory = async (req, res) => {
  const { slug } = req.params
  try {
    const categoryDeleted = await Categories.findOneAndDelete({
      slug: slug,
    })
    if (!categoryDeleted)
      return res.status(400).json({ error: 'Category not found' })
    return res
      .status(200)
      .json({ msg: `Delete ${categoryDeleted.name} success` })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
