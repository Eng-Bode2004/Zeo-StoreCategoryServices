const StoreCategoryModel = require("../Models/StoreCategory");

class StoreCategoryService {
    async createStoreCategory(storeCategoryData) {
        try {
            const {name, description, icon} = storeCategoryData;
            if (!name || !description || !icon) {
                return Promise.reject(new Error("Please enter All Fields Required!"));
            }

            // Check if Shop Type already created
            const existType = await StoreCategoryModel.findOne({name});
            if (existType) {
                return Promise.reject(new Error("Shop already exist"));
            }

            const newStoreType = await StoreCategoryModel.create({
                name,
                description,
                icon
            });
            return newStoreType;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getAllStoreCategories() {
        return StoreCategoryModel.find();
    }


    async getCategoriesByIds(categoryIds) {
        if (!categoryIds || categoryIds.length === 0) {
            return [];
        }

        return StoreCategoryModel.find({ _id: { $in: categoryIds } });
    }


}


module.exports = new StoreCategoryService();