import Footer from "@/components/Footer";

export default function ProductDetail() {
  return (
    <main
      id="page"
      className="flex-col min-w-full pb-[19px] pt-[64px] md:pt-[80px] px-[19px] md:px-[26px] transition duration-300 ease-in overflow-x-hidden"
    >
      <div itemscope itemType="https://schema.org/Product">
        {/* Product image */}
        <div className="mb-5">
          <div className="overflow-hidden aspect-[3/2] rounded-xl relative z-10">
            <img
              alt="product"
              aria-hidden="true"
              fetchpriority="high"
              loading="eager"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl overflow-clip max-w-full aspect-auto align-middle transition ease-out"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3445134811.jpg"
            />
            <button type="button" className="self-start inline-block ">
              <img
                alt=""
                itemprop="image"
                fetchpriority="high"
                loading="eager"
                width="1500"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition ease-out max-w-full align-middle overflow-clip"
                src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3445134811.jpg"
              />
            </button>
          </div>
        </div>

        {/* Product description */}
        <div className="mb-5">
          {/* Product detail */}
          <div className="flex flex-wrap justify-between mb-4 pt-2 border-t gap-y-4">
            <h1 itemProp="name" className="relative">
              QKC Cozy Hoodie
            </h1>
            <p>4 colours</p>
          </div>
          {/* Product SKU */}
          <div className="mt-auto ml-[-0.03em]">
            {/* Flipper */}
            <div className="relative overflow-hidden flex mt-[-0.1em] mb-[-0.08em] text-[130px] slashed-zero">
              <div className="transition-[.6s] delay-75">Q</div>
              <div className="transition-[.6s] delay-100">K</div>
              <div className="transition-[.6s] delay-100">C</div>
            </div>
          </div>

          {/* Accordion */}
          <div className="mt-5 border-t">
            <button
              type="button"
              data-id=""
              aria-expanded="false"
              className="flex cursor-pointer bg-transparent transition w-full text-left py-4 justify-between"
            >
              <span aria-hidden="true">Angle​</span>
              <span>-​</span>
            </button>
            <div
              aria-hidden="true"
              className="max-h-[80px] relative overflow-hidden border-b transition"
            >
              <div className="mb-5">
                <div className="flex mb-0 gap-5 w-full">
                  <input
                    type="radio"
                    className="block basis-1/3 grow shrink overflow-hidden absolute w-[1px] h-[1px] whitespace-nowrap"
                  />
                  <label className="bg-[#1d1d1d] border-[#1d1d1d] grow flex items-center rounded-xl border text-center transition py-4 px-6 basis-1/3 justify-center cursor-pointer">
                    Bottom View
                  </label>

                  <input
                    type="radio"
                    className="block basis-1/3 grow shrink overflow-hidden absolute w-[1px] h-[1px] whitespace-nowrap"
                  />
                  <label className="border border-[#1d1d1d] grow flex items-center rounded-xl text-center transition py-4 px-6 basis-1/3 justify-center cursor-pointer">
                    Top View
                  </label>

                  <input
                    type="radio"
                    className="block basis-1/3 grow shrink overflow-hidden absolute w-[1px] h-[1px] whitespace-nowrap "
                  />
                  <label className="border border-[#1d1d1d] grow flex items-center rounded-xl text-center transition py-4 px-6 basis-1/3 justify-center cursor-pointer">
                    Floating
                  </label>
                  
                </div>
              </div>
            </div>
            <button type="button" data-id=":Ricm6:-4" aria-expanded="false">
              <span aria-hidden="true">​</span>
              <span>​</span>
            </button>
            <div aria-hidden="true">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th width="20%">Dimensions</th>
                      <td>6000 × 4000 px (72 dpi)</td>
                    </tr>
                    <tr>
                      <th>File Size</th>
                      <td>approx. 150 MB</td>
                    </tr>
                    <tr>
                      <th>Format</th>
                      <td>Adobe PSD File</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <button type="button">
              Get Bundle <span>($0)</span>
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden="true">
        <div>
          <button type="button" aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.4"
              height="31.4"
              viewBox="0 0 31.4 31.4"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
                d="m.7.7 30 30M30.7.7l-30 30"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div aria-hidden="true">
        <span>Zoom</span>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/001/">
                  <span>001</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="001 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484172521.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/002/">
                  <span>002</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="002 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484159401.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/003/">
                  <span>003</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="003 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484160059.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/004/">
                  <span>004</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="004 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3483122881.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/005/">
                  <span>005</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="005 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484165058.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/006/">
                  <span>006</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="006 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3458674758.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/007/">
                  <span>007</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="007 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3491273160.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/008/">
                  <span>008</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="008 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484159941.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/009/">
                  <span>009</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="009 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484162458.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <a href="/product/010/">
                  <span>010</span> <span></span>
                </a>
              </h2>
            </div>
            <img
              alt="010 undefined"
              loading="lazy"
              width="1500"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/80483016/3484169544.jpg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
