
// set theme (DARK/LIGHT)
export const setTheme = theme => ({
    type: 'SET_THEME',
    theme
});

// set description visibility (true/false)
export const setDescriptionVisibility = descriptionVisibility => ({
    type: 'SET_DESCRIPTION_VISIBILITY',
    descriptionVisibility
});

export const Themes = {
    DEFAULT: 'LIGHT',
    DARK: 'DARK',
    LIGHT: 'LIGHT'
}

export const DescriptionVisibility = {
    DEFAULT: false,
    VISIBLE: true,
    HIDDEN: false
}