# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bluja is an Expo-based React Native mobile application using file-based routing (Expo Router). The app appears to be a service marketplace/platform with Turkish language support, featuring tab-based navigation for services, search, history, and account management.

## Development Commands

### Starting the Development Server

```bash
npm start              # Start Expo development server
npm run ios            # Run on iOS simulator
npm run android        # Run on Android emulator
npm run web            # Run in web browser
```

### Code Quality

```bash
npm run lint           # Run ESLint
```

### Project Reset

```bash
npm run reset-project  # Moves starter code to app-example/ and creates blank app/ directory
```

### Default Package Manager

- Yarn

## Architecture

### Routing Structure

- **File-based routing** via Expo Router (v6)
- Root layout: `app/_layout.tsx` - handles fonts, splash screen, and global navigation
- Tab navigation: `app/(tabs)/_layout.tsx` - custom tab bar with FAB button
- Main routes:
  - `/(tabs)/service/service` - Home/service screen (Anasayfa)
  - `/(tabs)/search` - Search functionality (Ara)
  - `/(tabs)/history` - History view (Geçmiş)
  - `/(tabs)/account` - Account settings (Hesap)
  - `/home` - Accessed via FAB (+) button in tab bar

### Component Organization

- **Primitives** (`primitives/`): Reusable low-level components

  - Text components: `Text400`, `Text500`, `Text600`, `Text700` - Inter font variants
  - `Screen` component for consistent screen layouts
  - Exported via `primitives/index.ts`

- **Headers** (`components/headers/`): Custom navigation headers

  - `HeaderThemeColor` - Purple branded header with logo and notifications
  - `HeaderWhite` - Standard white header

- **Other Components** (`components/`): Feature-specific components
  - `AddressBar` - Location/address selector

### Rules

- Do not user TouchableOpacity component from React Native

### Styling & Theming

- **Colors** defined in `constants/colors.ts`:
  - `COLOR_PRIMARY`: `#8E50C1` (purple brand color)
  - `COLOR_TEXT`: `#203043` (dark text)
- **Typography**: Inter font family with weights 400, 500, 600, 700
- **Icons**: Using `@expo/vector-icons` (MaterialIcons, MaterialCommunityIcons, Ionicons)

### Path Aliases

TypeScript configured with `@/*` alias pointing to project root for cleaner imports:

```typescript
import { Text500 } from "@/primitives";
import { COLOR_PRIMARY } from "@/constants/colors";
```

### Platform-Specific Styling

The app uses `Platform.select()` for iOS/Android-specific styles (shadows vs elevation).

### Key Technologies

- React Native 0.81.4 with React 19.1.0
- Expo SDK ~54
- React Navigation v7 with custom bottom tabs
- TypeScript with strict mode enabled
- Safe Area Context for proper iOS/Android screen edges handling
- Expo new architecture enabled (`newArchEnabled: true`)

### Localization

App uses Turkish language interface. When adding new features, maintain Turkish labels and text.

## App Overview

This is a super-app style platform connecting users who need blue-collar jobs done with providers offering these services. The app focuses on simple, non-specialized jobs and aims to be a seamless matching and communication platform.

- **Type**: Mobile Application
- **Technology**: React Native
- **User Types**: User, Provider
- **Goal**: Investable MVP

### Initial Services

- Cleaning (Home, Office, etc.)
- Painting (House, Office, etc.)
- Gardening (Lawn mowing, tree pruning, garden cleaning, etc.)
- Tutoring

More services to be added later

### User Flow

1. User opens the app.
2. User selects a service from the home screen.
3. User is taken to the service-specific main screen.
4. User taps Create Request.
5. User fills and submits a request form (details: scope, budget, urgency).
6. User can revise and re-publish unaccepted requests with limited revisions (time or count based).
7. After revision, providers receive updated notifications.
8. Requests are delivered to nearby active providers matching the service type.
9. Providers view request details and user profiles.
10. One provider can accept a request; once accepted, others cannot accept it.
11. User gets notified of acceptance and views the provider’s profile.
12. User approves or rejects the provider:

- If approved, a communication channel opens until service completion.
- If rejected, the request returns to the pool excluding the rejected provider.

13. Cancellation requires mutual consent; unilateral cancellation is disallowed and may incur penalties.
14. Upon service completion, both user and provider can rate and review each other.
15. When no active service exists, users cannot access provider profiles.
16. Providers can offer services in only one category.

### Platform Scope & Functional Details

- No payment integration initially (app acts only as a connection platform, no escrow or guarantees).
- Services will be limited to those not requiring certification or specialization.
- Both users and providers can submit complaints about services.
- General and service-specific resolution mechanisms will be implemented (e.g., before/after photos).
- Pilot launch will be limited to a specific region (country TBD).
- Request revision limits to prevent abuse (revision count or timing constraints).

### Notes

- The app encourages straightforward, accessible service matching.
- Focus on usability for both users and providers with clear interaction flows.
- Communication channel only opens post provider approval to protect privacy.
- Cancellation policy aims to reduce service abuse and improve trust.
- Ratings and reviews support quality and reliability feedback loops.
