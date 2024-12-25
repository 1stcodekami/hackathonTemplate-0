import React from "react";
import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/components/ui/separator";
import { PRODUCTS } from "@/app/lib/constants";

export default async function ProductDetailPage({
  params,
}: {
  params: {
    product_id: string;
  };
}) {
  // Await the params to access product_id
  const { product_id } = await params;

  // Find the product based on product_id
  const product = PRODUCTS.find((item) => item.id === product_id);

  // If the product is not found, you might want to handle that case
  if (!product) {
    return <div>Product not found</div>; // You can customize this message or redirect
  }

  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection
        product_id={product_id}
        productTitle={product?.title || "Product"}
      />
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={product_id} />
      </div>

      <div className="my-[41px]">
        <Separator className="border border-[#D9D9D9]" />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection />
      </div>

      <div className="my-[41px]">
        <Separator className="border border-[#D9D9D9]" />
      </div>
      
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>
    </div>
  );
}