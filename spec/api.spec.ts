
import * as api from '../src/api';
import {Application} from '../src/Application';
import {ApplicationView} from '../src/ApplicationView';

describe('Public API', () => {
    it('Application', () => {
        expect(api.Application).toBe(Application);
    });

    it('ApplicationView', () => {
        expect(api.ApplicationView).toBe(ApplicationView);
    });
});
