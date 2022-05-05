import {
  FooterViewProps,
  FooterElements,
} from 'src/views/FooterView/interfaces';
import footerViewStyles from 'src/views/FooterView/styles/footerView.styles.module.css';

const FooterView = ({ footerRef }: FooterViewProps): JSX.Element => {
  return (
    <div
      id={FooterElements.footer}
      className={footerViewStyles.footer}
      ref={footerRef}
    ></div>
  );
};

export default FooterView;
