import { DefaultTheme } from 'styled-components';

/**
 * CAUTION: Some unrelated elements/components may depend on certain colors below.
 * When altering the values below, ensure that it is only for the element you want and search for all of that color's uses throughout the codebase.
 */

export const lightTheme: DefaultTheme = {
  theme: 'light',
  text: ['#141414', '#454545', '#7a7a7a'], // [Primary, Secondary, lighter secondary]
  background: '#FFFFFF', // White background
  surface: ['#FFFFFF', '#FFFFFF'], // All surfaces are white
  banner: '#f5f5f5', // For slightly grey surfaces
  border: '#ededed', // Used in borders (calendar, and between list items)
  select: '#FFFFFF', // Background color for react-select
  select_hover: 'rgba(70, 143, 242, 0.3)', // Blueish tint to use on hover
  multivalue: 'hsl(0,0%,90%)', // Multivalue background-color used in react-select
  hidden: '#b9b8b8', // Color to use when course is hidden
  disabled: 'rgb(242, 242, 242)', // Disabled color for react-select
  button_hover: 'rgb(250, 250, 250)', // Button hover color
  button_active: 'rgb(240, 240, 240)', // Button active color (when pressed)
  icon: 'rgb(204, 204, 204)', // Icon color
  icon_focus: 'rgb(102, 102, 102)', // Icon focus color
  rating_alpha: 1, // Rating bubble's opacity
  primary: '#468ff2', // Primary color (blue)
  primary_light: 'rgba(70, 143, 242, 0.15)', // Primary color (lighter blue)
  primary_hover: '#007bff', // Primary hover color (dark blue)
  row_odd: '#f9f9f9', // Odd row background color
  trans_dur: '0.35s', // Transition duration
};
export const darkTheme: DefaultTheme = {
  theme: 'dark',
  text: ['#FAFAFA', '#dbdbdb', '#bababa'], // [Primary, Secondary, darker secondary]
  background: '#121212', // darkest color used in background
  surface: ['#242424', '#363636'], // [Primary, Secondary] secondary is lighter and goes on top
  banner: '#363636', // Used when light mode needs to be greyish. Otherwise, same as secondary surface
  border: '#303030', // Used in borders (calendar, and between list items)
  select: '#303030', // Background color for react-select
  select_hover: 'rgba(68, 100, 145, 0.75)', // Blueish tint to use on hover
  multivalue: '#4d4d4d', // Multivalue background-color used in react-select
  hidden: '#4d4d4d', // Color to use when course is hidden
  disabled: 'rgba(242, 242, 242, 0.1)', // Disabled color for react-select
  button_hover: 'rgba(255, 255, 255, 0.02)', // Button hover color
  button_active: 'rgba(255, 255, 255, 0.05)', // Button active color (when pressed)
  icon: 'rgb(102, 102, 102)', // Icon color
  icon_focus: 'rgb(204, 204, 204)', // Icon focus color
  rating_alpha: 0.75, // Rating bubble's opacity
  primary: '#61adff', // Primary color (blue)
  primary_light: 'rgba(68, 100, 145, 0.25)', // Primary color (lighter blue)
  primary_hover: '#007bff', // Primary hover color (blue)
  row_odd: '#202020', // Odd row background color
  trans_dur: '0.35s', // Transition duration
};
