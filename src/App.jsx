import React from 'react';

const ProductList = () => {
  return (
    <div className="p-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">С нами удобнее</h2>
      <div className="mb-4">
        <button className="px-4 py-2 mr-2 bg-gray-200 rounded hover:bg-gray-300">Без 1С-Товары</button>
        <button className="px-4 py-2 bg-green-100 rounded hover:bg-green-200">Вместе с 1С-Товары</button>
      </div>

      <div className="flex justify-between">
        <div className="w-5/12 bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Без 1С-Товары</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><input type="checkbox" /> Лишний товар складируется и не продается</li>
            <li className="mb-2"><input type="checkbox" /> Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</li>
            <li className="mb-2"><input type="checkbox" /> Лишний товар складируется и не продается</li>
            <li className="mb-2"><input type="checkbox" /> Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</li>
            <li className="mb-2"><input type="checkbox" /> Лишний товар складируется и не продается</li>
          </ul>
        </div>

        <div className="w-5/12 bg-green-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Вместе с 1С-Товары</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><input type="checkbox" checked /> Организованная система остатков</li>
            <li className="mb-2"><input type="checkbox" checked /> В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент</li>
            <li className="mb-2"><input type="checkbox" checked /> Распределенный прогноз спроса</li>
            <li className="mb-2"><input type="checkbox" checked /> В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент</li>
            <li className="mb-2"><input type="checkbox" checked /> Система контроля пущенных продаж</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 mr-2 bg-green-500 text-white rounded hover:bg-green-600">Популярные продукты</button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Все продукты</button>
      </div>
    </div>
  );
};

export default ProductList;