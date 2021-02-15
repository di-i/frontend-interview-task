import { colors } from '../../constants/colors';

const Helpers = {};

Helpers.getTypeButton = function (status) {
  switch (status) {
    case 'Online':
    case 'Paused':
    case 'Stopped':
      return 'primary';
    case 'Draft':
      return 'secondary';
    default:
      return 'primary';
  }
};

Helpers.getTextButton = function (status) {
  switch (status) {
    case 'Online':
    case 'Paused':
    case 'Stopped':
      return 'Results';
    case 'Draft':
      return 'Finalize';
    default:
      return 'Results';
  }
};

Helpers.getColorStatus = function (status) {
  switch (status) {
    case 'Online':
      return colors.statusGreen;
    case 'Paused':
      return colors.statusOrange;
    case 'Stopped':
      return colors.statusRed;
    case 'Draft':
      return colors.fontMain;
    default:
      return colors.fontMain;
  }
};

Helpers.getColorRowBorder = function (siteId) {
  switch (siteId) {
    case 1:
      return colors.borderIndianRed;
    case 2:
      return colors.borderMediumPurple;
    case 3:
      return colors.borderLavender;
    default:
      return colors.borderIndianRed;
  }
};

Helpers.getPathLink = function (status, id) {
  let page = Helpers.getTextButton(status).toLowerCase();
  let path = `/${page}/${id}`;
  return path;
};

Helpers.titleCase = function (string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default Helpers;
