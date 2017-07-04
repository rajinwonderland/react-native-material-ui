import {
	MaterialIcons,
	FontAwesome,
	Zocial,
	Entypo,
	EvilIcons,
	SimpleLineIcons,
	MaterialCommunityIcons,
	Foundation,
	Octicons,
	Ionicons
} from '@expo/vector-icons';

export default type => {
  switch (type) {
    case 'zocial':
      return Zocial;
    case 'octicon':
      return Octicons;
    case 'material':
      return MaterialIcons;
    case 'material-community':
      return MaterialCommunityIcons;
    case 'ionicon':
      return Ionicons;
    case 'foundation':
      return Foundation;
    case 'evilicon':
      return EvilIcons;
    case 'entypo':
      return Entypo;
    case 'font-awesome':
      return FontAwesome;
    case 'simple-line-icon':
      return SimpleLineIcons;
    default:
      return MaterialIcon;
  }
};
