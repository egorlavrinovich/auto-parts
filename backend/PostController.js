const Post = require("./Post");
const SELECTORS = require("./constants");
const puppeteer = require("puppeteer");

class PostController {
    async create(req, res) {
        try {
            console.log(req.body)
            const product = await Post.create(req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const query = { ...req.query };

            if (query.name) {
                query.name = { $regex: query.name, $options: 'i' };
            }
            if (query.price) {
                query.price = { $regex: query.price, $options: 'i' };
            }

            const products = await Post.find(query);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getById(req, res) {
        const {id} = req.params;
        if (!id) res.status(400).json({message: "Enter Id"});
        try {
            const product = await Post.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteById(req, res) {
        const {id} = req.params;
        if (!id) res.status(400).json({message: "Enter Id"});
        try {
            const product = await Post.findByIdAndDelete(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateById(req, res) {
        const {id} = req?.body;
        if (!id) res.status(400).json({message: "Enter Id"});
        try {
            const product = await Post.findByIdAndUpdate(id, req?.body, {
                new: true,
            });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async parseData(req, res) {
        const {URL_PARSE} = SELECTORS;
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        });

        const page = await browser.newPage();
        await page.goto(URL_PARSE);
        try {

            const data = await page.evaluate((selectors) => {

                const {NAME_SELECTOR, DESCRIPTION_SELECTOR, PRICE_SELECTOR} = selectors;

                const results = [...document.getElementsByClassName(NAME_SELECTOR)]
                    .map((item, index) => {
                        const priceElement = document.getElementsByClassName(PRICE_SELECTOR)[index];
                        const name = item.textContent.trim();
                        const price = priceElement ? priceElement.textContent.replaceAll('\n', '').trim() : null;
                        const imageElement = document.getElementsByClassName('catalog-form__image')[index];
                        const image = imageElement ? imageElement.src : null;
                        const descriptionElement = document.getElementsByClassName(DESCRIPTION_SELECTOR)[index];
                        const description = descriptionElement ? [...descriptionElement.children].map(child => child.textContent.trim()) : [];
                        return {name, price, image, description};
                    });

                return results;
            }, SELECTORS);
            await Post.deleteMany({})
            Promise.all(data?.map(async (item) => await Post.create(item)))
            await browser.close();
            res.status(200).json(data)
        } catch (e) {
            res.status(500).json(error);
        }
    }
}

module.exports = new PostController();
