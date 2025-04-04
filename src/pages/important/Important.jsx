import { Outlet, useLocation } from 'react-router-dom';
import styles from './Important.module.css';

const Important = () => {
  const location = useLocation();
  const isBaseRoute = location.pathname === '/important';

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {isBaseRoute && (
          <div className={styles.defaultContent}>
            <h3>Default Important Content</h3>
            <p>Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
             It has roots in a piece of classical Latin literature from 45 BC, 
             making it over 2000 years old. Richard McClintock, a Latin professor 
             at Hampden-Sydney College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage, and going through 
              the cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
             The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
             section 1.10.32.</p>
            <ul className={styles.featureList}>
              <li>Key point number one</li>
              <li>Essential detail number two</li>
              <li>Critical information number three</li>
            </ul>
            <p>This content will be replaced when you navigate to nested routes.</p>
          </div>
        )}

        {/* This will render nested route content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Important;