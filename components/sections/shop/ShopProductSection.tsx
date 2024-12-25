'use client';

import { PRODUCTS } from "@/app/lib/constants";
import { useRouter } from "next/navigation";

interface ShopProductSectionProps {
  itemCount: number; // Number of products to display
}

function ShopProductSection({ itemCount }: ShopProductSectionProps) {
  const router = useRouter();

  // Limit the number of products displayed based on itemCount
  const visibleProducts = PRODUCTS.slice(0, itemCount);

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <section>
      <div className="grid grid-cols-1 font-poppins md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[46px]">
        {visibleProducts.map((item, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleProductClick(item.id)}
          >
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto" />
            <h3 className="font-normal text-base">{item.title}</h3>
            <p>{item.description}</p>
            <p className="text-black font-semibold text-2xl">Rs. {item.price}.00</p>
            {item.otherPrice && <p className="line-through">{item.otherPrice}</p>}
            {item.typeValue && <span className="badge">{item.typeValue}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopProductSection;
