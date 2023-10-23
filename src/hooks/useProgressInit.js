import { LOCATION_1_ID, QUESTION_ID, screens } from '../screens.config';
import { useState } from 'react';
import { SEX_TYPES } from '../constants';

const INITIAL_PROGRESS = {
    name: '',
    sex: SEX_TYPES.male,
    isFinished: false,
    pickedObjects: [],
    isFinalCorrect: false,
};

export function useProgressInit() {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    const screen = screens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        if (nextScreenIndex > screens.length - 1) return;

        setCurrentScreenIndex(nextScreenIndex);
    };

    const prev = () => {
        const prevScreenIndex = currentScreenIndex - 1;
        if (prevScreenIndex < LOCATION_1_ID) return;

        setCurrentScreenIndex(prevScreenIndex);
    };

    const setToQuestionScreen = () => {
        setCurrentScreenIndex(QUESTION_ID);
    };

    const resetToFirstLocation = () => {
        setCurrentScreenIndex(LOCATION_1_ID);
        setProgress(prevProgress => ({...prevProgress, isFinished: true}));
    };

    const updateProgress = (newProgress) => {
        setProgress(prevProgress => ({...prevProgress, ...newProgress}));
    };

    const setPickedObjects = (picked) => {
        setProgress(prevProgress => ({
            ...prevProgress,
            pickedObjects: prevProgress.pickedObjects.includes(picked) ?
                prevProgress.pickedObjects : [...prevProgress.pickedObjects, picked]
        }));
    };

    return {
        progress,
        screen,
        sex: progress.sex,
        pickedObjects: progress.pickedObjects,
        isFinished: progress.isFinished,
        resetToFirstLocation,
        setToQuestionScreen,
        setPickedObjects,
        next,
        prev,
        updateProgress,
    };
}