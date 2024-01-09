/* eslint-disable no-unused-vars */
import * as React from 'react';

export const WelcomeCard = React.lazy(() => import('./WelcomeCard'));
export const WishlistCardItem = React.lazy(() => import('./WishlistCardItem'));
export const ContentHeading = React.lazy(() => import('./ContentHeading'));
export const Loading = React.lazy(() => import('./Loading'));
export const SearchBar = React.lazy(() => import('./SearchBar'));
export const AddButton = React.lazy(() => import('./AddButton'));
export const DeleteButton = React.lazy(() => import('./DeleteButton'));
export const ArchiveButton = React.lazy(() => import('./ArchiveButton'));
export const PageNotFound = React.lazy(() => import('./PageNotFound'));
export const NoteCardItem = React.lazy(() => import('./NoteCardItem'));
export const NoteFormInput = React.lazy(() => import('./NoteFormInput'));
export const NoteDetail = React.lazy(() => import('./NoteDetail'));
export const LoginFormInput = React.lazy(() => import('./auth/LoginFormInput'));
export const RegisterFormInput = React.lazy(() =>
  import('./auth/RegisterFormInput')
);

export const Navigation = React.lazy(() => import('./Navigation'));

export const ToggleColorMode = React.lazy(() =>
  import('./button/ToggleColorMode')
);
export const ToggleLocaleLanguange = React.lazy(() =>
  import('./button/ToggleLocaleLanguage')
);
export const ToggleUserAccount = React.lazy(() =>
  import('./button/ToggleUserAccount')
);

export const MetaTagSeo = React.lazy(() => import('./MetaTagSeo'));
