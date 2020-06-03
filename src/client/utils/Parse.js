const ParseClient = require('parse')

ParseClient.initialize('123456A', '123456J')

ParseClient.serverURL = "http://dev.domain.com:1337/api/parse"

ParseClient.enableEncryptedUser()
ParseClient.secret =  'Test screct Key'

export const ParseClasses = {
    Product: ParseClient.Object.extend("Product")
}

export const handleParseError = e => {
    switch(e.code) {
        case PARSE_ERROR_CODES.OtherCause.code:
			console.log("ERROR " + PARSE_ERROR_CODES.OtherCause.code + " of " + PARSE_ERROR_CODES.OtherCause.name + " is an " + PARSE_ERROR_CODES.OtherCause.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InternalServerError.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InternalServerError.code + " of " + PARSE_ERROR_CODES.InternalServerError.name + " is an " + PARSE_ERROR_CODES.InternalServerError.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ConnectionFailed.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ConnectionFailed.code + " of " + PARSE_ERROR_CODES.ConnectionFailed.name + " is an " + PARSE_ERROR_CODES.ConnectionFailed.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ObjectNotFound.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ObjectNotFound.code + " of " + PARSE_ERROR_CODES.ObjectNotFound.name + " is an " + PARSE_ERROR_CODES.ObjectNotFound.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidQuery.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidQuery.code + " of " + PARSE_ERROR_CODES.InvalidQuery.name + " is an " + PARSE_ERROR_CODES.InvalidQuery.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidClassName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidClassName.code + " of " + PARSE_ERROR_CODES.InvalidClassName.name + " is an " + PARSE_ERROR_CODES.InvalidClassName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.MissingObjectId.code:
			console.log("ERROR " + PARSE_ERROR_CODES.MissingObjectId.code + " of " + PARSE_ERROR_CODES.MissingObjectId.name + " is an " + PARSE_ERROR_CODES.MissingObjectId.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidKeyName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidKeyName.code + " of " + PARSE_ERROR_CODES.InvalidKeyName.name + " is an " + PARSE_ERROR_CODES.InvalidKeyName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidPointer.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidPointer.code + " of " + PARSE_ERROR_CODES.InvalidPointer.name + " is an " + PARSE_ERROR_CODES.InvalidPointer.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidJSON.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidJSON.code + " of " + PARSE_ERROR_CODES.InvalidJSON.name + " is an " + PARSE_ERROR_CODES.InvalidJSON.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.CommandUnavailable.code:
			console.log("ERROR " + PARSE_ERROR_CODES.CommandUnavailable.code + " of " + PARSE_ERROR_CODES.CommandUnavailable.name + " is an " + PARSE_ERROR_CODES.CommandUnavailable.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.NotInitialized.code:
			console.log("ERROR " + PARSE_ERROR_CODES.NotInitialized.code + " of " + PARSE_ERROR_CODES.NotInitialized.name + " is an " + PARSE_ERROR_CODES.NotInitialized.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.IncorrectType.code:
			console.log("ERROR " + PARSE_ERROR_CODES.IncorrectType.code + " of " + PARSE_ERROR_CODES.IncorrectType.name + " is an " + PARSE_ERROR_CODES.IncorrectType.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidChannelName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidChannelName.code + " of " + PARSE_ERROR_CODES.InvalidChannelName.name + " is an " + PARSE_ERROR_CODES.InvalidChannelName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.PushMisconfigured.code:
			console.log("ERROR " + PARSE_ERROR_CODES.PushMisconfigured.code + " of " + PARSE_ERROR_CODES.PushMisconfigured.name + " is an " + PARSE_ERROR_CODES.PushMisconfigured.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ObjectTooLarge.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ObjectTooLarge.code + " of " + PARSE_ERROR_CODES.ObjectTooLarge.name + " is an " + PARSE_ERROR_CODES.ObjectTooLarge.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.OperationForbidden.code:
			console.log("ERROR " + PARSE_ERROR_CODES.OperationForbidden.code + " of " + PARSE_ERROR_CODES.OperationForbidden.name + " is an " + PARSE_ERROR_CODES.OperationForbidden.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.CacheMiss.code:
			console.log("ERROR " + PARSE_ERROR_CODES.CacheMiss.code + " of " + PARSE_ERROR_CODES.CacheMiss.name + " is an " + PARSE_ERROR_CODES.CacheMiss.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidNestedKey.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidNestedKey.code + " of " + PARSE_ERROR_CODES.InvalidNestedKey.name + " is an " + PARSE_ERROR_CODES.InvalidNestedKey.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidFileName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidFileName.code + " of " + PARSE_ERROR_CODES.InvalidFileName.name + " is an " + PARSE_ERROR_CODES.InvalidFileName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidACL.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidACL.code + " of " + PARSE_ERROR_CODES.InvalidACL.name + " is an " + PARSE_ERROR_CODES.InvalidACL.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.Timeout.code:
			console.log("ERROR " + PARSE_ERROR_CODES.Timeout.code + " of " + PARSE_ERROR_CODES.Timeout.name + " is an " + PARSE_ERROR_CODES.Timeout.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidEmailAddress.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidEmailAddress.code + " of " + PARSE_ERROR_CODES.InvalidEmailAddress.name + " is an " + PARSE_ERROR_CODES.InvalidEmailAddress.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.DuplicateValue.code:
			console.log("ERROR " + PARSE_ERROR_CODES.DuplicateValue.code + " of " + PARSE_ERROR_CODES.DuplicateValue.name + " is an " + PARSE_ERROR_CODES.DuplicateValue.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidRoleName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidRoleName.code + " of " + PARSE_ERROR_CODES.InvalidRoleName.name + " is an " + PARSE_ERROR_CODES.InvalidRoleName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ExceededQuota.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ExceededQuota.code + " of " + PARSE_ERROR_CODES.ExceededQuota.name + " is an " + PARSE_ERROR_CODES.ExceededQuota.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ScriptFailed.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ScriptFailed.code + " of " + PARSE_ERROR_CODES.ScriptFailed.name + " is an " + PARSE_ERROR_CODES.ScriptFailed.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.ValidationFailed.code:
			console.log("ERROR " + PARSE_ERROR_CODES.ValidationFailed.code + " of " + PARSE_ERROR_CODES.ValidationFailed.name + " is an " + PARSE_ERROR_CODES.ValidationFailed.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.FileDeleteFailed.code:
			console.log("ERROR " + PARSE_ERROR_CODES.FileDeleteFailed.code + " of " + PARSE_ERROR_CODES.FileDeleteFailed.name + " is an " + PARSE_ERROR_CODES.FileDeleteFailed.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.RequestLimitExceeded.code:
			console.log("ERROR " + PARSE_ERROR_CODES.RequestLimitExceeded.code + " of " + PARSE_ERROR_CODES.RequestLimitExceeded.name + " is an " + PARSE_ERROR_CODES.RequestLimitExceeded.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidEventName.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidEventName.code + " of " + PARSE_ERROR_CODES.InvalidEventName.name + " is an " + PARSE_ERROR_CODES.InvalidEventName.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.UsernameMissing.code:
			console.log("ERROR " + PARSE_ERROR_CODES.UsernameMissing.code + " of " + PARSE_ERROR_CODES.UsernameMissing.name + " is an " + PARSE_ERROR_CODES.UsernameMissing.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.PasswordMissing.code:
			console.log("ERROR " + PARSE_ERROR_CODES.PasswordMissing.code + " of " + PARSE_ERROR_CODES.PasswordMissing.name + " is an " + PARSE_ERROR_CODES.PasswordMissing.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.UsernameTaken.code:
			console.log("ERROR " + PARSE_ERROR_CODES.UsernameTaken.code + " of " + PARSE_ERROR_CODES.UsernameTaken.name + " is an " + PARSE_ERROR_CODES.UsernameTaken.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.EmailTaken.code:
			console.log("ERROR " + PARSE_ERROR_CODES.EmailTaken.code + " of " + PARSE_ERROR_CODES.EmailTaken.name + " is an " + PARSE_ERROR_CODES.EmailTaken.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.EmailMissing.code:
			console.log("ERROR " + PARSE_ERROR_CODES.EmailMissing.code + " of " + PARSE_ERROR_CODES.EmailMissing.name + " is an " + PARSE_ERROR_CODES.EmailMissing.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.EmailNotFound.code:
			console.log("ERROR " + PARSE_ERROR_CODES.EmailNotFound.code + " of " + PARSE_ERROR_CODES.EmailNotFound.name + " is an " + PARSE_ERROR_CODES.EmailNotFound.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.SessionMissing.code:
			console.log("ERROR " + PARSE_ERROR_CODES.SessionMissing.code + " of " + PARSE_ERROR_CODES.SessionMissing.name + " is an " + PARSE_ERROR_CODES.SessionMissing.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.MustCreateUserThroughSignup.code:
			console.log("ERROR " + PARSE_ERROR_CODES.MustCreateUserThroughSignup.code + " of " + PARSE_ERROR_CODES.MustCreateUserThroughSignup.name + " is an " + PARSE_ERROR_CODES.MustCreateUserThroughSignup.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.AccountAlreadyLinked.code:
			console.log("ERROR " + PARSE_ERROR_CODES.AccountAlreadyLinked.code + " of " + PARSE_ERROR_CODES.AccountAlreadyLinked.name + " is an " + PARSE_ERROR_CODES.AccountAlreadyLinked.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidSessionToken.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidSessionToken.code + " of " + PARSE_ERROR_CODES.InvalidSessionToken.name + " is an " + PARSE_ERROR_CODES.InvalidSessionToken.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.LinkedIdMissing.code:
			console.log("ERROR " + PARSE_ERROR_CODES.LinkedIdMissing.code + " of " + PARSE_ERROR_CODES.LinkedIdMissing.name + " is an " + PARSE_ERROR_CODES.LinkedIdMissing.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.InvalidLinkedSession.code:
			console.log("ERROR " + PARSE_ERROR_CODES.InvalidLinkedSession.code + " of " + PARSE_ERROR_CODES.InvalidLinkedSession.name + " is an " + PARSE_ERROR_CODES.InvalidLinkedSession.description + " => " + e.message);
			break;

        
        case PARSE_ERROR_CODES.UnsupportedService.code:
			console.log("ERROR " + PARSE_ERROR_CODES.UnsupportedService.code + " of " + PARSE_ERROR_CODES.UnsupportedService.name + " is an " + PARSE_ERROR_CODES.UnsupportedService.description + " => " + e.message);
			break;

    }
}

const PARSE_ERROR_CODES = {
    OtherCause: {
        code: -1,
        name: "OtherCause",
        description: "Error code indicating that an unknown error or an error unrelated to Parse occurred."
    },

    InternalServerError: {
            code: 1,
            name: "InternalServerError",
            description: "Error code indicating that something has gone wrong with the server. If you get this error code, it is Parse's fault. Please report the bug to https://parse.com/help.",
    },

    ConnectionFailed: {
            code: 100,
            name: "ConnectionFailed",
            description: "Error code indicating the connection to the Parse servers failed.",
    },

    ObjectNotFound: {
            code: 101,
            name: "ObjectNotFound",
            description: "Error code indicating the specified object doesn't exist.",
    },

    InvalidQuery: {
            code: 102,
            name: "InvalidQuery",
            description: "Error code indicating you tried to query with a datatype that doesn't support it, like exact matching an array or object.",
    },

    InvalidClassName: {
            code: 103,
            name: "InvalidClassName",
            description: "Error code indicating a missing or invalid classname. Classnames are case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the only valid characters.",
    },

    MissingObjectId: {
            code: 104,
            name: "MissingObjectId",
            description: "Error code indicating an unspecified object id.",
    },

    InvalidKeyName: {
            code: 105,
            name: "InvalidKeyName",
            description: "Error code indicating an invalid key name. Keys are case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the only valid characters.",
    },

    InvalidPointer: {
            code: 106,
            name: "InvalidPointer",
            description: "Error code indicating a malformed pointer. You should not see this unless you have been mucking about changing internal Parse code.",
    },

    InvalidJSON: {
            code: 107,
            name: "InvalidJSON",
            description: "Error code indicating that badly formed JSON was received upstream. This either indicates you have done something unusual with modifying how things encode to JSON, or the network is failing badly.",
    },

    CommandUnavailable: {
            code: 108,
            name: "CommandUnavailable",
            description: "Error code indicating that the feature you tried to access is only available internally for testing purposes.",
    },

    NotInitialized: {
            code: 109,
            name: "NotInitialized",
            description: "You must call Parse.initialize before using the Parse library.",
    },

    IncorrectType: {
            code: 111,
            name: "IncorrectType",
            description: "Error code indicating that a field was set to an inconsistent type.",
    },

    InvalidChannelName: {
            code: 112,
            name: "InvalidChannelName",
            description: "Error code indicating an invalid channel name. A channel name is either an empty string (the broadcast channel) or contains only a-zA-Z0-9_ characters and starts with a letter.",
    },

    PushMisconfigured: {
            code: 115,
            name: "PushMisconfigured",
            description: "Error code indicating that push is misconfigured.",
    },

    ObjectTooLarge: {
            code: 116,
            name: "ObjectTooLarge",
            description: "Error code indicating that the object is too large.",
    },

    OperationForbidden: {
            code: 119,
            name: "OperationForbidden",
            description: "Error code indicating that the operation isn't allowed for clients.",
    },

    CacheMiss: {
            code: 120,
            name: "CacheMiss",
            description: "Error code indicating the result was not found in the cache.",
    },

    InvalidNestedKey: {
            code: 121,
            name: "InvalidNestedKey",
            description: "Error code indicating that an invalid key was used in a nested JSONObject.",
    },

    InvalidFileName: {
            code: 122,
            name: "InvalidFileName",
            description: "Error code indicating that an invalid filename was used for ParseFile. A valid file name contains only a-zA-Z0-9_. characters and is between 1 and 128 characters.",
    },

    InvalidACL: {
            code: 123,
            name: "InvalidACL",
            description: "Error code indicating an invalid ACL was provided.",
    },

    Timeout: {
            code: 124,
            name: "Timeout",
            description: "Error code indicating that the request timed out on the server. Typically this indicates that the request is too expensive to run.",
    },

    InvalidEmailAddress: {
            code: 125,
            name: "InvalidEmailAddress",
            description: "Error code indicating that the email address was invalid.",
    },

    DuplicateValue: {
            code: 137,
            name: "DuplicateValue",
            description: "Error code indicating that a unique field was given a value that is already taken.",
    },

    InvalidRoleName: {
            code: 139,
            name: "InvalidRoleName",
            description: "Error code indicating that a role's name is invalid.",
    },

    ExceededQuota: {
            code: 140,
            name: "ExceededQuota",
            description: "Error code indicating that an application quota was exceeded. Upgrade to resolve.",
    },

    ScriptFailed: {
            code: 141,
            name: "ScriptFailed",
            description: "Error code indicating that a Cloud Code script failed.",
    },

    ValidationFailed: {
            code: 142,
            name: "ValidationFailed",
            description: "Error code indicating that a Cloud Code validation failed.",
    },

    FileDeleteFailed: {
            code: 153,
            name: "FileDeleteFailed",
            description: "Error code indicating that deleting a file failed.",
    },

    RequestLimitExceeded: {
            code: 155,
            name: "RequestLimitExceeded",
            description: "Error code indicating that the application has exceeded its request limit.",
    },

    InvalidEventName: {
            code: 160,
            name: "InvalidEventName",
            description: "Error code indicating that the provided event name is invalid.",
    },

    UsernameMissing: {
            code: 200,
            name: "UsernameMissing",
            description: "Error code indicating that the username is missing or empty.",
    },

    PasswordMissing: {
            code: 201,
            name: "PasswordMissing",
            description: "Error code indicating that the password is missing or empty.",
    },

    UsernameTaken: {
            code: 202,
            name: "UsernameTaken",
            description: "Error code indicating that the username has already been taken.",
    },

    EmailTaken: {
            code: 203,
            name: "EmailTaken",
            description: "Error code indicating that the email has already been taken.",
    },

    EmailMissing: {
            code: 204,
            name: "EmailMissing",
            description: "Error code indicating that the email is missing, but must be specified.",
    },

    EmailNotFound: {
            code: 205,
            name: "EmailNotFound",
            description: "Error code indicating that a user with the specified email was not found.",
    },

    SessionMissing: {
            code: 206,
            name: "SessionMissing",
            description: "Error code indicating that a user object without a valid session could not be altered.",
    },

    MustCreateUserThroughSignup: {
            code: 207,
            name: "MustCreateUserThroughSignup",
            description: "Error code indicating that a user can only be created through signup.",
    },

    AccountAlreadyLinked: {
            code: 208,
            name: "AccountAlreadyLinked",
            description: "Error code indicating that an an account being linked is already linked to another user.",
    },

    InvalidSessionToken: {
            code: 209,
            name: "InvalidSessionToken",
            description: "Error code indicating that the current session token is invalid.",
    },

    LinkedIdMissing: {
            code: 250,
            name: "LinkedIdMissing",
            description: "Error code indicating that a user cannot be linked to an account because that account's id could not be found.",
    },

    InvalidLinkedSession: {
            code: 251,
            name: "InvalidLinkedSession",
            description: "Error code indicating that a user with a linked (e.g. Facebook) account has an invalid session.",
    },

    UnsupportedService: {
            code: 252,
            name: "UnsupportedService",
            description: "Error code indicating that a service being linked (e.g. Facebook or Twitter) is unsupported.",
    }
}

export default ParseClient