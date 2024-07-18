import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div>
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default ProductPage;
