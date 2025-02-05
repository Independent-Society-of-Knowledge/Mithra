# Mithra Technical Requirements
## Introduction
This document presents in brief the technical requirements of Mithra, a presentation platform begin developed by Independent Society of Knowledge. In this document we would investigate what features are required to be met by the end product.

## Table of Contents
- [Feature] Authentication
- [Feature] Github OAuth and Request
- [Feature] Lecture Management
- [Feature] Presentation
- [Feature] Mithra plugins.
- [Feature] Marketplace.
- [Feature] AI Integration - next iterations
- [Feature] Running containers - next iterations

## Authentication
- User can signup in Mithra, using github, or email/password authentication.
- User can login to Mithra, using github, or email/password authentication.
- users can have no account but still get into open lecture, or enrolled lectures.

## Github OAuth and Request
- Users can connect their account to a github account.
- Connected accounts (github and Mithra) can pull or push on repositories containing markdown and mithra lecture files.
- There should be a push and pull methods for github interactions that doesn't allow the user to pull or push any repository, but only ones that are acceptable as presentation/lecture by Mithra.

## Lecture Management
- Lecture is an entity that holds the main source of contents in Mithra. It has a name, author, created date, last edited date, and a list of Blocks
- Blocks are the smallest form of content in Mithra, each block has a type, raw-content (to be rendered at front-end) and a nullable list of other blocks (subblocks), for later versions some blocks can contain another field called "kernel" which makes them runnable (for example a python code block contains python code, it's type is code:python, and later it can have a running kernel pointed to, in which case user can run it live.
- User is able to create, delete, and edit Lectures.
- User is able to make lectures private or public
- Private Lectures are only accessible via author, or provided list of acceptable users.
- Public Lectures are accessible through a link for authenticated and non-authenticated users at Mithra.
- User is able to pull a public lecture into his profile (similar to fork on github).
- Open Lectures have rating, and comments, and used count (how many users pulled the open lecture into their own profile).

## Presentation
- Lectures in a live meeting are called presentations.
- A presentation consists of 1) list of lectures attached to it, 2) people in the meeting, 3) type: Enrolling, Open, Closed
- People in meeting can be authors (which can lively interact with the lecture), audience (which can only view live changes).
- Enrolling type only makes the presentation visible to the ones that have a unique token, or the presentation is enrolled in their user profile.
- Each enrollment token can have one and only one presentation session (multiple computers with single tokens are rejected to be included as people in the meeting.
- Open type, makes the presentation available to anyone who has a public link of the presentation.
- Closed type, makes the presentation available to anyone the author grants permission of access to.
- Presentations should have live sockets for events in the meeting.
- Events in the meeting are, audio, textual-comment, presentation-update (next slide, edit, previous slide), screen and video sharing (if video sharing is hard it would be for the next iteration)
- User should be able to make a comming-soon-presentation, which is just a set-up that let's other users to enroll (enrollment form)

### Enrollment Process
- Enrollment process consists of a form, which fields are added by the user, for each enrollment a token should be generated and linked to the presentation.
- The data of enrollments should be shown for the author of the presentation.

## Mithra Plugins
- Plugins are javascript/typescript codes that can be loaded in a session for a user.
- Plugins can be themes, or other types of plugins (grammar check, ai, etc).
- Plugins would not be loaded in the server, they're merely for the client side enhancements.
- Similar to Lectures, plugins can be created, deleted, used, edited by the user.
- Similar to Lectures, plugins can be private (available for the creator only) or public (available for everyone)
- User can upload, or pull from git hub a repository (npm package) into their profile as their plugin. 
- Users can make their plugins public or private.
- Users can have access to public plugins in market-place
- Each plugins has pluginProfile, plugin rating, and comments, and used count (how many users use this plugin).

## Mithra Marketplace
- Marketplace is a service that allows users to use other peoples lectures, and plugins (if those are public).
- Users should be able to search in the market-place and find plugins or lectures.
- Lecture search is elastic (based on the content of the lecture and its name).
- Plugin search is based on the pluginProfile, which consists of, plugin-name, plugin-description, plugin-links

## Mithra Open/Enrolling Lectures
- Mithra Open Lectures is a service that allows users to search for available (and comming soon) lectures, and bookmark them in their profile, or add them to their google/outlook calendar and/or enroll in them.

