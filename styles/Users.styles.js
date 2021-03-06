import { colorSettings } from './Colors.styles';
import { generalFont, generalFontBold } from './generalStyling.styles';

const cardStyles = {
  scrollView: [
    { flex: 1 },
    { backgroundColor: colorSettings.usersBackground },
    { borderRadius: 5 },
  ],
  header: [
    { fontSize: 15 },
    { textAlign: 'center' },
    { backgroundColor: 'transparent' },
    { margin: 0 },
    { borderColor: colorSettings.usersTitleBorder },
    { color: colorSettings.usersTitleText },
    { padding: 5 },
    { paddingBottom: 10 },
    { fontFamily: generalFontBold },
  ],
  opacity: [
    { backgroundColor: colorSettings.usersCardBackground },
    { marginRight: 10 },
    { marginLeft: 10 },
    { marginTop: 5 },
    { marginBottom: 5 },
    { borderRadius: 5 },
    { borderColor: colorSettings.usersCardBorder },
    { fontFamily: generalFont },
  ],
  inbox: [
    { backgroundColor: 'white' },
    { marginRight: 0 },
    { marginLeft: 0 },
    { marginTop: 1 },
    { marginBottom: 1 },
    { borderRadius: 10 },
    { borderColor: 'none' },
    { fontFamily: generalFont },
  ],
  events: [
    { backgroundColor: colorSettings.usersCardBackground },
    { marginRight: 10 },
    { marginLeft: 10 },
    { marginTop: 5 },
    { marginBottom: 5 },
    { borderRadius: 5 },
    { borderColor: colorSettings.usersCardBorder },
    { fontFamily: generalFont },
    { padding: 10 },
  ],
  eventTitle: [{ color: colorSettings.usersTitleText }, { fontWeight: 'bold' }],
  cardActionStyle: [{ color: colorSettings.usersCardAction, paddingBottom: 2 }, { fontSize: 17 }],
  cardContentStyle: [{ color: colorSettings.usersCardContent }, { paddingTop: 2 }],
};

export default cardStyles;
