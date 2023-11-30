import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
/**
 * The list of application configurations.
 */
const appsConfigs: FuseRouteConfigsType = [AcademyAppConfig, CalendarAppConfig, ChatAppConfig, ContactsAppConfig];

export default appsConfigs;
