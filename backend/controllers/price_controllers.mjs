import { fetchPrice } from '../services/priceServices.mjs';

export const comparePrices = async (req, res) => {
    try {
        const { name } = req.params;

        const results = await fetchPrice(name);

        if (results.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        const stores = results.map(item =>({
            store: item.store,
            price: item.price
        }));


        res.json({
            product: name,
            stores: stores
        });

    } catch (error) {
        res.status(500).json({error: "Failed to compare prices" });

    }
};

