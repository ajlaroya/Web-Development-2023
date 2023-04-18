const ProductDescription = ({ description, title, variants, options }) => {
  const markup = { __html: description };
  const colourCount = Object.keys(options[0].values).length;
  console.log(options[0].values);

  return (
    <div className="flex flex-col md:w-1/2">
      {/* Product info */}
      <div className="flex flex-wrap justify-between pt-2 border-t gap-y-4">
        <h1 itemProp="name" className="relative">
          {title}
        </h1>
        <p>{colourCount} colours</p>
      </div>
      {/* Product SKU */}
      <div className="mt-auto">
        {/* Flipper */}
        <div className="relative overflow-hidden flex text-[130px] tracking-tight">
          QKC
        </div>
      </div>

      {/* Accordion */}
      <div className="border-t">
        {/* Colors */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex cursor-pointer bg-transparent transition w-full text-left py-4 justify-between"
        >
          <span aria-hidden="true">Colours</span>
          <span>-​</span>
        </button>
        <div
          aria-hidden="true"
          className="max-h-[80px] relative overflow-hidden border-b transition"
        >
          <div className="mb-5">
            <div className="flex mb-0 gap-4 w-full">
              {options[0].values.map((item, index) => (
                <div key={index}>
                  {/* <input
                    type="radio"
                    className="block basis-1/3 grow shrink overflow-hidden absolute w-[1px] h-[1px] whitespace-nowrap"
                  /> */}
                  <label className="bg-black ring-[#1d1d1d] grow flex items-center rounded-lg ring-1 ring-inset text-center transition py-2 px-4 basis-1/3 justify-center text-xs md:text-sm cursor-pointer hover:ring-white duration-300 ease-in-out">
                    {item.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Description */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex cursor-pointer bg-transparent transition w-full text-left py-5 justify-between border-b"
        >
          <span aria-hidden="true">Description</span>
          <span>+​</span>
        </button>
        {/* <div dangerouslySetInnerHTML={markup} className="border-b pb-5" /> */}
        {/* Shipping */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex cursor-pointer bg-transparent transition w-full text-left py-5 justify-between border-b"
        >
          <span aria-hidden="true">Shipping</span>
          <span>+​</span>
        </button>
        {/* <div
        aria-hidden="true"
        className="max-h-full relative overflow-hidden border-b transition"
      >
        <div className="mb-5">
          <table className=" table w-full border-spacing-[2px] border-gray-200 mb-[-20px]">
            <tbody className="table-row-group align-middle">
              <tr className="table-row">
                <th
                  width="20%"
                  className="table-cell pr-4 py-2 text-left align-top w-32"
                >
                  Dimensions
                </th>
                <td className="table-cell py-2">
                  6000 × 4000 px (72 dpi)
                </td>
              </tr>
              <tr className="table-row">
                <th className="table-cell pr-4 py-2 text-left align-top w-32">
                  File Size
                </th>
                <td className="table-cell py-2">approx. 150 MB</td>
              </tr>
              <tr>
                <th className="table-cell pr-4 py-2 text-left align-top w-32">
                  Format
                </th>
                <td className="table-cell py-2">Adobe PSD File</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      </div>
      {/* Button group */}
      <div className="flex mt-5 gap-5">
        <button
          type="button"
          className="cursor-pointer basis-1/2 items-center grow shrink justify-center py-4 px-6 rounded-xl bg-white text-black ring-white hover:bg-[#1d1d1d] hover:ring ring-inset hover:text-white transition duration-300 ease-in-out"
        >
          Add to Cart{" "}
          <span className="whitespace-nowrap">
            <span itemProp="price">(${variants[0].price.amount})</span>
          </span>
        </button>
        <button
          type="button"
          className="cursor-pointer basis-1/2 items-center grow shrink justify-center py-4 px-6 bg-[#1d1d1d] rounded-xl ring-white hover:bg-black hover:ring ring-inset hover:text-white transition duration-200"
        >
          Get Bundle <span className="whitespace-nowrap">($0)</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
