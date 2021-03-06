import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the inital state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { type: actionTypes.AUTH_SUCCESS, idToken: 'some-token', userId: 'some-userId' })).toEqual({
            token: 'some-token',
            userId: 'some-userId',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should result in error upon failed login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { type: actionTypes.AUTH_FAIL, error: 'fail login' })).toEqual({
            token: null,
            userId: null,
            error: 'fail login',
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should be loading upon start', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { type: actionTypes.AUTH_START })).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: true,
            authRedirectPath: '/'
        })
    })

    it('should not change state upon logout since token, expirationDate and userId is removed from localStorage not state', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { type: actionTypes.AUTH_LOGOUT })).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
});