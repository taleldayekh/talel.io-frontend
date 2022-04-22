import {
  FooterViewProps,
  FooterElements,
} from 'src/views/FooterView/interfaces';
import styles from 'src/views/FooterView/styles/styles.module.css';

const FooterView = ({ addElementRef }: FooterViewProps): JSX.Element => {
  return (
    <div
      id={FooterElements.footer}
      className={styles.footer}
      ref={(el) => addElementRef(el, FooterElements.footer)}
    >
      Footer content goes here
    </div>
  );
};

export default FooterView;
