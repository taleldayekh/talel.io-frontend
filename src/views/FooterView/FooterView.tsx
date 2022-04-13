import {
  FooterViewProps,
  FooterElements,
} from 'src/views/FooterView/interfaces';

const FooterView = ({ addElementRef }: FooterViewProps): JSX.Element => {
  return (
    <div
      id={FooterElements.footer}
      className="footer"
      ref={(el) => addElementRef(el, FooterElements.footer)}
    >
      This is the page footer
    </div>
  );
};

export default FooterView;
