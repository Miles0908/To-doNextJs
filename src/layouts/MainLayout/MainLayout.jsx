import Navbar from "@/components/Navbar";
import styles from "./MainLayout.module.scss";



const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
     
 
      {children}
    
      
    
    </div>
  );
};

export default MainLayout;
