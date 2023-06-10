import { DropdownProduct } from "@/presentation/components/utils/Dropdown";

const EditProduct: React.FC = () => {
  return (
    <DropdownProduct 
      title_dropdown="Product"
      is_cover_image
      is_multiple_image
    />
  );
}

export default EditProduct;