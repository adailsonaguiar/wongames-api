import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  background-color: #007eff;
  height: ${(props) => props.theme.main.sizes.leftMenu.height};

  .projectName {
    display: block;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    background-image: url(${Logo});
    background-position: center center;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
