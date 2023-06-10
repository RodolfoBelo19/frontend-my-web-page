import { DropDown } from "@/presentation/components/utils/Dropdown";

const EditHeader: React.FC = () => {
  return (
    <DropDown 
      title_dropdown="Header" 
      title_input="Name logo"
      placeholder_input="example: my logo"
      is_image
      is_text_input
    />
  );
};

export default EditHeader;
