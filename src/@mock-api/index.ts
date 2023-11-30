/* eslint-disable import/no-import-module-exports */
import history from '@history';
import mock from './mock';

// Import API modules
import './api/auth-api';
import './api/notifications-api';
import './api/mct-api';
import './api/academy-api';
import './api/calendar-api';
import './api/chat-api';
import './api/contacts-api';
import './api/countries-api';
// Pass all requests through the mock adapter
mock.onAny().passThrough();

// If the module is hot, redirect to the loading page and then back to the current page
if (module?.hot?.status() === 'apply') {
	const { pathname } = history.location;
	history.push('/loading');
	history.push({ pathname });
}
