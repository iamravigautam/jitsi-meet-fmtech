import { IStateful } from '../base/app/types';
import {
    MEETING_TITLE,
    WAITING_AREA_TEXT,
    WELCOME_PAGE_ENABLED,
    BACK_BUTTON_HANDLER,
    DIRECT_JOIN_MEETING_ENABLED,
    STD_BITRATE,
    MIN_BITRATE,
    MAX_BITRATE,
    LOBY_TITLE,
    LOBY_DESCRIPTION,
    END_MEETING_OPTIONS,
    MODERATOR_OPTION,
    CUSTOM_LOADER_OPTIONS,
} from "../base/flags/constants";
import { getFeatureFlag } from '../base/flags/functions';
import { toState } from '../base/redux/functions';


/**
 * Determines whether the {@code WelcomePage} is enabled.
 *
 * @param {IStateful} stateful - The redux state or {@link getState}
 * function.
 * @returns {boolean} If the {@code WelcomePage} is enabled by the app, then
 * {@code true}; otherwise, {@code false}.
 */
export function isWelcomePageEnabled(stateful: IStateful) {
    if (navigator.product === 'ReactNative') {
        return getFeatureFlag(stateful, WELCOME_PAGE_ENABLED, false);
    }

    const config = toState(stateful)['features/base/config'];

    return !config.welcomePage?.disabled;
}

/**
 * Returns the configured custom URL (if any) to redirect to instead of the normal landing page.
 *
 * @param {IStateful} stateful - The redux state or {@link getState}.
 * @returns {string} - The custom URL.
 */
export function getCustomLandingPageURL(stateful: IStateful) {
    return toState(stateful)['features/base/config'].welcomePage?.customUrl;
}


export function isDirectJoinMeetingEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, DIRECT_JOIN_MEETING_ENABLED, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.directJoinMeeting?.disabled;
}

export function isModeratorOptionEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, MODERATOR_OPTION, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.moderatorOptionHandler?.disabled;
}

export function isBackButtonHandlerEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, BACK_BUTTON_HANDLER, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.backButtonHandler?.disabled;
}

export function isEndMeetingOptionsHandlerEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, END_MEETING_OPTIONS, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.endMeetingOptionsHandler?.disabled;
}

export function isCustomLoaderShowHandlerEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, CUSTOM_LOADER_OPTIONS, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.customLoaderShowHandler?.disabled;
}

// set waiting area text

export function isWaitingAreaTextEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, WAITING_AREA_TEXT, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.TextForWaitingArea?.disabled;
    // return toState(stateful)['features/base/config'].TextForWaitingArea?.waitingText;
}

// set meeting title

export function isMeetingTitleEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, MEETING_TITLE, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.TextForMeetingTitle?.disabled;
}

// set loby title
export function isLobyTitleTextEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, LOBY_TITLE, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.TextForLobyTitle?.disabled;
}

// set loby description
export function isLobyDescriptionTextEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, LOBY_DESCRIPTION, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.TextForLobyDescription?.disabled;
}

// set Min bitrate
export function isMinBitrateEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, MIN_BITRATE, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.minBitrateValue?.disabled;
}

// set Std bitrate
export function isStdBitrateEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, STD_BITRATE, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.stdBitrateValue?.disabled;
}

// set max bitrate
export function isMaxBitrateEnabled(stateful: IStateful) {
    if (navigator.product === "ReactNative") {
        return getFeatureFlag(stateful, MAX_BITRATE, false);
    }

    const config = toState(stateful)["features/base/config"];

    return !config.maxBitrateValue?.disabled;
}
