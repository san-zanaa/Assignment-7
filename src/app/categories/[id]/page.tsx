import Cards from '@/components/Price Cards/Cards';
import React from 'react';

interface Product {
    id: number;
    image: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

interface Category {
    id: string
    slug: string
    nameBn: string
    icon: string
}

const CategoryProducts = async ({params }: { params: Promise<{ id: string }>}) => {
    const { id } = await params
    const categoryResponse = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${id}`)
    const category: Category = await categoryResponse.json();

    const productsResponse = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const allProducts: Product[] = await productsResponse.json();
    const products = allProducts.filter(
        (product) => product.category === id)


    return (
        <div>
            <div className='p-8'>
                <div className="flex items-center gap-2 p-5 bg-white border border-gray-300 rounded-xl">
                    <div className="w-12 h-12 bg-[#f3f7f3] rounded-2xl flex items-center justify-center text-4xl">
                        {category.icon}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">
                            {category.nameBn}
                        </h2>
                        <p className="text-sm text-gray-600">
                            মোট{" "}
                            {products.length.toLocaleString("bn-BD")}
                            টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-8'>
                <div className="bg-white border border-gray-300 rounded-xl">
                    <div className="flex gap-2 p-5">
                        <span className="text-lg text-gray-700">সাজান</span>
                        <button className="flex items-center gap-2 rounded-xl w-fit h-fit py-1 px-2 border border-gray-300">
                            <span className='text-gray-700'>ডিফল্ট</span>
                            <span className="text-xl text-gray-600">⮟</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-8 mt-6">
                <p className="text-gray-600">
                    মোট{" "}
                    {products.length.toLocaleString("bn-BD")}
                    টি পণ্য দেখানো হচ্ছে
                </p>
            </div>

            <div className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Cards
                            key={product.id}
                            product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;