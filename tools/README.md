# XUI React

An unofficial/3rd-party collection of XSplit themed React UI components primarily used to create XSplit Broadcaster plugins
that align with the current XSplit Broadcaster UX.

## Installation and usage

```bash
# installation
npm i @dcefram/xui-react
```

To use it, simply import the component that you would want to use

```javascript
import Button from '@dcefram/xui-react/components/Button';
```

## Why bother?

This 3rd party, **unofficial**, UI Library was conceived due to the lack of "zero friction" react libraries within the XSplit team.
The React UI library that I tried to use required me to **eject** a create-react-app project, which I do not want. Another used Polymer, which had all sorts of trouble when using in a React project.

This is my attempt to just create a component library that I would use while working on XSplit Plugins as a consultant.

All of the UI components here are made out of assumptions, based off of existing official plugins. I do not have an official
style guide to base it all off, but since there are a couple of official plugins already that has similar UI, it's easy to
just mimic their feel by just winging it.
