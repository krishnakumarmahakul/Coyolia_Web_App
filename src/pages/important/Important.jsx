import { Outlet } from 'react-router-dom';
import styles from './Important.module.css'
const Important = () => {
  return (
    <div  className={styles.xx}>
      {/* Your important page content */}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default Important;