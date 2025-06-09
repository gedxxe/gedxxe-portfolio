import React from 'react';

export interface SocialLinkItem {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel: string;
}

export interface NavLinkItem {
  name: string;
  href: string; // Will be used as section ID selector e.g. "#about"
  id?: string; // Optional if section ID is derived from href
}

// It seems HeaderProps was not defined here, but was used in Header.tsx.
// Assuming it should be defined or App.tsx passes socialLinks correctly.
// Let's ensure it's defined if it was an oversight.
// If HeaderProps was defined directly in Header.tsx, this file might not need changes for that specifically,
// but for consistency and if App.tsx passes socialLinks to Header, HeaderProps in Header.tsx will need it.
// Given Header.tsx was updated to accept socialLinks, this is a good place to reflect that type.
// No specific changes needed here if HeaderProps is an inline interface in Header.tsx
// However, if we were to make HeaderProps a shared type, it would go here.
// For now, assuming Header.tsx handles its props interface correctly with the new socialLinks prop.
// The actual change for HeaderProps would be in Header.tsx if not a shared type.
// Let's assume the previous Header.tsx did not have SocialLinkItem in its props.
// The new Header.tsx will. This file defines SocialLinkItem which is used.
// No direct change needed in types.ts itself based on the request's implication,
// as the change is in how Header.tsx USES types from here.
