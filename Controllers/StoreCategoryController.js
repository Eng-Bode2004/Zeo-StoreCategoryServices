const StoreCategoryService = require("../services/StoreCategoriesServices");

class StoreCategoryController {
    async createStoreCategory(req, res) {
        try {
            const {name, description, icon} = req.body;
            if(!name || !description || !icon) {
                res.status(400).send({
                    status: 'Failed',
                    message: 'Please enter All Fields Required!'
                });
            }
            const shopCategoryData = {name, description, icon};
            const newShopCategory = await StoreCategoryService.createStoreCategory(shopCategoryData);
            res.status(200).send({
                status: 'Success',
                message: 'Shop Type created successfully!',
                ShopCategory: newShopCategory,

            });
        }
        catch (error){
            res.status(400).send({
                status: 'Failed',
                message: error.message
            })
        }
    }


    async getAllStoreCategories(req, res) {
        try {
            const storeTypes = await StoreCategoryService.getAllStoreCategories();
            res.status(200).send({
                status: 'Success',
                message: 'Shop Type list successfully!',
                StoreTypes: storeTypes,
            })
        }
        catch (error){
            res.status(400).send({
                status: 'Failed',
                error: error.message
            })
        }
    }

    async getCategoriesByIds(req, res) {
        try {
            const { categoryIds } = req.body; // Expect array of ObjectIds

            if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
                return res.status(400).send({
                    status: 'Failed',
                    message: 'Please provide a non-empty array of categoryIds'
                });
            }

            const categories = await StoreCategoryService.getCategoriesByIds(categoryIds);

            res.status(200).send({
                status: 'Success',
                message: 'Categories fetched successfully',
                categories
            });
        } catch (error) {
            res.status(400).send({
                status: 'Failed',
                message: error.message
            });
        }
    }


}
module.exports = new StoreCategoryController;