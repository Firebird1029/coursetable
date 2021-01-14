import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  theme: 'light',
  text: ['#141414', '#454545', '#7a7a7a', '#bababa'], // [Primary, Secondary, lighter secondary, verrry light]
  background: '#FFFFFF', // White background
  surface: ['#FFFFFF', '#FFFFFF'], // All surfaces are white
  banner: '#f5f5f5', // For slightly grey surfaces
  border: '#ededed', // Used in borders (calendar, and between list items)
  select: '#FFFFFF', // Background color for react-select
  select_hover: '#e1edff', // Blueish tint to use on hover
  multivalue: 'hsl(0,0%,90%)', // Multivalue background-color used in react-select
  hidden: '#b9b8b8', // Color to use when course is hidden
  rating_alpha: 1, // Rating bubble's opacity
  primary: '#468ff2', // Primary color (blue)
  primary_hover: '#007bff', // Primary hover color (dark blue)
};
export const darkTheme: DefaultTheme = {
  theme: 'dark',
  text: ['#FAFAFA', '#dbdbdb', '#bababa', '#7a7a7a'], // [Primary, Secondary, darker secondary, verrry dark]
  background: '#121212', // darkest color used in background
  surface: ['#242424', '#363636'], // [Primary, Secondary] secondary is lighter and goes on top
  banner: '#363636', // Used when light mode needs to be greyish. Otherwise, same as secondary surface
  border: '#303030', // Used in borders (calendar, and between list items)
  select: '#303030', // Background color for react-select
  select_hover: 'rgba(68, 100, 145, 0.75)', // Blueish tint to use on hover
  multivalue: '#4d4d4d', // Multivalue background-color used in react-select
  hidden: '#4d4d4d', // Color to use when course is hidden
  rating_alpha: 0.75, // Rating bubble's opacity
  primary: '#61adff', // Primary color (lighter blue)
  primary_hover: '#007bff', // Primary hover color (blue)
};
