import EditBanner from "./editBanner";
import EditHeader from "./editHeader";
import EditProduct from "./editProduct";

const Admin: React.FC = () => {
  return (
    <div>
      <h1 className="text-center m-1">Admin Area</h1>
      <EditHeader />
      <EditBanner />
      <EditProduct />
    </div>
  );
}

export default Admin;